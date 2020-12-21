import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunesRoutingModule } from './comunes-routing.module';

import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PortadaComponent } from './portada/portada.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [HeaderComponent, PortadaComponent, PerfilComponent, LoginComponent],
  exports: [HeaderComponent, PortadaComponent, PerfilComponent, LoginComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComunesRoutingModule
    
  ]
})
export class ComunesModule { }
