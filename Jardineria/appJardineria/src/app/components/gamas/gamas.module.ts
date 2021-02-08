import { NgModule } from '@angular/core';
import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { GamasRoutingModule } from './gamas-routing.module';
import { GamasComponent } from './gamas.component';
import { ProductosgamaComponent } from './productosgama/productosgama.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [GamasComponent, ProductosgamaComponent],
  exports: [GamasComponent, ProductosgamaComponent],
  imports: [
    ComunesModule,
    CommonModule,
    IonicModule,
    GamasRoutingModule,
    PipesModule
  ]
})
export class GamasModule { }
