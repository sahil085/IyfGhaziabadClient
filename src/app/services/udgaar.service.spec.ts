import { TestBed, inject } from '@angular/core/testing';

import { UdgaarService } from './udgaar.service';

describe('UdgaarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UdgaarService]
    });
  });

  it('should be created', inject([UdgaarService], (service: UdgaarService) => {
    expect(service).toBeTruthy();
  }));
});
