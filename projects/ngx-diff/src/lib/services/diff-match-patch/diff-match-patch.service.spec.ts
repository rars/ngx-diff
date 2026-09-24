import { TestBed } from '@angular/core/testing';

import {
  DiffMatchPatchService,
  IDiffWebWorkerFactory,
  NGX_DIFF_WEB_WORKER_FACTORY,
} from './diff-match-patch.service';
import { IntraLineDiffMode } from '../../common/intra-line-diff-mode.type';
import { Diff } from 'diff-match-patch-ts';

class FakeWorker {
  public onmessage: ((event: MessageEvent) => void) | null = null;
  public onerror: ((event: ErrorEvent) => void) | null = null;
  public readonly messages: { id: number; before: string; after: string }[] = [];
  public terminated = false;

  public postMessage(message: { id: number; before: string; after: string }): void {
    if (this.terminated) {
      throw new Error('Worker has been terminated.');
    }

    this.messages.push(message);
  }

  public terminate(): void {
    this.terminated = true;
  }

  public respond(id: number, diffs: Diff[] = []): void {
    this.onmessage?.({ data: { id, status: 'success', diffs } } as MessageEvent);
  }

  public fail(error: ErrorEvent): void {
    this.onerror?.(error);
  }
}

class FakeWorkerFactory implements IDiffWebWorkerFactory {
  public readonly workers: FakeWorker[] = [];

  public createWorker(): Worker {
    const worker = new FakeWorker();
    this.workers.push(worker);
    return worker as unknown as Worker;
  }
}

const longText = Array.from({ length: 10_002 }, (_, index) => `line ${index}`).join('\n');

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

  describe('web worker requests', () => {
    let workerFactory: FakeWorkerFactory;
    let worker: FakeWorker;

    beforeEach(() => {
      workerFactory = new FakeWorkerFactory();
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        providers: [
          { provide: NGX_DIFF_WEB_WORKER_FACTORY, useValue: workerFactory },
          DiffMatchPatchService,
        ],
      });
      service = TestBed.inject(DiffMatchPatchService);
    });

    const getWorker = (): FakeWorker => {
      expect(workerFactory.workers).toHaveLength(1);
      worker = workerFactory.workers[0];
      return worker;
    };

    it('processes requests one at a time and starts the next request after completion', async () => {
      const first = service.computeLineDiff(longText, longText);
      const second = service.computeLineDiff(longText, `${longText}!`);
      const activeWorker = getWorker();

      expect(activeWorker.messages).toHaveLength(1);

      activeWorker.respond(activeWorker.messages[0].id);
      await expect(first).resolves.toEqual([]);

      expect(activeWorker.messages).toHaveLength(2);
      expect(activeWorker.messages[1].after).toBe(`${longText}!`);

      activeWorker.respond(activeWorker.messages[1].id);
      await expect(second).resolves.toEqual([]);
    });

    it('does not post an aborted queued request and continues with the next request', async () => {
      const first = service.computeLineDiff(longText, longText);
      const abortedController = new AbortController();
      const aborted = service.computeLineDiff(longText, 'aborted', {
        signal: abortedController.signal,
      });
      const third = service.computeLineDiff(longText, 'third');
      const activeWorker = getWorker();

      abortedController.abort();
      activeWorker.respond(activeWorker.messages[0].id);

      await expect(first).resolves.toEqual([]);
      await expect(aborted).rejects.toThrow('Computation aborted by caller');

      expect(activeWorker.messages).toHaveLength(2);
      expect(activeWorker.messages[1].after).toBe('third');

      activeWorker.respond(activeWorker.messages[1].id);
      await expect(third).resolves.toEqual([]);
    });

    it('does not let one caller abort another caller request', async () => {
      const firstController = new AbortController();
      const first = service.computeLineDiff(longText, 'first', {
        signal: firstController.signal,
      });
      const second = service.computeLineDiff(longText, 'second');
      const activeWorker = getWorker();

      firstController.abort();
      activeWorker.respond(activeWorker.messages[0].id);

      await expect(first).resolves.toEqual([]);
      expect(activeWorker.messages).toHaveLength(2);

      activeWorker.respond(activeWorker.messages[1].id);
      await expect(second).resolves.toEqual([]);
    });

    it('rejects an already-aborted request without creating or posting to a worker', async () => {
      const controller = new AbortController();
      controller.abort();

      await expect(
        service.computeLineDiff(longText, longText, { signal: controller.signal }),
      ).rejects.toThrow('Computation aborted by caller');

      expect(workerFactory.workers).toHaveLength(0);
    });

    it('can create a replacement worker after a worker failure', async () => {
      const first = service.computeLineDiff(longText, longText);
      const activeWorker = getWorker();
      const workerError = new ErrorEvent('worker failed');

      activeWorker.fail(workerError);

      await expect(first).rejects.toBe(workerError);
      expect(activeWorker.terminated).toBe(true);

      const second = service.computeLineDiff(longText, 'after failure');
      expect(workerFactory.workers).toHaveLength(2);
      const replacementWorker = workerFactory.workers[1];
      expect(replacementWorker.messages).toHaveLength(1);

      replacementWorker.respond(replacementWorker.messages[0].id);
      await expect(second).resolves.toEqual([]);
    });

    it('ignores responses for requests other than the active request', async () => {
      const first = service.computeLineDiff(longText, longText);
      const second = service.computeLineDiff(longText, 'second');
      const activeWorker = getWorker();

      activeWorker.respond(999);
      expect(activeWorker.messages).toHaveLength(1);

      activeWorker.respond(activeWorker.messages[0].id);
      await expect(first).resolves.toEqual([]);
      expect(activeWorker.messages).toHaveLength(2);

      activeWorker.respond(activeWorker.messages[1].id);
      await expect(second).resolves.toEqual([]);
    });
  });
});
