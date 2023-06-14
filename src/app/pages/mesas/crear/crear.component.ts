
import { Component, OnInit } from '@angular/core';
import { MesaService } from '../../../servicios/mesa.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Mesa } from '../../../modelos/mesa.model';
@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_mesa: string = "";
  intentoEnvio: boolean = false;

  elmesa: Mesa = {  
    numero: null ,
    cantidad_inscritos: null
  }
  constructor(private miServiciomesas: MesaService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
              
    if (this.rutaActiva.snapshot.params.id_mesa) {
      this.modoCreacion = false;
      this.id_mesa = this.rutaActiva.snapshot.params.id_mesa;
      this.getmesa(this.id_mesa)
  
    } else {
      this.modoCreacion = true;
    }
  }
 
  


  getmesa(id: string) {
    this.miServiciomesas.getmesa(id).
      subscribe(data => {
        this.elmesa = data;
  
      });
  }
  agregar(): void {

    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;   
      
      this.miServiciomesas.crear(this.elmesa).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El mesa ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/mesas/listar"]);
        });
    }

  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServiciomesas.editar(this.elmesa._id, this.elmesa).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El mesa ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["pages/mesas/listar"]);
        });
    }

  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elmesa.numero== null || 
       this.elmesa.cantidad_inscritos==null
     ){
        
      return false;
    }else{
      return true;
    }
  }
}
