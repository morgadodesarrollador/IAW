import { ProductosComponent } from './productos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { EditComponent } from './producto/edit/edit.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'gamas/:gama', component: ProductosComponent },
  { path: 'detalle/:id/:accion', component: ProductoComponent},
  { path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
