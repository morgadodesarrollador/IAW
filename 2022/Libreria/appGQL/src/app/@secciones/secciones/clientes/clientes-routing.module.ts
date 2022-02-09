import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { DetailComponent } from './detail/detail.component';
import { ListarComponent } from './listar/listar.component';
import { MenuComponent } from './menu/menu.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'new', component: NewComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'menu', component: MenuComponent, outlet: 'menus' },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
