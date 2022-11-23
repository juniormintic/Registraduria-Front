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
  
  constructor(private http: HttpClient) { }
  

listar(): Observable<Partido[]> {
    return this.http.get<Partido[]>(`${environment.url_api_gateway}/partidos`);
}

crear(elPartido : Partido) {
return this.http.post(`${environment.url_api_gateway}/partidos`,
elPartido);
}
editar(id:string,elPartido: Partido) {
return this.http.put(`${environment.url_api_gateway}/partidos/${id}`,
elPartido);
}
eliminar(id:String) {
  return this.http.delete(`${environment.url_api_gateway}/partidos/${id}`);

}
getPartido(id: string): Observable<Partido> {
  return  this.http.get<Partido>(`${environment.url_api_gateway}/partidos/${id}`);
  }

}
