import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { ListarComponent } from './listar/listar.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    LibrosComponent,
    ListarComponent,
    DetailComponent,

  ],
  imports: [
    CommonModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
