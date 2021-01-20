import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'home', component: PortadaComponent},
  { path: 'perfil', component: PerfilComponent, outlet: 'primary'},
  { path: 'login', component: LoginComponent, outlet: 'primary'},
  { path: 'registro', component: SignupComponent, outlet: 'primary'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ComunesRoutingModule { }
