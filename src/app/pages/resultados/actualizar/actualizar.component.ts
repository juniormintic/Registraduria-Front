import { Component, OnInit } from '@angular/core';
import { Resultado } from '../../../modelos/resultado.model';

@Component({
  selector: 'ngx-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {
  elResultado: Resultado = {
    numero_mesa: "",
    cedula_candidato: "",
    numero_votos: "",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
