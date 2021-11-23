import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './componentes/secciones/home/home.component';
import { LoginComponent} from './componentes/secciones/login/login.component';
import { IncidenciasComponent } from './componentes/secciones/incidencias/incidencias.component';
import { NewIncComponent} from './componentes/secciones/incidencias/new-inc/new-inc.component';
import { ListIncComponent } from './componentes/secciones/incidencias/list-inc/list-inc.component';
import { TipoComponent } from './componentes/secciones/incidencias/tipo/tipo.component';
import { NewtipoPuntosComponent } from './componentes/secciones/incidencias/tipo/newtipo-puntos/newtipo-puntos.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, outlet: 'sidenav' },
  { path: 'login', component: LoginComponent, outlet: 'sidenav'},
  { path: 'incidencias', component: IncidenciasComponent, outlet: 'mainmenu'},
  { path: 'incidencias/new', component: NewIncComponent, outlet: 'sidenav' },
  { path: 'incidencias/list', component: ListIncComponent, outlet: 'sidenav' },
  { path: 'incidencias/tipo/new', component: NewtipoPuntosComponent, outlet: 'sidenav' },

  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
