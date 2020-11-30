import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditoresComponent } from './editores.component';

const routes: Routes = [
  {
    path: 'editores', component: EditoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditoresRoutingModule { }
