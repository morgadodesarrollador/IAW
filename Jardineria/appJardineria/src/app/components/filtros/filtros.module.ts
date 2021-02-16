import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltrosRoutingModule } from './filtros-routing.module';
import { FiltrosComponent } from './filtros.component';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [FiltrosComponent, ProductosComponent],
  exports: [FiltrosComponent, ProductosComponent],
  imports: [
    CommonModule,
    FiltrosRoutingModule
  ]
})
export class FiltrosModule { }
