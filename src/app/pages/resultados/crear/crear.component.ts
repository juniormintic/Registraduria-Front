import { Component, OnInit } from '@angular/core';
import { Resultado } from '../../../modelos/resultado.model';
import { ServicioResultadoService } from '../../../servicios/servicio-resultado.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidato } from '../../../modelos/candidato.mode';
import { Mesa } from '../../../modelos/mesa.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  listadoCandidatos: Candidato[]=[];
  listadoMesas: Mesa []=[];
  
  candidato_id:string = "";
  mesa_id:string = "";

 mesa:Mesa={};
 candidato:Candidato={};


  infoResultado: Resultado={
    mesa: this.mesa,
    candidato:this.candidato,
    numero_votos: "",
  }



  modoCreacion: boolean = true;
  id_resultado: string = "";
  intentoEnvio: boolean = false;
 
  constructor(private miServicioResultado:ServicioResultadoService,private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  
    this.buscarCandidatos();
    this.buscarMesas();
    
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
     
      this.miServicioResultado.crear(this.infoResultado,this.infoResultado.candidato,this.infoResultado.mesa ).
      subscribe(data => {
        Swal.fire(
          'Creado',
          'El resultado ha sido creado correctamente',
          'success'
        )
        this.router.navigate(["pages/resultados/listar"]);
      });
    }
  }
  editar(): void {
    this.intentoEnvio = true;
    
    if (this.validarDatosCompletos()) {
      this.candidato_id=this.infoResultado.candidato._id;
      this.mesa_id=this.infoResultado.mesa._id;
      
      this.miServicioResultado.editar(this.infoResultado._id,this.candidato_id,this.mesa_id ,this.infoResultado).
      subscribe(data => {
        Swal.fire(
          'Actualizado',
          'El resultado ha sido actualizdo correctamente',
          'success'
        )
        this.router.navigate(["pages/resultados/listar"]);
      });
    }
  }
  buscarCandidatos(){
    this.miServicioResultado.buscarCandidatos().subscribe(
      data=>{
        this.listadoCandidatos=data;
      }
    )
    }
  buscarMesas(){
    this.miServicioResultado.buscarMesas().subscribe(
      data=>{
        this.listadoMesas=data;
      }
    )
    }
  getResultado(id: string) {
    this.miServicioResultado.getResultado(id).
     subscribe(data => {
        this.infoResultado = data;   
  
     });
      

  }

  

  validarDatosCompletos(): boolean{
    this.intentoEnvio = true;
    if(this.infoResultado.mesa == null ||
    this.infoResultado.candidato == null ||
    this.infoResultado.numero_votos == ""){
      return false;
    } else{
      return true;
    }
  }

}
