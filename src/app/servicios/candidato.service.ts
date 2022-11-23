import { Injectable } from '@angular/core';
import { Candidato } from '../modelos/candidato.mode';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private http: HttpClient) { }
      
  
  listar(): Observable<Candidato[]> {
      return this.http.get<Candidato[]>(`${environment.url_api_gateway}/candidato`);
  }
  getCandidato(id: string): Observable<Candidato> {
    return  this.http.get<Candidato>(`${environment.url_api_gateway}/candidato/${id}`);
    }
  crear(elCandidato: Candidato) {
    return this.http.post(`${environment.url_api_gateway}/candidato`,elCandidato);
    }

    editar(id:string, elCandidato: Candidato) {
    return this.http.put(`${environment.url_api_gateway}/candidato/${id}`,elCandidato);
    }


    eliminar(id:string){
      return  this.http.delete<Candidato>(`${environment.url_api_gateway}/candidato/${id}`,);
    }
  }
