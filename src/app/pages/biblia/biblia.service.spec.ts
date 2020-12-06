import { TestBed } from '@angular/core/testing';

import { BibliaService } from './biblia.service';

describe('BibliaService', () => {
  let service: BibliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
