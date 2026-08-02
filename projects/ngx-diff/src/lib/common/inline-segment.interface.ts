import { DiffOp } from 'diff-match-patch-ts';

export interface InlineSegment {
  text: string;
  type: DiffOp;
}
