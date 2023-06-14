import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisoRolRoutingModule } from './permiso-rol-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    PermisoRolRoutingModule
  ]
})
export class PermisoRolModule { }
