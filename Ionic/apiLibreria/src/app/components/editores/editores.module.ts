import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditoresRoutingModule } from './editores-routing.module';
import { EditoresComponent } from './editores.component';

import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [EditoresComponent],
  imports: [
    CommonModule,
    ComunesModule,
    EditoresRoutingModule,
    IonicModule
  ]
})
export class EditoresModule { }
