import { TestBed } from '@angular/core/testing';

import { OpeniaingService } from './openiaing.service';

describe('OpeniaingService', () => {
  let service: OpeniaingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpeniaingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
