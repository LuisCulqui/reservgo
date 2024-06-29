import { TestBed } from '@angular/core/testing';

import { EntidadAfiliadaServiceService } from './entidad-afiliada-service.service';

describe('EntidadAfiliadaServiceService', () => {
  let service: EntidadAfiliadaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntidadAfiliadaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
