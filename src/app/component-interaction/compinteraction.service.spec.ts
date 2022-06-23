import { TestBed } from '@angular/core/testing';

import { CompinteractionService } from './compinteraction.service';

describe('CompinteractionService', () => {
  let service: CompinteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompinteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
