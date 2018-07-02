import { TestBed, inject } from '@angular/core/testing';

import { AdminCourseService } from './admin-course.service';

describe('AdminCourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminCourseService]
    });
  });

  it('should be created', inject([AdminCourseService], (service: AdminCourseService) => {
    expect(service).toBeTruthy();
  }));
});
