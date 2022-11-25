import { TestBed } from '@angular/core/testing';

import { ServicioResultadoService } from './servicio-resultado.service';

describe('ServicioResultadoService', () => {
  let service: ServicioResultadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioResultadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
