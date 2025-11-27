import { type Diff, DiffMatchPatch } from 'diff-match-patch-ts';

import { inject, Injectable, InjectionToken, OnDestroy } from '@angular/core';

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

@Injectable({
  providedIn: 'root',
})
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
}
