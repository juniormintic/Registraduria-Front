import { Component, OnInit } from '@angular/core';
import { Partido } from '../../../modelos/partido.model';
import { PartidoService } from '../../../servicios/partido.service';

@Component({
  selector: 'ngx-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {
  
   elPartido: Partido = {
      nombre: "",
      lema: "",
      
      }
  constructor() { }

  ngOnInit(): void {
  }

}
