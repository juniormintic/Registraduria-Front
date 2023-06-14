import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesasRoutingModule } from './mesas-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';

//imprtaciones para que funcionen las directivas de angular
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    MesasRoutingModule,
    NbCardModule,
    FormsModule,

  ]
})
export class MesasModule { }
