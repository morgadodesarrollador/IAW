import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamasComponent } from './gamas.component';
import { ProductosgamaComponent } from './productosgama/productosgama.component';
import { ProductosComponent } from '../productos/productos.component';

const routes: Routes = [
  { path: '', component: GamasComponent, outlet: 'primary' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamasRoutingModule { }
