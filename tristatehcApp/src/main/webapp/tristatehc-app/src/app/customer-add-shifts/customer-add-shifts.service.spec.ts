import { TestBed, inject } from '@angular/core/testing';

import { CustomerAddShiftsService } from './customer-add-shifts.service';

describe('CustomerAddShiftsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAddShiftsService]
    });
  });

  it('should be created', inject([CustomerAddShiftsService], (service: CustomerAddShiftsService) => {
    expect(service).toBeTruthy();
  }));
});
