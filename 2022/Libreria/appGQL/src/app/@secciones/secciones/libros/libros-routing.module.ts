import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { LibrosComponent } from './libros.component';
import { ListarComponent } from './listar/listar.component';
import { NewComponent } from './new/new.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// libros-routing
const routes: Routes = [
  { path: '', component:SidebarComponent, outlet: 'menus' },
  { path: 'home', component:LibrosComponent, outlet: 'primary' },
  { path: 'listar', component: ListarComponent, outlet: 'primary' },
  { path: 'new', component: NewComponent, outlet: 'primary' },
  { path: 'detail/:id', component: DetailComponent, outlet: 'primary' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
