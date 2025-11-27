import { TestBed } from '@angular/core/testing';

import { DiffWebWorkerFactoryService } from './diff-web-worker-factory.service';

describe('DiffWebWorkerFactoryService', () => {
  let service: DiffWebWorkerFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiffWebWorkerFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
