import { Diff, DiffOp } from 'diff-match-patch-ts';

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  output,
  Renderer2,
  RendererStyleFlags2,
  signal,
} from '@angular/core';

import { IDiffCalculation } from '../../common/diff-calculation.interface';
import { LineDiffType } from '../../common/line-diff-type';
import { LineSelectEvent } from '../../common/line-select-event';
import { DiffMatchPatchService } from '../../services/diff-match-patch/diff-match-patch.service';
import { LineNumberPipe } from '../../pipes/line-number/line-number.pipe';
import { NgClass } from '@angular/common';
import { StyleCalculatorService } from '../../services/style-calculator/style-calculator.service';
import { BehaviorSubject, debounceTime, startWith, switchMap } from 'rxjs';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

type LineDiff = {
  id: string;
  type: LineDiffType;
  lineNumberInOldText: number | null;
  lineNumberInNewText: number | null;
  line: string;
  args?: { skippedLines?: string[]; lineInOldText?: number | null; lineInNewText?: number | null };
  cssClass: string;
};

type LineDiffResult = {
  isContentEqual: boolean;
  calculatedDiff: LineDiff[];
  diffSummary: {
    numLinesAdded: number;
    numLinesRemoved: number;
  };
};

const transformToString = (value: string | number | boolean | undefined) => value?.toString() ?? '';

