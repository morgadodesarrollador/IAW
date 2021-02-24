import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { CONEXION } from './CONEXION';
import {map} from 'rxjs/operators';
import { IncidenciaInterface } from '../models/IncidenciaInterface';
import {LoginInterface} from '../models/LoginInterface';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {
  public userJson: string;
  public params: string;
  public headers: any;
  public urlBase: string = `${CONEXION.dominio}${CONEXION.ruta}`;
  //public urlBase: string = `${CONEXION.ruta}`;


  public urlAPI: string;
  public identidad;
  private token;
  constructor( private _http: HttpClient) { }

  public  getTiposIncidencias(tk) {
    this.params = `token=${tk}`
    this.headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    this.urlAPI = this.urlBase + 'incidencias/tipo';
    console.log(this.urlAPI);
    return this._http.post<any>(this.urlAPI, this.params, {headers: this.headers});
  }

  public getIncidencias(tk,nidEscolar): Observable<any> {
    if (nidEscolar == '')
      this.params = `token=${tk}`
    else
      this.params = `token=${tk}&nidEscolar=${nidEscolar}`;
    console.log(this.params);
    this.headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    this.urlAPI = this.urlBase + 'incidencias/listar';
    console.log(this.urlAPI);
    return this._http.post<any>(this.urlAPI, this.params, {headers: this.headers});
  }

  public newIncidencia(inc: IncidenciaInterface, tk:string){
    let incjson = JSON.stringify(inc);
    this.params = `token=${tk}&data=${incjson}`;
    console.log(this.params);

    this. headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    this.urlAPI = this.urlBase + 'incidencias/new';
    console.log(this.urlAPI);
    return this._http.post<LoginInterface>(this.urlAPI, this.params, {headers: this.headers});

  }

}
