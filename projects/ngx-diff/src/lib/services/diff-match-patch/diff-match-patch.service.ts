import { type Diff, DiffMatchPatch } from 'diff-match-patch-ts';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiffMatchPatchService {
  private readonly dmp = new DiffMatchPatch();

  public computeLineDiff(text1: string, text2: string): Diff[] {
    return this.dmp.diff_lineMode(text1, text2);
  }
}
