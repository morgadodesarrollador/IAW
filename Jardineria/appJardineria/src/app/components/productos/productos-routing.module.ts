import { ProductosComponent } from './productos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'gamas/:gama', component: ProductosComponent },
  { path: 'detalle/:id/:accion', component: ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
