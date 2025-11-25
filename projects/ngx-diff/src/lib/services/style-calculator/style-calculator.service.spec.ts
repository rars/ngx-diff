import { TestBed } from '@angular/core/testing';

import { StyleCalculatorService } from './style-calculator.service';

describe('StyleCalculatorService', () => {
  let service: StyleCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
