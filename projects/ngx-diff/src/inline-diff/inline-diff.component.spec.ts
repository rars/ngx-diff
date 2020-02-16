import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Diff, DiffOp } from 'diff-match-patch-ts';

import { InlineDiffComponent } from './inline-diff.component';
import { DiffMatchPatchService } from '../diff-match-patch.service';

class DiffMatchPatchServiceMock {
  public computeLineDiff(oldText: string, newText: string): Diff[] {
    return [
      [DiffOp.Equal, 'Diff One A\r\nDiff One B\r\n'],
      [DiffOp.Insert, 'Diff Two A\r\nDiff Two B\r\n'],
      [DiffOp.Delete, 'Diff Three A\r\nDiff Three B'],
      [DiffOp.Equal, 'Diff Four A\r\nDiff Four B\r\n']
    ];
  }
}

describe('InlineDiffComponent', () => {
  let component: InlineDiffComponent;
  let fixture: ComponentFixture<InlineDiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InlineDiffComponent],
      providers: [{ provide: DiffMatchPatchService, useClass: DiffMatchPatchServiceMock }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialise component', () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });

  it('should have 8 line diffs', () => {
    expect(component.calculatedDiff.length).toBe(8);
  });

  it('should have correct line numbers', () => {
    const leftLineNumbers = component.calculatedDiff.map(x => x[1]);
    expect(leftLineNumbers).toEqual(['1', '2', '-', '-', '3', '4', '5', '6']);

    const rightLineNumbers = component.calculatedDiff.map(x => x[2]);
    expect(rightLineNumbers).toEqual(['1', '2', '3', '4', '-', '-', '5', '6']);
  });

  it('should have correct class annotations', () => {
    const classes = component.calculatedDiff.map(x => x[0]);
    expect(classes).toEqual([
      'inline-diff-equal',
      'inline-diff-equal',
      'inline-diff-insert',
      'inline-diff-insert',
      'inline-diff-delete',
      'inline-diff-delete',
      'inline-diff-equal',
      'inline-diff-equal'
    ]);
  });

  it('should have correct line contents', () => {
    const contents = component.calculatedDiff.map(x => x[3]);
    expect(contents).toEqual([
      'Diff One A',
      'Diff One B',
      'Diff Two A',
      'Diff Two B',
      'Diff Three A',
      'Diff Three B',
      'Diff Four A',
      'Diff Four B'
    ]);
  });
});
