import { TestBed, inject } from '@angular/core/testing';

import { EmployeeProfileService } from './employee-profile.service';

describe('EmployeeProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeProfileService]
    });
  });

  it('should be created', inject([EmployeeProfileService], (service: EmployeeProfileService) => {
    expect(service).toBeTruthy();
  }));
});
