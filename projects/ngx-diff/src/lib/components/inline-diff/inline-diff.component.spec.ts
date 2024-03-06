import { Diff, DiffOp } from 'diff-match-patch-ts';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDiffType } from '../../common/line-diff-type';
import { LineNumberPipe } from '../../pipes/line-number/line-number.pipe';
import { DiffMatchPatchService } from '../../services/diff-match-patch/diff-match-patch.service';
import { InlineDiffComponent } from './inline-diff.component';

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
      imports: [InlineDiffComponent, LineNumberPipe],
      providers: [{ provide: DiffMatchPatchService, useClass: DiffMatchPatchServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(InlineDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 8 line diffs', () => {
    expect(component.calculatedDiff.length).toBe(8);
  });

  it('should have correct line numbers', () => {
    const leftLineNumbers = component.calculatedDiff.map((x) => x.lineNumberInOldText);
    expect(leftLineNumbers).toEqual([1, 2, null, null, 3, 4, 5, 6]);

    const rightLineNumbers = component.calculatedDiff.map((x) => x.lineNumberInNewText);
    expect(rightLineNumbers).toEqual([1, 2, 3, 4, null, null, 5, 6]);
  });

  it('should have correct class annotations', () => {
    const classes = component.calculatedDiff.map((x) => x.type);
    expect(classes).toEqual([
      LineDiffType.Equal,
      LineDiffType.Equal,
      LineDiffType.Insert,
      LineDiffType.Insert,
      LineDiffType.Delete,
      LineDiffType.Delete,
      LineDiffType.Equal,
      LineDiffType.Equal,
    ]);
  });

  it('should have correct line contents', () => {
    const contents = component.calculatedDiff.map((x) => x.line);
    expect(contents).toEqual([
      'Diff One A',
      'Diff One B',
      'Diff Two A',
      'Diff Two B',
      'Diff Three A',
      'Diff Three B',
      'Diff Four A',
      'Diff Four B',
    ]);
  });
});
