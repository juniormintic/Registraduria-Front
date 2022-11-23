import { Component, OnInit } from '@angular/core';
import { Partido } from '../../../modelos/partido.model';
import { PartidoService } from '../../../servicios/partido.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})

export class ListarComponent implements OnInit {
  modoCreacion: boolean = true;
    id_Partido: string = "";
    intentoEnvio: boolean = false;
    elPartido: Partido = {
    nombre: "",
    lema: "",
    
    }
  
  
  nombreColumnas=["Nombre","Lema","Opciones"];
  partidos =[];

  constructor(private miServicioPartido:PartidoService,private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
 
  listar():void{
    this.miServicioPartido.listar().
      subscribe(data => {
        this.partidos=data;
      });
  }
 
  buscarTodosPartidos(){
      this.miServicioPartido.listar().subscribe(
        data=>{
          this.partidos=data;
        }
      )
  }
  
    editar(id:string):void{
      this.router.navigate(["pages/partido/actualizar/"+id]);
    }
    agregar():void{
      this.router.navigate(["pages/partido/crear"]);
    }
    eliminar(id:string):void{
      Swal.fire({
          title: 'Eliminar Estudiante',
          text: "Está seguro que quiere eliminar el estudiante?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminar'
          }).then((result) => {
        if (result.isConfirmed) {
            this.miServicioPartido.eliminar(id).
            subscribe(data => {
              
             
  Swal.fire(
              'Eliminado!',
              'El estudiante ha sido eliminada correctamente',
              'success'
              )
            this.ngOnInit();
            });
        }
      })
      }


}