import { Injectable } from '@angular/core';
import { Candidato } from '../modelos/candidato.mode';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private apiGatewayUrl=environment.url_api_gateway;
  constructor(private http: HttpClient) { }
      
  
  listar(): Observable<Candidato[]> {
      return this.http.get<Candidato[]>(`${this.apiGatewayUrl}/candidato`);
  }
  getCandidato(id: string): Observable<Candidato> {
    return  this.http.get<Candidato>(`${this.apiGatewayUrl}/candidato/${id}`);
    }
  crear(elCandidato: Candidato) {
    return this.http.post(`${this.apiGatewayUrl}/candidato`,elCandidato);
    }

    editar(id:string, elCandidato: Candidato) {
    return this.http.put(`${this.apiGatewayUrl}/candidato/${id}`,elCandidato);
    }
    asignarPartido(idCandidato:string, idPartido:string) {
      return this.http.put(`${this.apiGatewayUrl}/candidato/${idCandidato}/partido/${idPartido}`,null);
      }

    eliminar(id:string){
      return  this.http.delete<Candidato>(`${this.apiGatewayUrl}/candidato/${id}`,);
    }
  }
