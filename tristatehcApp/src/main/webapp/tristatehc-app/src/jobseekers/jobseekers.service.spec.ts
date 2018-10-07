import { TestBed, inject } from '@angular/core/testing';

import { JobseekersService } from './jobseekers.service';

describe('JobseekersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobseekersService]
    });
  });

  it('should be created', inject([JobseekersService], (service: JobseekersService) => {
    expect(service).toBeTruthy();
  }));
});
