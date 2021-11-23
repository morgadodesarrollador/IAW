import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { CONEXION } from './CONEXION';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  public userJson: string;
  public params: string;
  public headers: any;
  public urlBase: string = `${CONEXION.dominio}${CONEXION.ruta}`;
 // public urlBase: string = `${CONEXION.ruta}`;

  public urlAPI: string;
  public identidad;
  private token;
  constructor(private _http: HttpClient) { }

  getGrupos(token): Observable<any> {
    this.params = `token=${token}`;
    console.log(this.params);
    this.headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    this.urlAPI = this.urlBase + 'alumnos/grupos';
    console.log(this.urlAPI);
    return this._http.post<any>(this.urlAPI, this.params, {headers: this.headers});
  }
  getAlumnosGrupo(token, grupo): Observable<any>{
    this.params = `token=${token}&grupo=${grupo}`;
    console.log(this.params);
    this.headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    this.urlAPI = this.urlBase + 'alumnos/grupo';
    console.log(this.urlAPI);
    return this._http.post<any>(this.urlAPI, this.params, {headers: this.headers});
  }

}
