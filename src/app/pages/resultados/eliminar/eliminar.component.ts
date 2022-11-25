import { Component, OnInit } from '@angular/core';
import { Resultado } from '../../../modelos/resultado.model';

@Component({
  selector: 'ngx-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit {
  elResultado: Resultado = {
    numero_mesa: "",
    cedula_candidato: "",
    numero_votos: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
