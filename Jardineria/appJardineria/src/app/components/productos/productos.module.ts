import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ProductosComponent } from './productos.component';
import { ProductoComponent } from './producto/producto.component';
import { ComunesModule } from '../comunes/comunes.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductosComponent, ProductoComponent ],
  exports: [ProductosComponent, ProductoComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    ComunesModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule {
  // tslint:disable-next-line:no-input-rename
  
 }
