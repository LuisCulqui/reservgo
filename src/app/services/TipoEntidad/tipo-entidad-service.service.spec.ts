import { TestBed } from '@angular/core/testing';

import { TipoEntidadServiceService } from './tipo-entidad-service.service';

describe('TipoEntidadServiceService', () => {
  let service: TipoEntidadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoEntidadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
