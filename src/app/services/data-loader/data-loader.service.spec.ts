import { TestBed } from '@angular/core/testing';

import { DataLoaderService } from './data-loader.service';

describe('DataLoaderService', () => {
  let service: DataLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
