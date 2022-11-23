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
    eliminar(id:string){
      return  this.http.delete<Candidato>(`${environment.url_api_gateway}/candidato/${id}`,);
    }
  }
