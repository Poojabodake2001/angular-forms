import { TestBed } from '@angular/core/testing';

import { FiveserveService } from './fiveserve.service';

describe('FiveserveService', () => {
  let service: FiveserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiveserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
