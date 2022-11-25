import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatosRoutingModule } from './candidatos-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { EliminarComponent } from './eliminar/eliminar.component';

import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { AsignarCandidatoComponent } from './asignar-candidato/asignar-candidato.component';
@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ActualizarComponent,
    BuscarComponent,
    EliminarComponent,
    AsignarCandidatoComponent
  ],
  imports: [
    CommonModule,
    CandidatosRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class CandidatosModule { }
