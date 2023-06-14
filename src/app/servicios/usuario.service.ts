import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    private apiGatewayUrl=environment.url_api_gateway;
    constructor(private http: HttpClient) { }
        
    
    listar(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.apiGatewayUrl}/usuario`);
    }
    getUsuario(id: string): Observable<Usuario> {
      return  this.http.get<Usuario>(`${this.apiGatewayUrl}/usuario/${id}`);
      }
    crear(elUsuario: Usuario) {
      return this.http.post(`${this.apiGatewayUrl}/usuario`,elUsuario);
      }
  
      editar(id:string, elUsuario: Usuario) {
      return this.http.put(`${this.apiGatewayUrl}/usuario/${id}`,elUsuario);
      }
      asignarPartido(idUsuario:string, idPartido:string) {
        return this.http.put(`${this.apiGatewayUrl}/usuario/${idUsuario}/partido/${idPartido}`,null);
        }
  
      eliminar(id:string){
        return  this.http.delete<Usuario>(`${this.apiGatewayUrl}/usuario/${id}`,);
      }
    }
  