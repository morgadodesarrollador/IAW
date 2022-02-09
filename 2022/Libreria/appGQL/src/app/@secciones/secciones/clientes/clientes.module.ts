import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { ListarComponent } from './listar/listar.component';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ListarComponent,
    NewComponent,
    DetailComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
