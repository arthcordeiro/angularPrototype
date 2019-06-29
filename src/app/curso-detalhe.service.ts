import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from 'api.const';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cursos } from './home/content-cards/curso/cursos.model';

@Injectable({
  providedIn: 'root'
})
export class CursoDetalheService {
  
  
  constructor(private http: HttpClient) { }

  getCursoDetalhe(): Observable<Cursos[]>{
    return this.http.get<Cursos[]>(`${URL_API}`);
  }
}
