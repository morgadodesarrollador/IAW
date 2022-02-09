import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { ListarComponent } from './listar/listar.component';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    LibrosComponent,
    ListarComponent,
    DetailComponent,
    NewComponent,
    SidebarComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    LibrosRoutingModule,
    SharedModule
  ]
})
export class LibrosModule { }
