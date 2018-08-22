import { TestBed, inject } from '@angular/core/testing';

import { ShiftDetailsService } from './shift-details.service';

describe('ShiftDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShiftDetailsService]
    });
  });

  it('should be created', inject([ShiftDetailsService], (service: ShiftDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
