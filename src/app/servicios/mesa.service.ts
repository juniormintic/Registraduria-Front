import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Mesa } from '../modelos/mesa.model';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private apiGatewayUrl=environment.url_api_gateway;
  constructor(private http: HttpClient) { }

  listar(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(`${this.apiGatewayUrl}/mesa`);
}

  crear(elmesa : Mesa) {
     return this.http.post(`${this.apiGatewayUrl}/mesa`, elmesa);
  }
  editar(id:string,elmesa: Mesa) {
     return this.http.put(`${this.apiGatewayUrl}/mesa/${id}`, elmesa);
  }
  eliminar(id:String) {
    return this.http.delete(`${this.apiGatewayUrl}/mesa/${id}`);
  }
  getmesa(id: string): Observable<Mesa> {
    return  this.http.get<Mesa>(`${this.apiGatewayUrl}/mesa/${id}`);
  }

}

