import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './components/comunes/portada/portada.component';
import { PerfilComponent } from './components/comunes/perfil/perfil.component';
import { LoginComponent } from './components/comunes/login/login.component';
import { SignupComponent } from './components/comunes/signup/signup.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PortadaComponent},
  { path: 'perfil', component: PerfilComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  {
    path: 'gamas', outlet: 'primary',
    loadChildren: () => import('./components/gamas/gamas.module').then( m => m.GamasModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules , useHash: true, enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
