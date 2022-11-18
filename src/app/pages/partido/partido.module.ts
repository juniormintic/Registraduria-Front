import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidoRoutingModule } from './partido-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
    ActualizarComponent,
    EliminarComponent,
  ],
  imports: [
    CommonModule,
    PartidoRoutingModule,
    NbCardModule,
    FormsModule,
  ]
})
export class PartidoModule { }
