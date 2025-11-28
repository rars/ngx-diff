import { Injectable } from '@angular/core';
import { IDiffWebWorkerFactory } from 'ngx-diff';

@Injectable()
export class DiffWebWorkerFactoryService implements IDiffWebWorkerFactory {
  public createWorker(): Worker | undefined {
    if (typeof Worker !== 'undefined') {
      return new Worker(new URL('../../web-workers/diff-web-worker.worker', import.meta.url));
    } else {
      return undefined;
    }
  }
}
