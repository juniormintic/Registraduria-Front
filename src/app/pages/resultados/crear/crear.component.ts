import { Component, OnInit } from '@angular/core';
import { Resultado } from '../../../modelos/resultado.model';
import { ServicioResultadoService } from '../../../servicios/servicio-resultado.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_resultado: string = "";
  intentoEnvio: boolean = false;
  elResultado: Resultado = {
    numero_mesa: "",
    cedula_candidato: "",
    numero_votos: "",
  }
  constructor(private miServicioResultado:ServicioResultadoService,private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if(this.rutaActiva.snapshot.params.id_resultado){
      this.modoCreacion = false;
      this.id_resultado = this.rutaActiva.snapshot.params.id_resultado;
      this.getResultado(this.id_resultado)
    } else {
      this.modoCreacion = true;
    }
  }

  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioResultado.crear(this.elResultado).
      subscribe(data => {
        Swal.fire(
          'Creado',
          'El resultado ha sido creado correctamente',
          'success'
        )
        this.router.navigate(["pages/resultado/listar"]);
      });
    }
  }

  getResultado(id: string) {
    this.miServicioResultado.getResultado(id).
     subscribe(data => {
        this.elResultado = data;
     });
  }

  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServicioResultado.editar(this.elResultado._id, this.elResultado).
      subscribe(data => {
        Swal.fire(
          'Actualizado',
          'El resultado ha sido actualizdo correctamente',
          'success'
        )
        this.router.navigate(["pages/resultado/listar"]);
      });
    }
  }

  validarDatosCompletos(): boolean{
    this.intentoEnvio = true;
    if(this.elResultado.numero_mesa == "" ||
    this.elResultado.cedula_candidato == "" ||
    this.elResultado.numero_votos == ""){
      return false;
    } else{
      return true;
    }
  }

}
