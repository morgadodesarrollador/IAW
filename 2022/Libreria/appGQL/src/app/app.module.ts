import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './@graphql/modules/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './@secciones/estructura/header/header.module';
import { MainModule } from './@secciones/estructura/main/main.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GraphQLModule,
    HeaderModule,
    MainModule,

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
