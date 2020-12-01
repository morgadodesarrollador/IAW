import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditoresComponent } from './editores.component';
import { ShowlibrosComponent } from './showlibros/showlibros.component';

const routes: Routes = [
  {
    path: 'editores', component: EditoresComponent,
    children: [
      { path: 'libros', component: ShowlibrosComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditoresRoutingModule { }
