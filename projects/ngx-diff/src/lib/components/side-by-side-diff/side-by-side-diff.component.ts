import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { Diff, DiffOp } from 'diff-match-patch-ts';
import { DiffMatchPatchService } from '../../services/diff-match-patch/diff-match-patch.service';

import { LineNumberPipe } from '../../pipes/line-number/line-number.pipe';
import { LineDiffType } from '../../common/line-diff-type';
import { NgClass } from '@angular/common';
import { LineSelectEvent } from '../../common/line-select-event';

interface IDiffCalculation {
  beforeLineNumber: number;
  afterLineNumber: number;
}

interface ILine {
  id: string;
  type: LineDiffType;
  lineNumber: number | null;
  line: string | null;
  cssClass: string;
  args?: {
    skippedLines: string[];
    beforeLineNumber: number;
    afterLineNumber: number;
  };
}

type LineDiffResult = {
  isContentEqual: boolean;
  beforeLines: ILine[];
  afterLines: ILine[];
  diffSummary: {
    numLinesAdded: number;
    numLinesRemoved: number;
  };
};

const transformToString = (value: string | number | boolean | undefined) => {
  if (typeof value === 'number' || typeof value === 'boolean') {
    return value.toString();
  }

  return value ?? '';
};

@Component({
  selector: 'ngx-side-by-side-diff',
  imports: [NgClass, LineNumberPipe],
  templateUrl: './side-by-side-diff.component.html',
  styleUrl: './side-by-side-diff.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBySideDiffComponent {
  private readonly dmp = inject(DiffMatchPatchService);

  /**
   * Optional title to be displayed at the top of the diff.
   */
  public readonly title = input<string>();
  public readonly before = input.required<string | number | boolean | undefined>();
  public readonly after = input.required<string | number | boolean | undefined>();

  /**
   * The number of lines of context to provide either side of a DiffOp.Insert or DiffOp.Delete diff.
   * Context is taken from a DiffOp.Equal section.
   */
  public readonly lineContextSize = input<number>();

  public readonly selectedLineChange = output<LineSelectEvent>();

  public readonly isContentEqual = computed(() => this.lineDiffResult().isContentEqual);
  public readonly diffSummary = computed(() => this.lineDiffResult().diffSummary);

  public readonly beforeLines = signal<ILine[]>([]); // computed(() => this.lineDiffResult().beforeLines);
  public readonly afterLines = signal<ILine[]>([]); // computed(() => this.lineDiffResult().afterLines);

  public selectedLineIndex?: number;

  private readonly beforeText = computed(() => transformToString(this.before()));
  private readonly afterText = computed(() => transformToString(this.after()));

  private readonly lineDiffs = computed(() => {
    return this.dmp.computeLineDiff(this.beforeText(), this.afterText());
  });

  private readonly lineDiffResult = computed(() => {
    return this.calculateLineDiffs(this.lineDiffs());
  });

  public constructor() {
    effect(() => {
      this.beforeLines.set(this.lineDiffResult().beforeLines);
    });
    effect(() => {
      this.afterLines.set(this.lineDiffResult().afterLines);
    });
  }

  public selectLine(index: number): void {
    this.selectedLineIndex = index;

    const selectedBeforeLine = this.beforeLines()[index];
    const selectedAfterLine = this.afterLines()[index];

    const type = selectedAfterLine.type;

    const line =
      (type === LineDiffType.Delete ? selectedBeforeLine.line : selectedAfterLine.line) ?? '';

    let lineNumberInOldText: number | null = null;
    let lineNumberInNewText: number | null = null;

    switch (type) {
      case LineDiffType.Insert: {
        lineNumberInNewText = selectedAfterLine.lineNumber;
        break;
      }
      case LineDiffType.Delete: {
        lineNumberInOldText = selectedBeforeLine.lineNumber;
        break;
      }
      case LineDiffType.Equal: {
        lineNumberInOldText = selectedBeforeLine.lineNumber;
        lineNumberInNewText = selectedAfterLine.lineNumber;
        break;
      }
    }

    if (type === LineDiffType.Placeholder) {
      this.expandPlaceholder(index, selectedBeforeLine);
      this.selectedLineIndex = undefined;
    }

    this.selectedLineChange.emit({
      index,
      type,
      lineNumberInOldText,
      lineNumberInNewText,
      line,
    });
  }

  private expandPlaceholder(index: number, placeholder: ILine): void {
    const replacementLines = this.getPlaceholderReplacementLines(placeholder);

    this.beforeLines.update((beforeLines) => {
      const newBeforeLines = [...beforeLines];
      newBeforeLines.splice(index, 1, ...replacementLines.beforeLineDiffs);
      return newBeforeLines;
    });

    this.afterLines.update((afterLines) => {
      const newAfterLines = [...afterLines];
      newAfterLines.splice(index, 1, ...replacementLines.afterLineDiffs);
      return newAfterLines;
    });
  }

  private getPlaceholderReplacementLines(placeholder: ILine): {
    beforeLineDiffs: ILine[];
    afterLineDiffs: ILine[];
  } {
    const { skippedLines, beforeLineNumber, afterLineNumber } = placeholder.args!;

    const lineContextSize = this.lineContextSize();

    if (lineContextSize && skippedLines.length > 2 * lineContextSize) {
      const prefix = skippedLines.slice(0, lineContextSize);
      const remainingSkippedLines = skippedLines.slice(
        lineContextSize,
        skippedLines.length - lineContextSize,
      );
      const suffix = skippedLines.slice(skippedLines.length - lineContextSize, skippedLines.length);

      const prefixLines = SideBySideDiffComponent.createLineDiffs(
        prefix,
        beforeLineNumber,
        afterLineNumber,
      );

      const newPlaceholder: ILine = {
        id: `skip-${beforeLineNumber}-${afterLineNumber}-${remainingSkippedLines.length}`,
        type: LineDiffType.Placeholder,
        lineNumber: null,
        line: `... ${remainingSkippedLines.length} hidden lines ...`,
        args: {
          skippedLines: remainingSkippedLines,
          beforeLineNumber: beforeLineNumber + prefix.length,
          afterLineNumber: afterLineNumber + prefix.length,
        },
        cssClass: SideBySideDiffComponent.getCssClass(LineDiffType.Placeholder),
      };

      const numberOfPrefixAndSkippedLines = prefix.length + remainingSkippedLines.length;

      const suffixLines = SideBySideDiffComponent.createLineDiffs(
        suffix,
        beforeLineNumber + numberOfPrefixAndSkippedLines,
        afterLineNumber + numberOfPrefixAndSkippedLines,
      );

      return {
        beforeLineDiffs: [
          ...prefixLines.beforeLineDiffs,
          newPlaceholder,
          ...suffixLines.beforeLineDiffs,
        ],
        afterLineDiffs: [
          ...prefixLines.afterLineDiffs,
          newPlaceholder,
          ...suffixLines.afterLineDiffs,
        ],
      };
    }

    return SideBySideDiffComponent.createLineDiffs(skippedLines, beforeLineNumber, afterLineNumber);
  }

  private static createLineDiffs(
    lines: string[],
    startLineInOldText: number,
    startLineInNewText: number,
  ): { beforeLineDiffs: ILine[]; afterLineDiffs: ILine[] } {
    let beforeLineNumber = startLineInOldText;
    let afterLineNumber = startLineInNewText;

    const cssClass = this.getCssClass(LineDiffType.Equal);

    const beforeLineDiffs: ILine[] = [];
    const afterLineDiffs: ILine[] = [];

    for (const line of lines) {
      const toInsert = {
        type: LineDiffType.Equal,
        line,
        cssClass,
      };

      beforeLineDiffs.push({
        id: `eql-${beforeLineNumber}`,
        ...toInsert,
        lineNumber: beforeLineNumber,
      });
      beforeLineNumber++;

      afterLineDiffs.push({
        id: `eql-${afterLineNumber}`,
        ...toInsert,
        lineNumber: afterLineNumber,
      });
      afterLineNumber++;
    }

    return { beforeLineDiffs, afterLineDiffs };
  }

  private calculateLineDiffs(diffs: Diff[]): LineDiffResult {
    const beforeLines: ILine[] = [];
    const afterLines: ILine[] = [];

    const diffCalculation = {
      beforeLineNumber: 1,
      afterLineNumber: 1,
    };

    const isContentEqual = diffs.length === 1 && diffs[0][0] === DiffOp.Equal;

    if (isContentEqual) {
      return {
        beforeLines,
        afterLines,
        diffSummary: {
          numLinesAdded: 0,
          numLinesRemoved: 0,
        },
        isContentEqual,
      };
    }

    const lineContextSize = this.lineContextSize();
    for (let i = 0; i < diffs.length; i++) {
      const diff = diffs[i];
      const diffLines: string[] = diff[1].split(/\r?\n/);

      // If the original line had a \r\n at the end then remove the
      // empty string after it.
      if (diffLines[diffLines.length - 1].length === 0) {
        diffLines.pop();
      }

      switch (diff[0]) {
        case DiffOp.Equal: {
          const isFirstDiff = i === 0;
          const isLastDiff = i === diffs.length - 1;
          SideBySideDiffComponent.outputEqualDiff(
            diffLines,
            diffCalculation,
            isFirstDiff,
            isLastDiff,
            lineContextSize,
            beforeLines,
            afterLines,
          );
          break;
        }
        case DiffOp.Delete: {
          SideBySideDiffComponent.outputDeleteDiff(
            diffLines,
            diffCalculation,
            beforeLines,
            afterLines,
          );
          break;
        }
        case DiffOp.Insert: {
          SideBySideDiffComponent.outputInsertDiff(
            diffLines,
            diffCalculation,
            beforeLines,
            afterLines,
          );
          break;
        }
      }
    }

    const diffSummary = {
      numLinesAdded: afterLines.filter((x) => x.type === LineDiffType.Insert).length,
      numLinesRemoved: beforeLines.filter((x) => x.type === LineDiffType.Delete).length,
    };

    return {
      beforeLines,
      afterLines,
      diffSummary,
      isContentEqual,
    };
  }

  /* If the number of diffLines is greater than lineContextSize then we may need to adjust the diff
   * that is output.
   *   > If the first diff of a document is DiffOp.Equal then the leading lines can be dropped
   *     leaving the last 'lineContextSize' lines for context.
   *   > If the last diff of a document is DiffOp.Equal then the trailing lines can be dropped
   *     leaving the first 'lineContextSize' lines for context.
   *   > If the diff is a DiffOp.Equal occurs in the middle then the diffs either side of it must be
   *     DiffOp.Insert or DiffOp.Delete. If it has more than 2 * 'lineContextSize' lines of content
   *     then the middle lines are dropped leaving the first 'lineContextSize' and last 'lineContextSize'
   *     lines for context. A special line is inserted with '...' indicating that content is skipped.
   *
   * A document cannot consist of a single Diff with DiffOp.Equal and reach this function because
   * in this case the calculateLineDiff method returns early.
   */
  private static outputEqualDiff(
    diffLines: string[],
    diffCalculation: IDiffCalculation,
    isFirstDiff: boolean,
    isLastDiff: boolean,
    lineContextSize: number | undefined,
    beforeLines: ILine[],
    afterLines: ILine[],
  ): void {
    if (lineContextSize && diffLines.length > lineContextSize) {
      if (isFirstDiff) {
        // Take the last 'lineContextSize' lines from the first diff
        const lineIncrement = diffLines.length - lineContextSize;
        diffCalculation.beforeLineNumber += lineIncrement;
        diffCalculation.afterLineNumber += lineIncrement;
        diffLines = diffLines.slice(diffLines.length - lineContextSize, diffLines.length);
      } else if (isLastDiff) {
        // Take only the first 'lineContextSize' lines from the final diff
        diffLines = diffLines.slice(0, lineContextSize);
      } else if (diffLines.length > 2 * lineContextSize) {
        // Take the first 'lineContextSize' lines from this diff to provide context for the last diff
        this.outputEqualDiffLines(
          diffLines.slice(0, lineContextSize),
          diffCalculation,
          beforeLines,
          afterLines,
        );

        const skippedLines = diffLines.slice(lineContextSize, diffLines.length - lineContextSize);

        // Output a special line indicating that some content is equal and has been skipped
        const skippedLine = {
          id: `skip-${diffCalculation.beforeLineNumber}-${diffCalculation.afterLineNumber}-${skippedLines.length}`,
          type: LineDiffType.Placeholder,
          lineNumber: null,
          line: `... ${skippedLines.length} hidden lines ...`,
          cssClass: this.getCssClass(LineDiffType.Placeholder),
          args: {
            skippedLines,
            beforeLineNumber: diffCalculation.beforeLineNumber,
            afterLineNumber: diffCalculation.afterLineNumber,
          },
        };

        beforeLines.push(skippedLine);
        afterLines.push(skippedLine);

        const numberOfSkippedLines = diffLines.length - 2 * lineContextSize;
        diffCalculation.beforeLineNumber += numberOfSkippedLines;
        diffCalculation.afterLineNumber += numberOfSkippedLines;

        // Take the last 'lineContextSize' lines from this diff to provide context for the next diff
        this.outputEqualDiffLines(
          diffLines.slice(diffLines.length - lineContextSize),
          diffCalculation,
          beforeLines,
          afterLines,
        );
        // This if branch has already output the diff lines so we return early to avoid outputting the lines
        // at the end of the method.
        return;
      }
    }
    this.outputEqualDiffLines(diffLines, diffCalculation, beforeLines, afterLines);
  }

  private static outputEqualDiffLines(
    diffLines: string[],
    diffCalculation: IDiffCalculation,
    beforeLines: ILine[],
    afterLines: ILine[],
  ): void {
    for (const line of diffLines) {
      beforeLines.push({
        id: `eql-${diffCalculation.beforeLineNumber}`,
        type: LineDiffType.Equal,
        lineNumber: diffCalculation.beforeLineNumber,
        line,
        cssClass: this.getCssClass(LineDiffType.Equal),
      });

      afterLines.push({
        id: `eql-${diffCalculation.afterLineNumber}`,
        type: LineDiffType.Equal,
        lineNumber: diffCalculation.afterLineNumber,
        line,
        cssClass: this.getCssClass(LineDiffType.Equal),
      });

      diffCalculation.beforeLineNumber++;
      diffCalculation.afterLineNumber++;
    }
  }

  private static outputDeleteDiff(
    diffLines: string[],
    diffCalculation: IDiffCalculation,
    beforeLines: ILine[],
    afterLines: ILine[],
  ): void {
    for (const line of diffLines) {
      beforeLines.push({
        id: `del-${diffCalculation.beforeLineNumber}`,
        type: LineDiffType.Delete,
        lineNumber: diffCalculation.beforeLineNumber,
        line,
        cssClass: this.getCssClass(LineDiffType.Delete),
      });

      afterLines.push({
        id: `del-${diffCalculation.beforeLineNumber}`,
        type: LineDiffType.Delete,
        lineNumber: null,
        line: null,
        cssClass: this.getCssClass(LineDiffType.Delete),
      });

      diffCalculation.beforeLineNumber++;
    }
  }

  private static outputInsertDiff(
    diffLines: string[],
    diffCalculation: IDiffCalculation,
    beforeLines: ILine[],
    afterLines: ILine[],
  ): void {
    for (const line of diffLines) {
      beforeLines.push({
        id: `ins-${diffCalculation.afterLineNumber}`,
        type: LineDiffType.Insert,
        lineNumber: null,
        line: null,
        cssClass: this.getCssClass(LineDiffType.Insert),
      });

      afterLines.push({
        id: `ins-${diffCalculation.afterLineNumber}`,
        type: LineDiffType.Insert,
        lineNumber: diffCalculation.afterLineNumber,
        line,
        cssClass: this.getCssClass(LineDiffType.Insert),
      });

      diffCalculation.afterLineNumber++;
    }
  }

  private static getCssClass(type: LineDiffType): string {
    switch (type) {
      case LineDiffType.Placeholder:
      case LineDiffType.Equal:
        return 'sbs-diff-equal';
      case LineDiffType.Insert:
        return 'sbs-diff-insert';
      case LineDiffType.Delete:
        return 'sbs-diff-delete';
      default:
        return 'unknown';
    }
  }
}
