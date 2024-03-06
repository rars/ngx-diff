import { LineDiffType } from './line-diff-type';

/* Holds the state of the calculation of the diff result we intend to display.
 *  > lines contains the data that will be displayed on screen.
 *  > lineInOldText keeps track of the document line number in the [oldText] input.
 *  > lineInNewText keeps track of the document line number in the [newText] input.
 */
export interface IDiffCalculation {
  lines: Array<{
    type: LineDiffType;
    lineNumberInOldText: number | null;
    lineNumberInNewText: number | null;
    line: string;
  }>;
  lineInOldText: number;
  lineInNewText: number;
}
