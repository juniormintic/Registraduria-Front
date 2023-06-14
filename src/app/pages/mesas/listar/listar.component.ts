import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mesa } from '../../../modelos/mesa.model';
import {MesaService} from '../../../servicios/mesa.service';
@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  nombreColumnas=["Numero de mesa","Cantidad inscritos"];
  mesas =[];

  constructor(private miServicioMesa: MesaService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
 
  agregar():void{
    this.router.navigate(["pages/mesas/crear"]);
  }
  editar(id:string):void{
    this.router.navigate(["pages/mesas/crear/"+id]);

  }


  listar(){
      this.miServicioMesa.listar().subscribe(
        data=>{
          this.mesas=data;
          console.log(data)
        }
      )
  }
  
  
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Mesa',
      text: "Está seguro que quiere eliminar el Mesa?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioMesa.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El Mesa ha sido eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    });
  }
}