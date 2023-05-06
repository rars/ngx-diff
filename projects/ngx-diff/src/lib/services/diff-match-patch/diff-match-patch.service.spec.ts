import { TestBed } from '@angular/core/testing';

import { DiffMatchPatchService } from './diff-match-patch.service';

describe('DiffMatchPatchService', () => {
  let service: DiffMatchPatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiffMatchPatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
