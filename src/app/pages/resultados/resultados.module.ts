import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ListarComponent } from './listar/listar.component';

import { CrearComponent } from './crear/crear.component';

import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    ListarComponent,
   
    CrearComponent,
   
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule,
    FormsModule,
    NbCardModule,
   
  ]
})
export class ResultadosModule { }
