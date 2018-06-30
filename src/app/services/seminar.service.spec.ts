import { TestBed, inject } from '@angular/core/testing';

import { SeminarService } from './seminar.service';

describe('SeminarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeminarService]
    });
  });

  it('should be created', inject([SeminarService], (service: SeminarService) => {
    expect(service).toBeTruthy();
  }));
});
