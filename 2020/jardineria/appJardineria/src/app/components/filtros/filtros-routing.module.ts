import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltrosComponent } from './filtros.component';
import { GamasComponent } from './gamas/gamas.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: '', redirectTo: '/gammas', pathMatch: 'full' },
  
  { path: 'gamas', component: GamasComponent, outlet: 'secondary' },
  { path: 'productos', component: ProductosComponent, outlet: 'secondary' },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltrosRoutingModule { }
