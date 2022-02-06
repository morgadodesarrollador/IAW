import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainCuerpoComponent } from './main-cuerpo/main-cuerpo.component';


@NgModule({
  declarations: [
    MainComponent,
    MainMenuComponent,
    MainCuerpoComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
