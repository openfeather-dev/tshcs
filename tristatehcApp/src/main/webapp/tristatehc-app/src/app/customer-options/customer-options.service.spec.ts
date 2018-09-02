import { TestBed, inject } from '@angular/core/testing';

import { CustomerOptionsService } from './customer-options.service';

describe('CustomerOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerOptionsService]
    });
  });

  it('should be created', inject([CustomerOptionsService], (service: CustomerOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
