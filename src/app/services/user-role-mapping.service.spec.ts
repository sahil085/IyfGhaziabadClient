import { TestBed, inject } from '@angular/core/testing';

import { UserRoleMappingService } from './user-role-mapping.service';

describe('UserRoleMappingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRoleMappingService]
    });
  });

  it('should be created', inject([UserRoleMappingService], (service: UserRoleMappingService) => {
    expect(service).toBeTruthy();
  }));
});
