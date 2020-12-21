import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamasComponent } from './gamas.component';
import { ProductosgamaComponent } from './productosgama/productosgama.component';

const routes: Routes = [
  {
    path: '', component: GamasComponent,
      children: [
        
      ]
  },
  {path: 'productos/:id', component: ProductosgamaComponent, outlet:'primary' }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamasRoutingModule { }
