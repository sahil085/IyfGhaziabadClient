import { TestBed } from '@angular/core/testing';

import { CallingSewaResponseService } from './calling-sewa-response.service';

describe('CallingSewaResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallingSewaResponseService = TestBed.get(CallingSewaResponseService);
    expect(service).toBeTruthy();
  });
});
