import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { LibrosComponent } from './libros.component';
import { ListarComponent } from './listar/listar.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '', component: LibrosComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'new', component: NewComponent },
  { path: 'detail/:id', component: DetailComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
