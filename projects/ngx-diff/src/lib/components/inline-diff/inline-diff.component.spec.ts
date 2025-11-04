import { Diff, DiffOp } from 'diff-match-patch-ts';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineNumberPipe } from '../../pipes/line-number/line-number.pipe';
import { DiffMatchPatchService } from '../../services/diff-match-patch/diff-match-patch.service';
import { InlineDiffComponent } from './inline-diff.component';
import { UnifiedDiffComponent } from '../unified-diff/unified-diff.component';

class DiffMatchPatchServiceMock {
  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars, no-underscore-dangle, id-blacklist, id-match
  public computeLineDiff(_oldText: string, _newText: string): Diff[] {
    return [
      [DiffOp.Equal, 'Diff One A\r\nDiff One B\r\n'],
      [DiffOp.Insert, 'Diff Two A\r\nDiff Two B\r\n'],
      [DiffOp.Delete, 'Diff Three A\r\nDiff Three B'],
      [DiffOp.Equal, 'Diff Four A\r\nDiff Four B\r\n'],
    ];
  }
}

describe('InlineDiffComponent', () => {
  let component: InlineDiffComponent;
  let fixture: ComponentFixture<InlineDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineDiffComponent, UnifiedDiffComponent, LineNumberPipe],
      providers: [{ provide: DiffMatchPatchService, useClass: DiffMatchPatchServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(InlineDiffComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('oldText', 'a');
    fixture.componentRef.setInput('newText', 'b');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
