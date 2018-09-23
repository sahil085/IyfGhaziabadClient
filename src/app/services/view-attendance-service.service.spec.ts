import { TestBed, inject } from '@angular/core/testing';

import { ViewAttendanceService } from './view-attendance-service.service';

describe('ViewAttendanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewAttendanceService]
    });
  });

  it('should be created', inject([ViewAttendanceService], (service: ViewAttendanceService) => {
    expect(service).toBeTruthy();
  }));
});
