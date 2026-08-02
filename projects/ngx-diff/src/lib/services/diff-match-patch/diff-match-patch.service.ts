import { type Diff, DiffMatchPatch, DiffOp } from 'diff-match-patch-ts';

import { inject, InjectionToken, OnDestroy, Service } from '@angular/core';

import { InlineSegment } from '../../common/inline-segment.interface';
import { IntraLineDiffMode } from '../../common/intra-line-diff-mode.type';

export interface IDiffWebWorkerFactory {
  createWorker(): Worker | undefined;
}

interface DiffWorkerSuccessResponse {
  id: number;
  status: 'success';
  diffs: Diff[];
}

interface DiffWorkerErrorResponse {
  id: number;
  status: 'error';
  error: { message: string };
}

export const NGX_DIFF_WEB_WORKER_FACTORY = new InjectionToken('NGX_DIFF_WEB_WORKER_FACTORY');

@Service()
export class DiffMatchPatchService implements OnDestroy {
  private readonly dmp = new DiffMatchPatch();

  private readonly promises = new Map<
    number,
    { resolve: (value: Diff[]) => void; reject: (reason?: unknown) => void }
  >();

  private readonly factory = inject<IDiffWebWorkerFactory>(NGX_DIFF_WEB_WORKER_FACTORY, {
    optional: true,
  });

  private worker?: Worker;
  private messageId = 0;

  /**
   * Compute a line diff between the specified texts.
   * @param text1 Old text.
   * @param text2 New text.
   */
  public computeLineDiff(text1: string, text2: string): Promise<Diff[]> {
    if (this.factory && this.isPotentiallyLongComputation(text1, text2)) {
      const worker = this.getOrCreateWorker();

      if (worker) {
        return new Promise<Diff[]>((resolve, reject) => {
          const id = this.messageId++;
          this.promises.set(id, { resolve, reject });

          try {
            worker.postMessage({ id, before: text1, after: text2 });
          } catch (error) {
            this.promises.delete(id);
            reject(error);
          }
        });
      }
    }

    return new Promise((resolve) => resolve(this.dmp.diff_lineMode(text1, text2)));
  }

  /**
   * Compute intra-line diff segments between an old line and a new line.
   * Returns segments for the old line and segments for the new line.
   */
  public computeIntraLineDiff(
    oldLine: string,
    newLine: string,
    mode: IntraLineDiffMode,
  ): { oldSegments: InlineSegment[]; newSegments: InlineSegment[] } {
    if (mode === 'none') {
      return { oldSegments: [], newSegments: [] };
    }

    let diffs: Diff[];
    if (mode === 'word') {
      diffs = this.diff_wordMode(oldLine, newLine);
    } else {
      diffs = this.diff_characterMode(oldLine, newLine);
    }

    const oldSegments: InlineSegment[] = [];
    const newSegments: InlineSegment[] = [];

    for (const [op, text] of diffs) {
      if (op === DiffOp.Equal) {
        oldSegments.push({ text, type: DiffOp.Equal });
        newSegments.push({ text, type: DiffOp.Equal });
      } else if (op === DiffOp.Delete) {
        oldSegments.push({ text, type: DiffOp.Delete });
      } else if (op === DiffOp.Insert) {
        newSegments.push({ text, type: DiffOp.Insert });
      }
    }

    return { oldSegments, newSegments };
  }

  public ngOnDestroy(): void {
    if (this.worker) {
      const error = new Error('DiffMatchPatchService is being destroyed.');
      for (const promise of this.promises.values()) {
        promise.reject(error);
      }
      this.promises.clear();

      this.worker.terminate();
      this.worker = undefined;
    }
  }

  private getOrCreateWorker(): Worker | undefined {
    if (this.worker) {
      return this.worker;
    }

    const worker = this.factory?.createWorker();
    if (worker) {
      this.worker = worker;
      this.worker.onmessage = this.onWorkerMessage.bind(this);
      this.worker.onerror = this.onWorkerError.bind(this);
    }
    return this.worker;
  }

  private onWorkerMessage({
    data,
  }: MessageEvent<DiffWorkerSuccessResponse | DiffWorkerErrorResponse>): void {
    const promise = this.promises.get(data.id);
    if (!promise) {
      console.error('Received a message from web worker with an unknown id.', data);
      return;
    }

    if (data.status === 'success') {
      promise.resolve(data.diffs);
    } else if (data.status === 'error') {
      console.error('Web worker error:', data.error);
      promise.reject(new Error(data.error.message));
    }
    this.promises.delete(data.id);
  }

  private onWorkerError(error: ErrorEvent): void {
    for (const promise of this.promises.values()) {
      promise.reject(error);
    }
    this.promises.clear();

    if (this.worker) {
      this.worker.terminate();
      this.worker = undefined;
    }
  }

  private isPotentiallyLongComputation(text1: string, text2: string): boolean {
    const numLines1 = this.countNewLines(text1);
    const numLines2 = this.countNewLines(text2);

    return numLines1 + numLines2 > 10000;
  }

  private countNewLines(input: string): number {
    const matches = input.match(/\n/g);
    return matches ? matches.length : 0;
  }

  /**
   * Perform a word-level diff by encoding words as unicode characters
   * and running a character-level diff.
   */
  private diff_wordMode(text1: string, text2: string): Diff[] {
    // Tokenise each text into words + non-word tokens (whitespace, punctuation)
    const { encoded1, encoded2, tokens } = this.encodeTokens(text1, text2, /\S+|\s+/g);

    const rawDiffs = this.dmp.diff_main(encoded1, encoded2, false);
    this.dmp.diff_cleanupSemantic(rawDiffs);

    return this.decodeTokenDiffs(rawDiffs, tokens);
  }

  /**
   * Perform a character-level diff.
   */
  private diff_characterMode(text1: string, text2: string): Diff[] {
    const diffs = this.dmp.diff_main(text1, text2, false);
    this.dmp.diff_cleanupSemantic(diffs);
    return diffs;
  }

  /**
   * Encode text into a string of unicode characters where each character
   * represents a token from the regex.
   */
  private encodeTokens(
    text1: string,
    text2: string,
    tokenRegex: RegExp,
  ): { encoded1: string; encoded2: string; tokens: string[] } {
    const tokenMap = new Map<string, number>();
    const tokens: string[] = [];

    const encode = (text: string): string => {
      const parts = text.match(tokenRegex) ?? [];
      let encoded = '';
      for (const part of parts) {
        if (!tokenMap.has(part)) {
          tokenMap.set(part, tokens.length);
          tokens.push(part);
        }
        // Use private-use unicode area starting at U+E000 to avoid collisions
        encoded += String.fromCodePoint(0xe000 + tokenMap.get(part)!);
      }
      return encoded;
    };

    const encoded1 = encode(text1);
    const encoded2 = encode(text2);

    return { encoded1, encoded2, tokens };
  }

  /**
   * Decode a diff of encoded token characters back to actual text.
   */
  private decodeTokenDiffs(rawDiffs: Diff[], tokens: string[]): Diff[] {
    return rawDiffs.map(([op, encoded]) => {
      let text = '';
      for (const cp of encoded) {
        const idx = cp.codePointAt(0)! - 0xe000;
        text += tokens[idx] ?? cp;
      }
      return [op, text] as Diff;
    });
  }
}
