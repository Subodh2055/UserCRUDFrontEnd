import { TestBed } from '@angular/core/testing';

import { RealworldService } from './realworld.service';

describe('RealworldService', () => {
  let service: RealworldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealworldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
