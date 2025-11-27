import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Diff, DiffOp } from 'diff-match-patch-ts';

import { SideBySideDiffComponent } from './side-by-side-diff.component';
import { DiffMatchPatchService } from '../../services/diff-match-patch/diff-match-patch.service';
import { LineSelectEvent } from '../../common/line-select-event';
import { LineDiffType } from '../../common/line-diff-type';

class DiffMatchPatchServiceMock {
  computeLineDiff(before: string, after: string): Promise<Diff[]> {
    const diffs: Diff[] = [];
    if (before === after) {
      diffs.push([DiffOp.Equal, before]);
    } else {
      diffs.push([DiffOp.Delete, before]);
      diffs.push([DiffOp.Insert, after]);
    }
    return Promise.resolve(diffs);
  }
}

describe('SideBySideDiffComponent with Vitest', () => {
  let component: SideBySideDiffComponent;
  let fixture: ComponentFixture<SideBySideDiffComponent>;
  let dmpMock: DiffMatchPatchServiceMock;

  beforeEach(async () => {
    vi.useFakeTimers();

    dmpMock = new DiffMatchPatchServiceMock();

    await TestBed.configureTestingModule({
      imports: [SideBySideDiffComponent],
      providers: [{ provide: DiffMatchPatchService, useValue: dmpMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(SideBySideDiffComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'my-diff.ts');
    fixture.componentRef.setInput('before', 'a');
    fixture.componentRef.setInput('after', 'b');
    fixture.detectChanges();

    await vi.runAllTimersAsync();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set title', () => {
    const titleEl = fixture.nativeElement.querySelector('.sbs-diff-title-bar');
    expect(titleEl.textContent).toContain('my-diff.ts');
  });

  it('should handle identical content', async () => {
    const text = 'a\nb\nc';
    fixture.componentRef.setInput('before', text);
    fixture.componentRef.setInput('after', text);

    fixture.detectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();

    expect(component.isCalculating()).toBe(false);
    expect(component.processedDiff().isContentEqual).toBe(true);
    expect(component.beforeLines().length).toBe(0);
    expect(component.afterLines().length).toBe(0);
  });

  it('should handle different content', async () => {
    const before = 'a\nb';
    const after = 'a\nc';
    vi.spyOn(dmpMock, 'computeLineDiff').mockReturnValue(
      Promise.resolve([
        [DiffOp.Equal, 'a\n'],
        [DiffOp.Delete, 'b'],
        [DiffOp.Insert, 'c'],
      ]),
    );

    fixture.componentRef.setInput('before', before);
    fixture.componentRef.setInput('after', after);

    fixture.detectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();

    expect(component.isCalculating()).toBe(false);
    expect(component.processedDiff().isContentEqual).toBe(false);
    expect(component.beforeLines().length).toBe(3);
    expect(component.afterLines().length).toBe(3);

    // Line 1: equal
    expect(component.beforeLines()[0].type).toBe(LineDiffType.Equal);
    expect(component.beforeLines()[0].line).toBe('a');
    expect(component.afterLines()[0].type).toBe(LineDiffType.Equal);
    expect(component.afterLines()[0].line).toBe('a');

    // Line 2: delete
    expect(component.beforeLines()[1].type).toBe(LineDiffType.Delete);
    expect(component.beforeLines()[1].line).toBe('b');
    expect(component.afterLines()[1].type).toBe(LineDiffType.Delete);
    expect(component.afterLines()[1].line).toBe(null);

    // Line 3: insert
    expect(component.beforeLines()[2].type).toBe(LineDiffType.Insert);
    expect(component.beforeLines()[2].line).toBe(null);
    expect(component.afterLines()[2].type).toBe(LineDiffType.Insert);
    expect(component.afterLines()[2].line).toBe('c');
  });

  it('should emit line select event', async () => {
    const emitSpy = vi.spyOn(component.selectedLineChange, 'emit');
    const before = 'a';
    const after = 'b';
    fixture.componentRef.setInput('before', before);
    fixture.componentRef.setInput('after', after);

    fixture.detectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();

    component.selectLine(0);

    const expectedEvent: LineSelectEvent = {
      index: 0,
      type: LineDiffType.Delete,
      lineNumberInOldText: 1,
      lineNumberInNewText: null,
      line: 'a',
    };
    expect(emitSpy).toHaveBeenCalledWith(expect.objectContaining(expectedEvent));
  });

  it('should expand placeholder on click', async () => {
    const before = 'delete-before\nline1\nline2\nline3\nline4\nline5\ndelete-after';
    const after = 'insert-before\nline1\nline2\nline3\nline4\nline5\ninsert-after';

    vi.spyOn(dmpMock, 'computeLineDiff').mockReturnValue(
      Promise.resolve([
        [DiffOp.Delete, 'delete-before'],
        [DiffOp.Insert, 'insert-before'],
        [DiffOp.Equal, '\nline1\nline2\nline3\nline4\nline5'], // 6 lines when split
        [DiffOp.Delete, '\ndelete-after'],
        [DiffOp.Insert, '\ninsert-after'],
      ]),
    );

    fixture.componentRef.setInput('before', before);
    fixture.componentRef.setInput('after', after);
    fixture.componentRef.setInput('lineContextSize', 2);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();

    const placeholderIndex = component
      .beforeLines()
      .findIndex((l) => l.type === LineDiffType.Placeholder);
    expect(placeholderIndex, 'placeholder should be created').toBeGreaterThan(-1);

    const placeholderLine = component.beforeLines()[placeholderIndex];
    expect(placeholderLine.line).toContain('hidden lines');
    const beforeLineCount = component.beforeLines().length;

    component.selectLine(placeholderIndex);
    fixture.detectChanges();

    expect(component.beforeLines().length, 'number of lines should grow').toBeGreaterThan(
      beforeLineCount,
    );
    const newPlaceholderIndex = component
      .beforeLines()
      .findIndex((l) => l.type === LineDiffType.Placeholder);

    expect(newPlaceholderIndex, 'placeholder should be gone').toBe(-1);
  });

  it('should set dynamic line number width', async () => {
    const before = 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj'; // 10 lines
    const after = 'a\nb\nc';
    fixture.componentRef.setInput('before', before);
    fixture.componentRef.setInput('after', after);
    fixture.componentRef.setInput('isDynamicLineNumberWidthEnabled', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    // JSDOM doesn't compute styles, so we check if the style property is set.
    expect(element.style.getPropertyValue('--ngx-diff-line-number-width')).toBeTruthy();
  });
});
