import { TestBed } from '@angular/core/testing';

import { DiaglogService } from './diaglog.service';

describe('DiaglogService', () => {
  let service: DiaglogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiaglogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
