import { Diff, DiffOp } from 'diff-match-patch-ts';

import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { IDiffCalculation } from '../../common/diff-calculation.interface';
import { LineDiffType } from '../../common/line-diff-type';
import { LineSelectEvent } from '../../common/line-select-event';
import { DiffMatchPatchService } from '../../services/diff-match-patch/diff-match-patch.service';
import { LineNumberPipe } from '../../pipes/line-number/line-number.pipe';
import { NgClass } from '@angular/common';

type LineDiff = {
  type: LineDiffType;
  lineNumberInOldText: number | null;
  lineNumberInNewText: number | null;
  line: string;
  args?: { skippedLines?: string[]; lineInOldText?: number | null; lineInNewText?: number | null };
  cssClass: string;
};

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'inline-diff',
  templateUrl: './inline-diff.component.html',
  styleUrls: ['./inline-diff.component.scss'],
  standalone: true,
  imports: [NgClass, LineNumberPipe],
})
export class InlineDiffComponent implements OnInit, OnChanges {
  @Input()
  public oldText: string | number | boolean | undefined;
  @Input()
  public newText: string | number | boolean | undefined;
  // The number of lines of context to provide either side of a DiffOp.Insert or DiffOp.Delete diff.
  // Context is taken from a DiffOp.Equal section.
  @Input()
  public lineContextSize: number | undefined;

  @Output()
  public selectedLineChange = new EventEmitter<LineSelectEvent>();

  public calculatedDiff: LineDiff[];
  public selectedLine?: LineDiff;
  public isContentEqual: boolean;

  public constructor(private readonly dmp: DiffMatchPatchService) {
    this.calculatedDiff = [];
    this.isContentEqual = false;
  }

  public ngOnInit(): void {
    this.updateHtml();
  }

  public ngOnChanges(): void {
    this.updateHtml();
  }

  public selectLine(index: number, lineDiff: LineDiff): void {
    this.selectedLine = lineDiff;
    const { type, lineNumberInOldText, lineNumberInNewText, line } = lineDiff;

    if (type === LineDiffType.Placeholder) {
      this.expandPlaceholder(index, lineDiff);
    }

    this.selectedLineChange.emit({
      index,
      type,
      lineNumberInOldText,
      lineNumberInNewText,
      line,
    });
  }

  private expandPlaceholder(index: number, placeholder: LineDiff): void {
    const replacementLines = this.getPlaceholderReplacementLines(placeholder);
    this.calculatedDiff.splice(index, 1, ...replacementLines);
  }

  private getPlaceholderReplacementLines(placeholder: LineDiff): LineDiff[] {
    const skippedLines = placeholder.args?.skippedLines ?? [];
    const lineInOldText = placeholder.args?.lineInOldText ?? 0;
    const lineInNewText = placeholder.args?.lineInNewText ?? 0;

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

      const prefixLines = this.createLineDiffs(prefix, lineInOldText, lineInNewText);

      const newPlaceholder: LineDiff = {
        type: LineDiffType.Placeholder,
        lineNumberInOldText: null,
        lineNumberInNewText: null,
        line: '...',
        args: {
          skippedLines: remainingSkippedLines,
          lineInOldText: lineInOldText + prefix.length,
          lineInNewText: lineInNewText + prefix.length,
        },
        cssClass: this.getCssClass(LineDiffType.Placeholder),
      };

      const numberOfPrefixAndSkippedLines = prefix.length + remainingSkippedLines.length;

      const suffixLines = this.createLineDiffs(
        suffix,
        lineInOldText + numberOfPrefixAndSkippedLines,
        lineInNewText + numberOfPrefixAndSkippedLines,
      );

      return [...prefixLines, newPlaceholder, ...suffixLines];
    }

    return this.createLineDiffs(skippedLines, lineInOldText, lineInNewText);
  }

  private createLineDiffs(
    lines: string[],
    startLineInOldText: number,
    startLineInNewText: number,
  ): LineDiff[] {
    let lineNumberInOldText = startLineInOldText;
    let lineNumberInNewText = startLineInNewText;

    const cssClass = this.getCssClass(LineDiffType.Equal);
    const linesToInsert: LineDiff[] = [];

    for (let line of lines) {
      linesToInsert.push({
        type: LineDiffType.Equal,
        lineNumberInOldText,
        lineNumberInNewText,
        line: line,
        cssClass,
      });
      lineNumberInOldText++;
      lineNumberInNewText++;
    }

    return linesToInsert;
  }

  private updateHtml(): void {
    if (typeof this.oldText === 'number' || typeof this.oldText === 'boolean') {
      this.oldText = this.oldText.toString();
    }
    if (typeof this.newText === 'number' || typeof this.newText === 'boolean') {
      this.newText = this.newText.toString();
    }
    this.calculateLineDiff(this.dmp.computeLineDiff(this.oldText ?? '', this.newText ?? ''));
  }

  private calculateLineDiff(diffs: Diff[]): void {
    const diffCalculation: IDiffCalculation = {
      lineInNewText: 1,
      lineInOldText: 1,
      lines: [],
    };

    this.isContentEqual = diffs.length === 1 && diffs[0][0] === DiffOp.Equal;
    if (this.isContentEqual) {
      this.calculatedDiff = [];
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

    this.calculatedDiff = diffCalculation.lines.map(
      ({ type, lineNumberInOldText, lineNumberInNewText, line, args }) => {
        return {
          type,
          lineNumberInOldText,
          lineNumberInNewText,
          line,
          args,
          cssClass: this.getCssClass(type),
        };
      },
    );
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
        diffCalculation.lineInOldText += lineIncrement;
        diffCalculation.lineInNewText += lineIncrement;
        diffLines = diffLines.slice(diffLines.length - this.lineContextSize, diffLines.length);
      } else if (isLastDiff) {
        // Take only the first 'lineContextSize' lines from the final diff
        diffLines = diffLines.slice(0, this.lineContextSize);
      } else if (diffLines.length > 2 * this.lineContextSize) {
        // Take the first 'lineContextSize' lines from this diff to provide context for the last diff
        this.outputEqualDiffLines(diffLines.slice(0, this.lineContextSize), diffCalculation);

        // Output a special line indicating that some content is equal and has been skipped
        diffCalculation.lines.push({
          type: LineDiffType.Placeholder,
          lineNumberInOldText: null,
          lineNumberInNewText: null,
          line: '...',
          args: {
            skippedLines: diffLines.slice(
              this.lineContextSize,
              diffLines.length - this.lineContextSize,
            ),
            lineInOldText: diffCalculation.lineInOldText,
            lineInNewText: diffCalculation.lineInNewText,
          },
        });
        const numberOfSkippedLines = diffLines.length - 2 * this.lineContextSize;
        diffCalculation.lineInOldText += numberOfSkippedLines;
        diffCalculation.lineInNewText += numberOfSkippedLines;

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
      diffCalculation.lines.push({
        type: LineDiffType.Equal,
        lineNumberInOldText: diffCalculation.lineInOldText,
        lineNumberInNewText: diffCalculation.lineInNewText,
        line,
      });
      diffCalculation.lineInOldText++;
      diffCalculation.lineInNewText++;
    }
  }

  private outputDeleteDiff(diffLines: string[], diffCalculation: IDiffCalculation): void {
    for (const line of diffLines) {
      diffCalculation.lines.push({
        type: LineDiffType.Delete,
        lineNumberInOldText: diffCalculation.lineInOldText,
        lineNumberInNewText: null,
        line,
      });
      diffCalculation.lineInOldText++;
    }
  }

  private outputInsertDiff(diffLines: string[], diffCalculation: IDiffCalculation): void {
    for (const line of diffLines) {
      diffCalculation.lines.push({
        type: LineDiffType.Insert,
        lineNumberInOldText: null,
        lineNumberInNewText: diffCalculation.lineInNewText,
        line,
      });
      diffCalculation.lineInNewText++;
    }
  }

  private getCssClass(type: LineDiffType): string {
    switch (type) {
      case LineDiffType.Placeholder:
      case LineDiffType.Equal:
        return 'inline-diff-equal';
      case LineDiffType.Insert:
        return 'inline-diff-insert';
      case LineDiffType.Delete:
        return 'inline-diff-delete';
      default:
        return 'unknown';
    }
  }
}
