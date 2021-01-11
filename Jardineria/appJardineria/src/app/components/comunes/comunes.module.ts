import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunesRoutingModule } from './comunes-routing.module';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PortadaComponent } from './portada/portada.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [HeaderComponent, PortadaComponent, PerfilComponent, LoginComponent, SignupComponent],
  exports: [HeaderComponent, PortadaComponent, PerfilComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComunesRoutingModule,
    FormsModule    
  ]
})
export class ComunesModule { }
