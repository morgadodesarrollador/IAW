import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ HeaderComponent, MenuComponent ],
  exports: [ HeaderComponent, MenuComponent ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComunesModule { }
