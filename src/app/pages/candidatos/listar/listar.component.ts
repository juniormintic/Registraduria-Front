import { Component, OnInit } from '@angular/core';
import { Candidato } from '../../../modelos/candidato.mode';
import { CandidatoService } from '../../../servicios/candidato.service';
@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  nombreColumnas=["Cedula","Nombre","Apellido","Numero resolucion","Opciones"];
  candidatos =[];

  constructor(private miServicioCandidato:CandidatoService) { }

  ngOnInit(): void {
    this.buscarTodosCandidatos();
  }

  buscarTodosCandidatos(){
      this.miServicioCandidato.listar().subscribe(
        data=>{
          this.candidatos=data;
        }
      )
  }

}
