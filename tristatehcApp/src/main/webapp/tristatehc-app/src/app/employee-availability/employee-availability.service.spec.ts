import { TestBed, inject } from '@angular/core/testing';

import { EmployeeAvailabilityService } from './employee-availability.service';

describe('EmployeeAvailabilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeAvailabilityService]
    });
  });

  it('should be created', inject([EmployeeAvailabilityService], (service: EmployeeAvailabilityService) => {
    expect(service).toBeTruthy();
  }));
});
