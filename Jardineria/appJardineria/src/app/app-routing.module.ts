import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './components/comunes/portada/portada.component';
import { PerfilComponent } from './components/comunes/perfil/perfil.component';
import { LoginComponent } from './components/comunes/login/login.component';
import { SignupComponent } from './components/comunes/signup/signup.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PortadaComponent , outlet: 'primary'},
  { path: 'perfil', component: PerfilComponent },
  { path: 'login', component: LoginComponent, outlet: 'primary'},
  { path: 'signup', component: SignupComponent},
  {
    path: 'gamas',
    loadChildren: () => import('./components/gamas/gamas.module').then( m => m.GamasModule)
  },
  {
    path: 'productos', 
    loadChildren: () => import('./components/productos/productos.module').then( m => m.ProductosModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./components/filtros/filtros.module').then( m => m.FiltrosModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules , useHash: true, 
            enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