@Component({
  selector: 'ngx-unified-diff',
  imports: [NgClass, LineNumberPipe, ProgressBarComponent],
  templateUrl: './unified-diff.component.html',
  styleUrl: './unified-diff.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnifiedDiffComponent implements AfterViewInit {
  private readonly dmp = inject(DiffMatchPatchService);
  private readonly styleCalculator = inject(StyleCalculatorService);
  private readonly elementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly injector = inject(Injector);

  /**
   * @description
   * Optional title to be displayed at the top of the diff.
   */
  public readonly title = input<string>();
  /**
   * @description
   * Controls whether the width necessary for the line number is
   * calculated dynamically based upon the number of lines in the diff.
   */
  public readonly isDynamicLineNumberWidthEnabled = input<boolean>(false);
  public readonly before = input.required<string | number | boolean | undefined>();
  public readonly after = input.required<string | number | boolean | undefined>();

  protected readonly diffData = computed(() => ({
    title: this.title(),
    before: transformToString(this.before()),
    after: transformToString(this.after()),
  }));

  /**
   * The number of lines of context to provide either side of a DiffOp.Insert or DiffOp.Delete diff.
   * Context is taken from a DiffOp.Equal section.
   */
  public readonly lineContextSize = input<number>();

  public readonly selectedLineChange = output<LineSelectEvent>();

  public selectedLine?: LineDiff;

  // This needs to be a signal, rather than computed(..) to support alterations when a placeholder is expanded.
  public readonly calculatedDiff = signal<LineDiff[]>([]);

  private readonly isCalculatingSubject = new BehaviorSubject<boolean>(false);

  protected readonly isCalculating = toSignal(
    this.isCalculatingSubject.asObservable().pipe(debounceTime(50)),
  );

  protected readonly diffs = toSignal(
    toObservable(this.diffData).pipe(
      takeUntilDestroyed(),
      debounceTime(50),
      switchMap(async ({ title, before, after }) => {
        this.isCalculatingSubject.next(true);
        const diffs = await this.dmp.computeLineDiff(before, after);
        return { title, diffs };
      }),
      startWith({ title: undefined, diffs: [] }),
    ),
    { requireSync: true },
  );

  protected readonly processedDiff = computed(() => ({
    ...UnifiedDiffComponent.calculateLineDiff(this.diffs().diffs, this.lineContextSize()),
    title: this.diffs().title,
  }));

  public constructor() {
    effect(() => {
      this.isCalculatingSubject.next(false);
      this.calculatedDiff.set(this.processedDiff().calculatedDiff);
    });
  }

  public ngAfterViewInit(): void {
    effect(
      () => {
        if (!this.isDynamicLineNumberWidthEnabled()) {
          return;
        }

        const maxLineNumber = this.processedDiff().calculatedDiff.reduce(
          (maxLineNumber, entry) =>
            Math.max(
              maxLineNumber,
              Math.max(entry.lineNumberInNewText ?? 0, entry.lineNumberInOldText ?? 0),
            ),
          0,
        );

        const newWidth = this.styleCalculator.getLineNumberWidth(maxLineNumber);

        this.renderer.setStyle(
          this.elementRef.nativeElement,
          '--ngx-diff-line-number-width',
          newWidth,
          RendererStyleFlags2.DashCase,
        );
      },
      { injector: this.injector },
    );
  }

  public selectLine(index: number, lineDiff: LineDiff): void {
    this.selectedLine = lineDiff;
    const { type, lineNumberInOldText, lineNumberInNewText, line } = lineDiff;

    if (type === LineDiffType.Placeholder) {
      this.expandPlaceholder(index, lineDiff);
      this.selectedLine = undefined;
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
    const replacementLines = UnifiedDiffComponent.getPlaceholderReplacementLines(
      placeholder,
      this.lineContextSize(),
    );

    this.calculatedDiff.update((calculatedDiff) => {
      const newDiff = [...calculatedDiff];
      newDiff.splice(index, 1, ...replacementLines);
      return newDiff;
    });
  }

  private static getPlaceholderReplacementLines(
    placeholder: LineDiff,
    lineContextSize: number | undefined,
  ): LineDiff[] {
    const skippedLines = placeholder.args?.skippedLines ?? [];
    const lineInOldText = placeholder.args?.lineInOldText ?? 0;
    const lineInNewText = placeholder.args?.lineInNewText ?? 0;

    if (lineContextSize && skippedLines.length > 2 * lineContextSize) {
      const prefix = skippedLines.slice(0, lineContextSize);
      const remainingSkippedLines = skippedLines.slice(
        lineContextSize,
        skippedLines.length - lineContextSize,
      );
      const suffix = skippedLines.slice(skippedLines.length - lineContextSize, skippedLines.length);

      const prefixLines = this.createLineDiffs(prefix, lineInOldText, lineInNewText);

      const newPlaceholder: LineDiff = {
        id: `skip-${lineInOldText + prefix.length}-${lineInNewText + prefix.length}-${remainingSkippedLines.length}`,
        type: LineDiffType.Placeholder,
        lineNumberInOldText: null,
        lineNumberInNewText: null,
        line: `... ${remainingSkippedLines.length} hidden lines ...`,
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

  private static createLineDiffs(
    lines: string[],
    startLineInOldText: number,
    startLineInNewText: number,
  ): LineDiff[] {
    let lineNumberInOldText = startLineInOldText;
    let lineNumberInNewText = startLineInNewText;

    const cssClass = this.getCssClass(LineDiffType.Equal);
    const linesToInsert: LineDiff[] = [];

    for (const line of lines) {
      linesToInsert.push({
        id: `eql-${lineNumberInOldText}-${lineNumberInNewText}`,
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

  private static calculateLineDiff(
    diffs: Diff[],
    lineContextSize: number | undefined,
  ): LineDiffResult {
    const diffCalculation: IDiffCalculation = {
      lineInNewText: 1,
      lineInOldText: 1,
      lines: [],
    };

    const isContentEqual = diffs.length === 1 && diffs[0][0] === DiffOp.Equal;

    if (isContentEqual) {
      return {
        isContentEqual,
        calculatedDiff: [],
        diffSummary: {
          numLinesAdded: 0,
          numLinesRemoved: 0,
        },
      };
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
          this.outputEqualDiff(
            diffLines,
            diffCalculation,
            isFirstDiff,
            isLastDiff,
            lineContextSize,
          );
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

    const calculatedDiff = diffCalculation.lines.map(
      ({ id, type, lineNumberInOldText, lineNumberInNewText, line, args }) => {
        return {
          id,
          type,
          lineNumberInOldText,
          lineNumberInNewText,
          line,
          args,
          cssClass: this.getCssClass(type),
        };
      },
    );

    return {
      isContentEqual,
      calculatedDiff,
      diffSummary: {
        numLinesAdded: calculatedDiff.filter((x) => x.type === LineDiffType.Insert).length,
        numLinesRemoved: calculatedDiff.filter((x) => x.type === LineDiffType.Delete).length,
      },
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
  ): void {
    if (lineContextSize && diffLines.length > lineContextSize) {
      if (isFirstDiff) {
        // Take the last 'lineContextSize' lines from the first diff
        const lineIncrement = diffLines.length - lineContextSize;
        diffCalculation.lineInOldText += lineIncrement;
        diffCalculation.lineInNewText += lineIncrement;
        diffLines = diffLines.slice(diffLines.length - lineContextSize, diffLines.length);
      } else if (isLastDiff) {
        // Take only the first 'lineContextSize' lines from the final diff
        diffLines = diffLines.slice(0, lineContextSize);
      } else if (diffLines.length > 2 * lineContextSize) {
        // Take the first 'lineContextSize' lines from this diff to provide context for the last diff
        this.outputEqualDiffLines(diffLines.slice(0, lineContextSize), diffCalculation);

        const skippedLines = diffLines.slice(lineContextSize, diffLines.length - lineContextSize);

        // Output a special line indicating that some content is equal and has been skipped
        diffCalculation.lines.push({
          id: `skip-${diffCalculation.lineInOldText}-${diffCalculation.lineInNewText}-${skippedLines.length}`,
          type: LineDiffType.Placeholder,
          lineNumberInOldText: null,
          lineNumberInNewText: null,
          line: `... ${skippedLines.length} hidden lines ...`,
          args: {
            skippedLines,
            lineInOldText: diffCalculation.lineInOldText,
            lineInNewText: diffCalculation.lineInNewText,
          },
        });
        const numberOfSkippedLines = diffLines.length - 2 * lineContextSize;
        diffCalculation.lineInOldText += numberOfSkippedLines;
        diffCalculation.lineInNewText += numberOfSkippedLines;

        // Take the last 'lineContextSize' lines from this diff to provide context for the next diff
        this.outputEqualDiffLines(
          diffLines.slice(diffLines.length - lineContextSize),
          diffCalculation,
        );
        // This if branch has already output the diff lines so we return early to avoid outputting the lines
        // at the end of the method.
        return;
      }
    }
    this.outputEqualDiffLines(diffLines, diffCalculation);
  }

  private static outputEqualDiffLines(
    diffLines: string[],
    diffCalculation: IDiffCalculation,
  ): void {
    for (const line of diffLines) {
      diffCalculation.lines.push({
        id: `eql-${diffCalculation.lineInOldText}-${diffCalculation.lineInNewText}`,
        type: LineDiffType.Equal,
        lineNumberInOldText: diffCalculation.lineInOldText,
        lineNumberInNewText: diffCalculation.lineInNewText,
        line,
      });
      diffCalculation.lineInOldText++;
      diffCalculation.lineInNewText++;
    }
  }

  private static outputDeleteDiff(diffLines: string[], diffCalculation: IDiffCalculation): void {
    for (const line of diffLines) {
      diffCalculation.lines.push({
        id: `del-${diffCalculation.lineInOldText}`,
        type: LineDiffType.Delete,
        lineNumberInOldText: diffCalculation.lineInOldText,
        lineNumberInNewText: null,
        line,
      });
      diffCalculation.lineInOldText++;
    }
  }

  private static outputInsertDiff(diffLines: string[], diffCalculation: IDiffCalculation): void {
    for (const line of diffLines) {
      diffCalculation.lines.push({
        id: `ins-${diffCalculation.lineInNewText}`,
        type: LineDiffType.Insert,
        lineNumberInOldText: null,
        lineNumberInNewText: diffCalculation.lineInNewText,
        line,
      });
      diffCalculation.lineInNewText++;
    }
  }

  private static getCssClass(type: LineDiffType): string {
    switch (type) {
      case LineDiffType.Placeholder:
      case LineDiffType.Equal:
        return 'ufd-diff-equal';
      case LineDiffType.Insert:
        return 'ufd-diff-insert';
      case LineDiffType.Delete:
        return 'ufd-diff-delete';
      default:
        return 'unknown';
    }
  }
}
