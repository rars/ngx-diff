import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InlineDiffComponent } from './lib/components/inline-diff/inline-diff.component';

@NgModule({
  declarations: [InlineDiffComponent],
  exports: [InlineDiffComponent],
  imports: [CommonModule],
})
export class NgxDiffModule {}
