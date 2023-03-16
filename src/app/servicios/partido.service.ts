import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Partido } from '../modelos/partido.model';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  private apiGatewayUrl=environment.url_api_gateway;
  constructor(private http: HttpClient) { }
  

listar(): Observable<Partido[]> {
    return this.http.get<Partido[]>(`${this.apiGatewayUrl}/partido`);
}

crear(elPartido : Partido) {
return this.http.post(`${this.apiGatewayUrl}/partido`,
elPartido);
}
editar(id:string,elPartido: Partido) {
return this.http.put(`${this.apiGatewayUrl}/partido/${id}`,
elPartido);
}
eliminar(id:String) {
  return this.http.delete(`${this.apiGatewayUrl}/partido/${id}`);

}
getPartido(id: string): Observable<Partido> {
  return  this.http.get<Partido>(`${this.apiGatewayUrl}/partido/${id}`);
  }

}
