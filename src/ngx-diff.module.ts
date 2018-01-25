import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffMatchPatchService } from './diff-match-patch.service';
import { InlineDiffComponent } from './inline-diff/inline-diff.component';

@NgModule({
  declarations: [
    InlineDiffComponent
  ],
  exports: [
    InlineDiffComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DiffMatchPatchService
  ]
})
export class NgxDiffModule { }
