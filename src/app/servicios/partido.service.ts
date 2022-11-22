import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Partido } from '../modelos/partido.model';
@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  
  constructor(private http: HttpClient) { }
  
guardarDatosPartido(infoPartido: Partido){
  return this.http.get<Partido>('http://127.0.0.1:7777/partido');
}
eliminarDatosPartido(infoPartido: Partido){
  return this.http.delete<Partido>('http://127.0.0.1:7777/partido');
}
actualizarDatosPartido(infoPartido: Partido){
  return this.http.put<Partido>('http://127.0.0.1:7777/partido', infoPartido);
}
buscarDatosPartido(infoPartido: Partido){
  return this.http.get<Partido>('http://127.0.0.1:7777/partido');
}

listarDatosPartido(infoPartido: Partido){
  
}

}

