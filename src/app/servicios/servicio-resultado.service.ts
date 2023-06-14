import { Injectable } from '@angular/core';
import { Resultado } from '../modelos/resultado.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Candidato } from '../modelos/candidato.mode';
import { Mesa } from '../modelos/mesa.model';
@Injectable({
  providedIn: 'root'
})
export class ServicioResultadoService {
  private apiGatewayUrl=environment.url_api_gateway;
  constructor(private http: HttpClient) { }
 
  listar(): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(`${this.apiGatewayUrl}/resultado`);
  }
  buscarMesas(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(`${this.apiGatewayUrl}/mesa`);
  }
  buscarCandidatos(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(`${this.apiGatewayUrl}/candidato`);
  }
  //verificar permisos de ruta
  crear(elResultado: Resultado,elCandidato:Candidato,laMesa:Mesa){
  
    return this.http.post(`${this.apiGatewayUrl}/resultado/candidato/${elCandidato._id}/mesa/${laMesa._id}`,elResultado);
  }

  editar(id_resultado: string, id_candidato: string,id_mesa:string,elResultado:Resultado){
     console.log(id_resultado)
    return this.http.put(`${this.apiGatewayUrl}/resultado/${id_resultado}/candidato/${id_candidato}/mesa/${id_mesa}`,elResultado);
  }

  eliminar(id:string){
    return  this.http.delete<Resultado>(`${this.apiGatewayUrl}/resultado/${id}`,);
  }

  getResultado(id:string): Observable<Resultado>{
    return this.http.get<Resultado>(`${this.apiGatewayUrl}/resultado/${id}`);
  }
}

