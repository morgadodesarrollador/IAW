import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltrosComponent } from './filtros.component';
import { GamasComponent } from './gamas/gamas.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: 'gamas', component: GamasComponent, outlet: 'rfiltros' },
  { path: 'productos', component: ProductosComponent, outlet: 'rfiltros' },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltrosRoutingModule { }
