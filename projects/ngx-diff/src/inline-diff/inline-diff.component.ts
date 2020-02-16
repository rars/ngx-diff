import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Diff, DiffOp } from 'diff-match-patch-ts';
import { DiffMatchPatchService } from '../diff-match-patch.service';
import { IDiffCalculation } from './diff-calculation.interface';

// Styles and HTML template intentionally inlined here so that they can be easily picked up
// by the client application.
@Component({
  selector: 'inline-diff',
  styles: [
    `
      div.inline-diff {
        display: flex;
        flex-direction: row;
        border: 1px solid #808080;
        font-family: Consolas, Courier, monospace;
      }
      div.inline-diff-content {
        position: relative;
        top: 0px;
        left: 0px;
        flex-grow: 1;
        overflow-x: scroll;
      }
      div.inline-diff-content-wrapper {
        position: absolute;
        top: 0px;
        left: 0px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
      }
      div.inline-diff-old {
        width: 50px;
        text-align: center;
        color: #484848;
      }
      div.inline-diff-equal > div.inline-diff-old,
      div.inline-diff-equal > div.inline-diff-new {
        background-color: #dedede;
      }
      div.inline-diff-insert > div.inline-diff-old,
      div.inline-diff-insert > div.inline-diff-new {
        background-color: #8bfb6f;
      }
      div.inline-diff-delete > div.inline-diff-old,
      div.inline-diff-delete > div.inline-diff-new {
        background-color: #f56868;
      }
      div.inline-diff-new {
        width: 50px;
        text-align: center;
        color: #484848;
        border-right: 1px solid #888888;
      }
      div.inline-diff-text {
        white-space: pre;
        padding-left: 10px;
      }
      .inline-diff-delete {
        background-color: #ff8c8c;
      }
      .inline-diff-insert {
        background-color: #9dff97;
      }
      .inline-diff-delete > div {
        display: inline-block;
      }
      .inline-diff-insert > div {
        display: inline-block;
      }
      .inline-diff-equal > div {
        display: inline-block;
      }
      .dmp-margin-bottom-spacer {
        height: 20px;
        background-color: #dedede;
        border-right: 1px solid #888888;
      }
    `
  ],
  template: `
    <div class="inline-diff-no-changes-text" *ngIf="isContentEqual">
      There are no changes to display.
    </div>
    <div class="inline-diff" *ngIf="!isContentEqual">
      <div class="inline-diff-margin">
        <div [ngClass]="lineDiff[0]" *ngFor="let lineDiff of calculatedDiff">
          <div class="inline-diff-old">{{ lineDiff[1] }}</div>
          <!-- No space
        -->
          <div class="inline-diff-new">{{ lineDiff[2] }}</div>
        </div>
        <div class="dmp-margin-bottom-spacer"></div>
      </div>
      <!-- No space
    -->
      <div class="inline-diff-content">
        <div class="inline-diff-content-wrapper">
          <div [ngClass]="lineDiff[0]" *ngFor="let lineDiff of calculatedDiff">
            <div class="inline-diff-text">{{ lineDiff[3] }}</div>
          </div>
        </div>
      </div>
    </div>
  `
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

  public calculatedDiff: Array<[string, string, string, string]>;
  public isContentEqual: boolean;

  public constructor(private dmp: DiffMatchPatchService) {
    this.calculatedDiff = [];
    this.isContentEqual = false;
  }

  public ngOnInit(): void {
    this.updateHtml();
  }

  public ngOnChanges(): void {
    this.updateHtml();
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
      lines: []
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

    this.calculatedDiff = diffCalculation.lines;
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
    isLastDiff: boolean
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
        diffCalculation.lines.push(['inline-diff-equal', '...', '...', '...']);
        const numberOfSkippedLines = diffLines.length - 2 * this.lineContextSize;
        diffCalculation.lineInOldText += numberOfSkippedLines;
        diffCalculation.lineInNewText += numberOfSkippedLines;

        // Take the last 'lineContextSize' lines from this diff to provide context for the next diff
        this.outputEqualDiffLines(
          diffLines.slice(diffLines.length - this.lineContextSize),
          diffCalculation
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
      diffCalculation.lines.push([
        'inline-diff-equal',
        `${diffCalculation.lineInOldText}`,
        `${diffCalculation.lineInNewText}`,
        line
      ]);
      diffCalculation.lineInOldText++;
      diffCalculation.lineInNewText++;
    }
  }

  private outputDeleteDiff(diffLines: string[], diffCalculation: IDiffCalculation): void {
    for (const line of diffLines) {
      diffCalculation.lines.push([
        'inline-diff-delete',
        `${diffCalculation.lineInOldText}`,
        '-',
        line
      ]);
      diffCalculation.lineInOldText++;
    }
  }

  private outputInsertDiff(diffLines: string[], diffCalculation: IDiffCalculation): void {
    for (const line of diffLines) {
      diffCalculation.lines.push([
        'inline-diff-insert',
        '-',
        `${diffCalculation.lineInNewText}`,
        line
      ]);
      diffCalculation.lineInNewText++;
    }
  }
}
