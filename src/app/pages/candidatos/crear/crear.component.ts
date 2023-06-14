import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidato } from '../../../modelos/candidato.mode';
import { CandidatoService } from '../../../servicios/candidato.service';
import Swal from 'sweetalert2';
import { Partido } from '../../../modelos/partido.model';
import { PartidoService } from '../../../servicios/partido.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  listadoPartidos:Partido[] = [];
  modoCreacion: boolean = true;
  id_candidato: string = "";
  intentoEnvio: boolean = false;
  


  elCandidato: Candidato = {
    cedula: "",
    nombre: "",
    apellido: "",
    numeroResolucion:"", 
    partido:{}
   
  }
 

  constructor(private miServicioCandidatos: CandidatoService,
    private rutaActiva: ActivatedRoute,private miServicioPartido:PartidoService,
    private router: Router) { }

  ngOnInit(): void {
      this.buscarPartidos();
    if (this.rutaActiva.snapshot.params.id_candidato) {
      this.modoCreacion = false;
      this.id_candidato = this.rutaActiva.snapshot.params.id_candidato;
      this.getCandidato(this.id_candidato)
  
    } else {
      this.modoCreacion = true;
    }
  }
 
  
buscarPartidos(){
  this.miServicioPartido.listar().subscribe(data=> this.listadoPartidos=data)
}

aisgnarPartido(){
  this.miServicioCandidatos.asignarPartido(this.elCandidato._id,this.elCandidato.partido._id).
  subscribe(data => {
    Swal.fire(
      'Creado',
      'El Partido ha sido asignado correctamente',
      'success'
    )
    this.router.navigate(["pages/candidato/listar"]);
  });

}

  getCandidato(id: string) {
    this.miServicioCandidatos.getCandidato(id).
      subscribe(data => {
        this.elCandidato = data;
  
      });
  }
  agregar(): void {

    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;   
      this.miServicioCandidatos.crear(this.elCandidato).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El candidato ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/candidato/listar"]);
        });
    }

  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServicioCandidatos.editar(this.elCandidato._id, this.elCandidato).      
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El candidato ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["pages/candidato/listar"]);
        });
    }

  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elCandidato.cedula=="" || 
       this.elCandidato.nombre=="" || 
       this.elCandidato.apellido==""|| 
       this.elCandidato.numeroResolucion==""){
        
      return false;
    }else{
      return true;
    }
  }
}
