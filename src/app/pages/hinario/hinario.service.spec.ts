import { TestBed } from '@angular/core/testing';

import { HinarioService } from './hinario.service';

describe('HinarioService', () => {
  let service: HinarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HinarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
