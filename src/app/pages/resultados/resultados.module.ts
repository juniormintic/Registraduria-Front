import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ListarComponent } from './listar/listar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { CrearComponent } from './crear/crear.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarComponent,
    ActualizarComponent,
    CrearComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule,
    FormsModule
  ]
})
export class ResultadosModule { }
