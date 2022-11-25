import { Component, OnInit } from '@angular/core';
import { Partido } from '../../../modelos/partido.model';
import { Candidato } from '../../../modelos/candidato.mode';
import { PartidoService } from '../../../servicios/partido.service';
import { CandidatoService } from '../../../servicios/candidato.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'ngx-asignar-candidato',
  templateUrl: './asignar-candidato.component.html',
  styleUrls: ['./asignar-candidato.component.scss']
})
export class AsignarCandidatoComponent implements OnInit {
  partidoSeleccionada:Partido={};
  candidato: Candidato = {}

  partidos:Partido[]=[{
         _id:"151515",
         nombre:"algo",
        lema:"lema"
      }];

  // partidos =[
  //   {
  //     _id:"151515",
  //     nombre:"algo",
  //     lema:"lema"
  //   }
  // ];
 
  id_candidato='';
  nombreCandidato="";

  constructor(private miServicioPartido:PartidoService,private rutaActiva: ActivatedRoute,private miServicioCandidatos: CandidatoService,
    private router: Router) { }

    ngOnInit(): void {
      //this.listar();
      if (this.rutaActiva.snapshot.params.id_candidato) {     
        this.id_candidato = this.rutaActiva.snapshot.params.id_candidato;
       this.miServicioCandidatos.getCandidato(this.id_candidato)
      
        
      } 
    }
 
    asignarPartido():void{
        console.log(this.partidoSeleccionada)
      if( this.miServicioCandidatos.asignarPartido(this.id_candidato,this.partidoSeleccionada._id)){
         alert(`Partido ${this.partidoSeleccionada.nombre} al candidato ${this.candidato.nombre}`)
      }
     
    }
  listar():void{
    this.miServicioPartido.listar().
      subscribe(data => {
        this.partidos=data;
      });
  }
}
