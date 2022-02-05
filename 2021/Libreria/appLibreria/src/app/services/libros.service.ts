import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ILibro } from '../interfaces/ILibro';
const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor( private http: HttpClient ) { }


  getLibros(){
    const ruta = `${ URL }/admin/libros`;
    return this.http.get<ILibro[]>(ruta);

  }
}
