import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';
import { CategoriasComponent } from './categorias.component';

@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    IonicModule,
    ComunesModule
  ]
})
export class CategoriasModule { }
