import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
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

@Component({
    selector: 'ngx-side-by-side-diff',
    imports: [NgClass, LineNumberPipe],
    templateUrl: './side-by-side-diff.component.html',
    styleUrl: './side-by-side-diff.component.scss'
})
export class SideBySideDiffComponent implements OnInit, OnChanges {
  /**
   * Optional title to be displayed at the top of the diff.
   */
  @Input({ required: false })
  public title?: string;

  @Input({ required: true })
  public before?: string;

  @Input({ required: true })
  public after?: string;

  /**
   * The number of lines of context to provide either side of a DiffOp.Insert or DiffOp.Delete diff.
   * Context is taken from a DiffOp.Equal section.
   */
  @Input({ required: false })
  public lineContextSize?: number;

  @Output()
  public selectedLineChange = new EventEmitter<LineSelectEvent>();

  public isContentEqual = false;
  public diffSummary = {
    numLinesAdded: 0,
    numLinesRemoved: 0,
  };

  public beforeLines: ILine[] = [];
  public afterLines: ILine[] = [];
  public selectedLineIndex?: number;

  public constructor(private readonly dmp: DiffMatchPatchService) {}

  public ngOnInit(): void {
    this.update();
  }

  public ngOnChanges(): void {
    this.update();
  }

  public selectLine(index: number): void {
    this.selectedLineIndex = index;

    const selectedBeforeLine = this.beforeLines[index];
    const selectedAfterLine = this.afterLines[index];

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

    this.beforeLines.splice(index, 1, ...replacementLines.beforeLineDiffs);
    this.afterLines.splice(index, 1, ...replacementLines.afterLineDiffs);
  }

  private getPlaceholderReplacementLines(placeholder: ILine): {
    beforeLineDiffs: ILine[];
    afterLineDiffs: ILine[];
  } {
    const { skippedLines, beforeLineNumber, afterLineNumber } = placeholder.args!;

    if (this.lineContextSize && skippedLines.length > 2 * this.lineContextSize) {
      const prefix = skippedLines.slice(0, this.lineContextSize);
      const remainingSkippedLines = skippedLines.slice(
        this.lineContextSize,
        skippedLines.length - this.lineContextSize,
      );
      const suffix = skippedLines.slice(
        skippedLines.length - this.lineContextSize,
        skippedLines.length,
      );

      const prefixLines = this.createLineDiffs(prefix, beforeLineNumber, afterLineNumber);

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
        cssClass: this.getCssClass(LineDiffType.Placeholder),
      };

      const numberOfPrefixAndSkippedLines = prefix.length + remainingSkippedLines.length;

      const suffixLines = this.createLineDiffs(
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

    return this.createLineDiffs(skippedLines, beforeLineNumber, afterLineNumber);
  }

  private createLineDiffs(
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

  private update(): void {
    const beforeText = this.before ?? '';
    const afterText = this.after ?? '';
    this.calculateLineDiffs(this.dmp.computeLineDiff(beforeText, afterText));
  }

  private calculateLineDiffs(diffs: Diff[]): void {
    this.beforeLines = [];
    this.afterLines = [];

    const diffCalculation = {
      beforeLineNumber: 1,
      afterLineNumber: 1,
    };

    this.isContentEqual = diffs.length === 1 && diffs[0][0] === DiffOp.Equal;

    if (this.isContentEqual) {
      this.beforeLines = [];
      this.afterLines = [];
      this.diffSummary = {
        numLinesAdded: 0,
        numLinesRemoved: 0,
      };
      return;
    }

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
          this.outputEqualDiff(diffLines, diffCalculation, isFirstDiff, isLastDiff);
          break;
        }
        case DiffOp.Delete: {
          this.outputDeleteDiff(diffLines, diffCalculation);
          break;
        }
        case DiffOp.Insert: {
          this.outputInsertDiff(diffLines, diffCalculation);
          break;
        }
      }
    }

