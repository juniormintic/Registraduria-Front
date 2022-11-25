import { Injectable } from '@angular/core';
import { Resultado } from '../modelos/resultado.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioResultadoService {

  constructor(private http: HttpClient) { }
  listar(): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(`${environment.url_api_gateway}/resultados`);
  }

  crear(elResultado: Resultado){
    return this.http.post(`${environment.url_api_gateway}/resultados`,elResultado);
  }

  editar(id:string,elResultado: Resultado){
    return this.http.put(`${environment.url_api_gateway}/resultados/${id}`,elResultado);
  }

  eliminar(id:string){
    return  this.http.delete<Resultado>(`${environment.url_api_gateway}/resultados/${id}`,);
  }

  getResultado(id:string): Observable<Resultado>{
    return this.http.get<Resultado>(`${environment.url_api_gateway}/resultados/${id}`);
  }
}

