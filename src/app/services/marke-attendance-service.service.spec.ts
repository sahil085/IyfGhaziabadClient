import { TestBed, inject } from '@angular/core/testing';

import { MarkeAttendanceServiceService } from './marke-attendance-service.service';

describe('MarkeAttendanceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkeAttendanceServiceService]
    });
  });

  it('should be created', inject([MarkeAttendanceServiceService], (service: MarkeAttendanceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
