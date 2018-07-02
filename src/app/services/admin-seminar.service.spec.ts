import { TestBed, inject } from '@angular/core/testing';

import { AdminSeminarService } from './admin-seminar.service';

describe('AdminSeminarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminSeminarService]
    });
  });

  it('should be created', inject([AdminSeminarService], (service: AdminSeminarService) => {
    expect(service).toBeTruthy();
  }));
});
