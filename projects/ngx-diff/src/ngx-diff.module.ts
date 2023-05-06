import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InlineDiffComponent } from './lib/components/inline-diff/inline-diff.component';
import { LineNumberPipe } from './lib/pipes/line-number/line-number.pipe';

@NgModule({
  declarations: [InlineDiffComponent, LineNumberPipe],
  exports: [InlineDiffComponent],
  imports: [CommonModule],
})
export class NgxDiffModule {}
