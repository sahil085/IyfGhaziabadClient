import { TestBed, inject } from '@angular/core/testing';

import { UserProfileListService } from './user-profile-list.service';

describe('UserProfileListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfileListService]
    });
  });

  it('should be created', inject([UserProfileListService], (service: UserProfileListService) => {
    expect(service).toBeTruthy();
  }));
});
