//IMPORTAMOS CLASES DE angular
import { BrowserModule } from '@angular/platform-browser';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { MaterialModule } from './material.module';

import { AngularFontAwesomeModule} from 'angular-font-awesome';


//importamos nuestros componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MainComponent } from './componentes/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/secciones/home/home.component';
import { LoginComponent } from './componentes/secciones/login/login.component';
import { IncidenciasComponent } from './componentes/secciones/incidencias/incidencias.component';
import { NewIncComponent } from './componentes/secciones/incidencias/new-inc/new-inc.component';
import { ListIncComponent } from './componentes/secciones/incidencias/list-inc/list-inc.component';

//importamos las rutas
import { APP_ROUTING} from './app.routes';

//importamos los servicios
import {LoginService} from './servicios/login.service';
import { UsuariosComponent } from './componentes/secciones/usuarios/usuarios.component';
import { LogeadoComponent } from './componentes/secciones/login/logeado/logeado.component';
import { TipoComponent } from './componentes/secciones/incidencias/tipo/tipo.component';
import { NewtipoPuntosComponent } from './componentes/secciones/incidencias/tipo/newtipo-puntos/newtipo-puntos.component';
import { ListtipoPuntosComponent } from './componentes/secciones/incidencias/tipo/listtipo-puntos/listtipo-puntos.component';
import { ShowIncComponent } from './componentes/secciones/incidencias/show-inc/show-inc.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    IncidenciasComponent,
    NewIncComponent,
    ListIncComponent,
    UsuariosComponent,
    LogeadoComponent,
    TipoComponent,
    NewtipoPuntosComponent,
    ListtipoPuntosComponent,
    ShowIncComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MaterialModule,
    APP_ROUTING
  ],
  exports: [
    MaterialModule
  ],
  providers: [ LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
