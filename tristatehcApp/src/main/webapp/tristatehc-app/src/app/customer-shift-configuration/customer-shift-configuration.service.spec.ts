import { TestBed, inject } from '@angular/core/testing';

import { CustomerShiftConfigurationService } from './customer-shift-configuration.service';

describe('CustomerShiftConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerShiftConfigurationService]
    });
  });

  it('should be created', inject([CustomerShiftConfigurationService], (service: CustomerShiftConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
