import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'books', loadChildren:() => import('./@secciones/secciones/libros/libros.module').then(m => m.LibrosModule)},
  { path: 'people', loadChildren:() => import('./@secciones/secciones/clientes/clientes.module').then(m => m.ClientesModule)},

  {  path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
