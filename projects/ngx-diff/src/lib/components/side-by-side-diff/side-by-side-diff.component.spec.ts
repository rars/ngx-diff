import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Diff, DiffOp } from 'diff-match-patch-ts';

import { SideBySideDiffComponent } from './side-by-side-diff.component';
import { DiffMatchPatchService } from '../../services/diff-match-patch/diff-match-patch.service';
import { SideBySideLineSelectEvent } from '../../common/line-select-event';
import { LineDiffType } from '../../common/line-diff-type';

type InputsToOutputsCase = {
  name: string;
  before: string;
  after: string;
  lineDiffResult: [DiffOp, string][];
  expectedBeforeLines: {
    type: LineDiffType;
    line: string | null;
  }[];
  expectedAfterLines: {
    type: LineDiffType;
    line: string | null;
  }[];
};

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  computeIntraLineDiff(_oldLine: string, _newLine: string, _mode: string) {
    return { oldSegments: [], newSegments: [] };
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

  const inputsToOutputsCases: InputsToOutputsCase[] = [
    {
      name: '1 delete and 1 insert',
      before: 'a\nb',
      after: 'a\nc',
      lineDiffResult: [
        [DiffOp.Equal, 'a\n'],
        [DiffOp.Delete, 'b'],
        [DiffOp.Insert, 'c'],
      ],
      expectedBeforeLines: [
        { type: LineDiffType.Equal, line: 'a' },
        { type: LineDiffType.Delete, line: 'b' },
      ],
      expectedAfterLines: [
        { type: LineDiffType.Equal, line: 'a' },
        { type: LineDiffType.Insert, line: 'c' },
      ],
    },
    {
      name: '2 delete and 1 insert',
      before: 'a\nb\nc',
      after: 'a\nd',
      lineDiffResult: [
        [DiffOp.Equal, 'a\n'],
        [DiffOp.Delete, 'b\n'],
        [DiffOp.Delete, 'c\n'],
        [DiffOp.Insert, 'd'],
      ],
      expectedBeforeLines: [
        { type: LineDiffType.Equal, line: 'a' },
        { type: LineDiffType.Delete, line: 'b' },
        { type: LineDiffType.Delete, line: 'c' },
      ],
      expectedAfterLines: [
        { type: LineDiffType.Equal, line: 'a' },
        { type: LineDiffType.Insert, line: 'd' },
        { type: LineDiffType.None, line: null },
      ],
    },
    {
      name: '1 delete and 2 insert',
      before: 'a\nb',
      after: 'a\nc\nd',
      lineDiffResult: [
        [DiffOp.Equal, 'a\n'],
        [DiffOp.Delete, 'b'],
        [DiffOp.Insert, 'c\n'],
        [DiffOp.Insert, 'd'],
      ],
      expectedBeforeLines: [
        { type: LineDiffType.Equal, line: 'a' },
        { type: LineDiffType.Delete, line: 'b' },
        { type: LineDiffType.None, line: null },
      ],
      expectedAfterLines: [
        { type: LineDiffType.Equal, line: 'a' },
        { type: LineDiffType.Insert, line: 'c' },
        { type: LineDiffType.Insert, line: 'd' },
      ],
    },
  ];

  it.each(inputsToOutputsCases)(
    'should handle $name',
    async ({ before, after, lineDiffResult, expectedBeforeLines, expectedAfterLines }) => {
      vi.spyOn(dmpMock, 'computeLineDiff').mockReturnValue(Promise.resolve(lineDiffResult));

      fixture.componentRef.setInput('before', before);
      fixture.componentRef.setInput('after', after);

      fixture.detectChanges();
      await vi.runAllTimersAsync();
      fixture.detectChanges();

      expect(component.isCalculating()).toBe(false);
      expect(component.processedDiff().isContentEqual).toBe(false);
      expect(component.beforeLines().length).toBe(expectedBeforeLines.length);
      expect(component.afterLines().length).toBe(expectedAfterLines.length);

      expectedBeforeLines.forEach((expectedLine, index) => {
        expect(component.beforeLines()[index].type).toBe(expectedLine.type);
        expect(component.beforeLines()[index].line).toBe(expectedLine.line);
      });

      expectedAfterLines.forEach((expectedLine, index) => {
        expect(component.afterLines()[index].type).toBe(expectedLine.type);
        expect(component.afterLines()[index].line).toBe(expectedLine.line);
      });
    },
  );

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

    const expectedEvent: SideBySideLineSelectEvent = {
      index: 0,
      before: {
        type: LineDiffType.Delete,
        lineNumber: 1,
        line: 'a',
      },
      after: {
        type: LineDiffType.Insert,
        lineNumber: 1,
        line: 'b',
      },
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
