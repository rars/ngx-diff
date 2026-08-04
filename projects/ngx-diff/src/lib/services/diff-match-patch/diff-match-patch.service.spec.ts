import { TestBed } from '@angular/core/testing';

import { DiffMatchPatchService } from './diff-match-patch.service';
import { IntraLineDiffMode } from '../../common/intra-line-diff-mode.type';

describe('DiffMatchPatchService', () => {
  let service: DiffMatchPatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiffMatchPatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return empty segments for no intra-line diff', () => {
    const { oldSegments, newSegments } = service.computeIntraLineDiff(
      'apples oranges pears',
      'apples orange pears',
      'none',
    );

    expect(oldSegments).toEqual([]);
    expect(newSegments).toEqual([]);
  });

  it('should return character segments for intra-line diff', () => {
    const { oldSegments, newSegments } = service.computeIntraLineDiff(
      'apples oranges pears grape',
      'apples orange pears grapes',
      'character',
    );

    expect(oldSegments).toEqual([
      {
        text: 'apples orange',
        type: 0,
      },
      {
        text: 's',
        type: -1,
      },
      {
        text: ' pears grape',
        type: 0,
      },
    ]);
    expect(newSegments).toEqual([
      {
        text: 'apples orange',
        type: 0,
      },
      {
        text: ' pears grape',
        type: 0,
      },
      {
        text: 's',
        type: 1,
      },
    ]);
  });

  it('should return word segments for intra-line diff', () => {
    const { oldSegments, newSegments } = service.computeIntraLineDiff(
      'apples oranges pears grape',
      'apples orange pears grapes',
      'word',
    );

    expect(oldSegments).toEqual([
      {
        text: 'apples ',
        type: 0,
      },
      {
        text: 'oranges',
        type: -1,
      },
      {
        text: ' pears ',
        type: 0,
      },
      {
        text: 'grape',
        type: -1,
      },
    ]);
    expect(newSegments).toEqual([
      {
        text: 'apples ',
        type: 0,
      },
      {
        text: 'orange',
        type: 1,
      },
      {
        text: ' pears ',
        type: 0,
      },
      {
        text: 'grapes',
        type: 1,
      },
    ]);
  });

  it.each([{ mode: 'word' }, { mode: 'line' }] as { mode: IntraLineDiffMode }[])(
    'should return matching segments for intra-line diff when mode=$mode',
    ({ mode }) => {
      const text = 'apples oranges pears grapes';
      const { oldSegments, newSegments } = service.computeIntraLineDiff(text, text, mode);

      expect(oldSegments).toEqual([
        {
          text,
          type: 0,
        },
      ]);
      expect(newSegments).toEqual([
        {
          text,
          type: 0,
        },
      ]);
    },
  );
});
