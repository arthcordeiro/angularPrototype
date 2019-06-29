import { TestBed } from '@angular/core/testing';

import { CursoDetalheService } from './curso-detalhe.service';

describe('CursoDetalheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursoDetalheService = TestBed.get(CursoDetalheService);
    expect(service).toBeTruthy();
  });
});
