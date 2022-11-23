import { Component, OnInit } from '@angular/core';
import { Partido } from '../../../modelos/partido.model';
import { PartidoService } from '../../../servicios/partido.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_partido: string = "";
  intentoEnvio: boolean = false;
  elPartido: Partido = {
    nombre: "",
    lema: "",
    
    }
   
      
    constructor(private miServicioPartido:PartidoService,private rutaActiva: ActivatedRoute,
      private router: Router) { }
  
      ngOnInit(): void {
        if (this.rutaActiva.snapshot.params.id_estudiante) {
          this.modoCreacion = false;
          this.id_partido = this.rutaActiva.snapshot.params.id_estudiante;
          this.getPartido(this.id_partido)
        } else {
          this.modoCreacion = true;
        }
      }
  
      agregar(): void {
        if (this.validarDatosCompletos()) {
          this.intentoEnvio = true;
          this.miServicioPartido.crear(this.elPartido).
            subscribe(data => {
              Swal.fire(
                'Creado',
                'El partido ha sido creado correctamente',
                'success'
              )
              this.router.navigate(["pages/partido/listar"]);
            });
        }
    
      }
    
    getPartido(id: string) {
      this.miServicioPartido.getPartido(id).
        subscribe(data => {
          this.elPartido = data;
        });
    }

    editar(): void {
      this.intentoEnvio = true;
      if (this.validarDatosCompletos()) {
        this.miServicioPartido.editar(this.elPartido._id, this.elPartido).
          subscribe(data => {
            Swal.fire(
              'Actualizado',
              'El partido ha sido actualizado correctamente',
              'success'
            )
            this.router.navigate(["pages/partido/listar"]);
          });
      }
  
    }
    validarDatosCompletos():boolean{
      this.intentoEnvio=true;
      if(this.elPartido.lema=="" || 
       this.elPartido.nombre=="" ){
          
        return false;
      }else{
        return true;
      }
    }
}
