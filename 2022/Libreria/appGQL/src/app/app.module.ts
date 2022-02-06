import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './@graphql/modules/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './@secciones/estructura/header/header.module';
import { MainModule } from './@secciones/estructura/main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GraphQLModule,
    HeaderModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