    this.diffSummary = {
      numLinesAdded: this.afterLines.filter((x) => x.type === LineDiffType.Insert).length,
      numLinesRemoved: this.beforeLines.filter((x) => x.type === LineDiffType.Delete).length,
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
  private outputEqualDiff(
    diffLines: string[],
    diffCalculation: IDiffCalculation,
    isFirstDiff: boolean,
    isLastDiff: boolean,
  ): void {
    if (this.lineContextSize && diffLines.length > this.lineContextSize) {
      if (isFirstDiff) {
        // Take the last 'lineContextSize' lines from the first diff
        const lineIncrement = diffLines.length - this.lineContextSize;
        diffCalculation.beforeLineNumber += lineIncrement;
        diffCalculation.afterLineNumber += lineIncrement;
        diffLines = diffLines.slice(diffLines.length - this.lineContextSize, diffLines.length);
      } else if (isLastDiff) {
        // Take only the first 'lineContextSize' lines from the final diff
        diffLines = diffLines.slice(0, this.lineContextSize);
      } else if (diffLines.length > 2 * this.lineContextSize) {
        // Take the first 'lineContextSize' lines from this diff to provide context for the last diff
        this.outputEqualDiffLines(diffLines.slice(0, this.lineContextSize), diffCalculation);

        const skippedLines = diffLines.slice(
          this.lineContextSize,
          diffLines.length - this.lineContextSize,
        );

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

        this.beforeLines.push(skippedLine);
        this.afterLines.push(skippedLine);

        const numberOfSkippedLines = diffLines.length - 2 * this.lineContextSize;
        diffCalculation.beforeLineNumber += numberOfSkippedLines;
        diffCalculation.afterLineNumber += numberOfSkippedLines;

        // Take the last 'lineContextSize' lines from this diff to provide context for the next diff
        this.outputEqualDiffLines(
          diffLines.slice(diffLines.length - this.lineContextSize),
          diffCalculation,
        );
        // This if branch has already output the diff lines so we return early to avoid outputting the lines
        // at the end of the method.
        return;
      }
    }
    this.outputEqualDiffLines(diffLines, diffCalculation);
  }

  private outputEqualDiffLines(diffLines: string[], diffCalculation: IDiffCalculation): void {
    for (const line of diffLines) {
      this.beforeLines.push({
        id: `eql-${diffCalculation.beforeLineNumber}`,
        type: LineDiffType.Equal,
        lineNumber: diffCalculation.beforeLineNumber,
        line,
        cssClass: this.getCssClass(LineDiffType.Equal),
      });

      this.afterLines.push({
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

  private outputDeleteDiff(diffLines: string[], diffCalculation: IDiffCalculation): void {
    for (const line of diffLines) {
      this.beforeLines.push({
        id: `del-${diffCalculation.beforeLineNumber}`,
        type: LineDiffType.Delete,
        lineNumber: diffCalculation.beforeLineNumber,
        line,
        cssClass: this.getCssClass(LineDiffType.Delete),
      });

      this.afterLines.push({
        id: `del-${diffCalculation.beforeLineNumber}`,
        type: LineDiffType.Delete,
        lineNumber: null,
        line: null,
        cssClass: this.getCssClass(LineDiffType.Delete),
      });

      diffCalculation.beforeLineNumber++;
    }
  }

  private outputInsertDiff(diffLines: string[], diffCalculation: IDiffCalculation): void {
    for (const line of diffLines) {
      this.beforeLines.push({
        id: `ins-${diffCalculation.afterLineNumber}`,
        type: LineDiffType.Insert,
        lineNumber: null,
        line: null,
        cssClass: this.getCssClass(LineDiffType.Insert),
      });

      this.afterLines.push({
        id: `ins-${diffCalculation.afterLineNumber}`,
        type: LineDiffType.Insert,
        lineNumber: diffCalculation.afterLineNumber,
        line,
        cssClass: this.getCssClass(LineDiffType.Insert),
      });

      diffCalculation.afterLineNumber++;
    }
  }

  private getCssClass(type: LineDiffType): string {
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
