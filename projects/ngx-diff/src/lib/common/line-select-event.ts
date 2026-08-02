import { LineDiffType } from './line-diff-type';

export type LineSelectEvent = {
  index: number;
  type: LineDiffType;
  lineNumberInOldText: number | null;
  lineNumberInNewText: number | null;
  line: string;
};

export type LineDiffDescription = {
  type: LineDiffType;
  lineNumber: number | null;
  line: string | null;
};

export type SideBySideLineSelectEvent = {
  index: number;
  before: LineDiffDescription;
  after: LineDiffDescription;
};
