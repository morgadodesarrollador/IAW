import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FiltrosRoutingModule } from './filtros-routing.module';
import { FiltrosComponent } from './filtros.component';
import { ProductosComponent } from './productos/productos.component';
import { GamasComponent } from './gamas/gamas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FiltrosComponent, ProductosComponent, GamasComponent],
  exports: [FiltrosComponent, ProductosComponent, GamasComponent],
  imports: [
    CommonModule,
    IonicModule,
    FiltrosRoutingModule, 
    FormsModule, ReactiveFormsModule
  ]
})
export class FiltrosModule { }
