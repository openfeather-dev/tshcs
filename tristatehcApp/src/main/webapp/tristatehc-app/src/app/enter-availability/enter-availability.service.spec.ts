import { TestBed, inject } from '@angular/core/testing';

import { EnterAvailabilityService } from './enter-availability.service';

describe('EnterAvailabilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnterAvailabilityService]
    });
  });

  it('should be created', inject([EnterAvailabilityService], (service: EnterAvailabilityService) => {
    expect(service).toBeTruthy();
  }));
});
