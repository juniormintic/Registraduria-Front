import { Component, OnInit } from '@angular/core';
import { Candidato } from '../../../modelos/candidato.mode';
import { CandidatoService } from '../../../servicios/candidato.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  nombreColumnas=["Cedula","Nombre","Apellido","Numero resolucion","Partido","Opciones"];
  candidatos =[];


  constructor(private miServicioCandidato:CandidatoService , private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
 
  agregar():void{
    this.router.navigate(["pages/candidato/crear"]);
  }
  editar(id:string):void{
    this.router.navigate(["pages/candidato/actualizar/"+id]);

  }

  asignarPartido(id:string):void{
    this.router.navigate(["pages/candidato/asignarPartido/"+id]);
  }

  listar(){
      this.miServicioCandidato.listar().subscribe(
        data=>{
          this.candidatos=data;
        }
      )
  }
  
  
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar candidato',
      text: "Está seguro que quiere eliminar el candidato?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioCandidato.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El candidato ha sido eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}
