import { TestBed, inject } from '@angular/core/testing';

import { UserAvailabilityService } from './user-availability.service';

describe('UserAvailabilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAvailabilityService]
    });
  });

  it('should be created', inject([UserAvailabilityService], (service: UserAvailabilityService) => {
    expect(service).toBeTruthy();
  }));
});
