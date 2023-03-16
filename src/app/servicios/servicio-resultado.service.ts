import { Injectable } from '@angular/core';
import { Resultado } from '../modelos/resultado.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioResultadoService {
  private apiGatewayUrl=environment.url_api_gateway;
  constructor(private http: HttpClient) { }
 
  listar(): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(`${this.apiGatewayUrl}/resultados`);
  }

  crear(elResultado: Resultado){
    return this.http.post(`${this.apiGatewayUrl}/resultados`,elResultado);
  }

  editar(id:string,elResultado: Resultado){
    return this.http.put(`${this.apiGatewayUrl}/resultados/${id}`,elResultado);
  }

  eliminar(id:string){
    return  this.http.delete<Resultado>(`${this.apiGatewayUrl}/resultados/${id}`,);
  }

  getResultado(id:string): Observable<Resultado>{
    return this.http.get<Resultado>(`${this.apiGatewayUrl}/resultados/${id}`);
  }
}

