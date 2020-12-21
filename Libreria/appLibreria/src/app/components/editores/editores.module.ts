import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditoresRoutingModule } from './editores-routing.module';
import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';
import { EditoresComponent } from './editores.component';


@NgModule({
  declarations: [EditoresComponent ],
  imports: [
    CommonModule,
    ComunesModule,
    EditoresRoutingModule,
    IonicModule
  ]
})
export class EditoresModule { }
