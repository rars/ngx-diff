import { LineDiffType } from './line-diff-type';

export type LineSelectEvent = {
  index: number;
  type: LineDiffType;
  lineNumberInOldText: number | null;
  lineNumberInNewText: number | null;
  line: string;
};
