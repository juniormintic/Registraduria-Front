import { Component, OnInit } from '@angular/core';
import { Resultado } from '../../../modelos/resultado.model';
import { ServicioResultadoService } from '../../../servicios/servicio-resultado.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})

export class ListarComponent implements OnInit {
  modoCreacion: boolean = true;
  id_Resultado: string = "";
  intentoEnvio: boolean = false;
  elResultado: Resultado = {
    numero_mesa: "",
    cedula_candidato: "",
    numero_votos: "",
  }

  nombreColumnas=["Numero mesa","Cedula candidato","numero votos","Opciones"];
  resultados=[];

  constructor(private miServicioResultado:ServicioResultadoService,private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar():void{
    this.miServicioResultado.listar().
    subscribe(data => {
      this.resultados=data;
    });
  }

  buscarTodosResultados(){
    this.miServicioResultado.listar().subscribe(
      data => {
        this.resultados=data;
      }
    );
  }

  editar(id:string):void{
    this.router.navigate(["pages/resultado/actualizar"+id]);
  }

  agregar():void{
    this.router.navigate(["pages/resultado/crear"]);
  }

  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Resultado',
      text: "Está seguro que quiere eliminar el resultado?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if(result.isConfirmed){
        this.miServicioResultado.eliminar(id).
        subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'El resultado ha sido eliminado correctamente',
            'success'
          )
          this.ngOnInit;
        });
      }
    });
  }

}
