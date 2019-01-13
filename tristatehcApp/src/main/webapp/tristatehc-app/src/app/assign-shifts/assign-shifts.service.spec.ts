import { TestBed, inject } from '@angular/core/testing';

import { AssignShiftsService } from './assign-shifts.service';

describe('AssignShiftsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignShiftsService]
    });
  });

  it('should be created', inject([AssignShiftsService], (service: AssignShiftsService) => {
    expect(service).toBeTruthy();
  }));
});
