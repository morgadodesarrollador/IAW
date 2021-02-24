import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { CONEXION } from './CONEXION';
import { LoginInterface } from '../models/LoginInterface';

@Injectable({
  providedIn: 'root',

})

export class LoginService {
  public userJson: string;
  public params: string;
  public headers: any;
  public urlBase: string = `${CONEXION.dominio}${CONEXION.ruta}`;
 // public urlBase: string = `${CONEXION.ruta}`;
  public urlAPI: string;
  public identidad: LoginInterface;
  public token;
  public tipo;
  constructor( private _http: HttpClient) { }

  getTipo(){
    let tipo = localStorage.getItem('tipo');
    if (tipo != "undefined") {
      this.tipo = tipo;
    } else {
      this.tipo = null;
    }
    return tipo;
  }
  getToken(){
    let token = localStorage.getItem('token');
    if (token != "undefined") {
      this.token = token;
    } else {
      this.token = null;
    }
    return token;
  }
  getidentidad(): LoginInterface{
    let identidad = JSON.parse(localStorage.getItem('identidad'));
    if (identidad != "undefined") {
      this.identidad = identidad;
    } else {
      this.identidad = null;
    }
    return this.identidad;
  }

  login(usuario: any): Observable<LoginInterface> {

    /* usuario es un objeto JS que proviene del componente */
    console.log('Haciendo login desde el Servicio');
    console.log(this.urlBase);
    this.userJson = JSON.stringify(usuario);
    this.params = 'data=' + this.userJson;

    console.log(this.params);
    this.headers = new HttpHeaders()
      .set( 'Content-Type', 'application/x-www-form-urlencoded');

    this.urlAPI = this.urlBase + 'login';
    return this._http.post<LoginInterface>(this.urlAPI, this.params, {headers: this.headers});
     // .map(res => res.json());

  }

  desconectar(){
    localStorage.removeItem('token');
    localStorage.removeItem('tipo');
    localStorage.removeItem('identidad');
    this.identidad = null;
    this.token = null;
    this.tipo = null;

  }









}
