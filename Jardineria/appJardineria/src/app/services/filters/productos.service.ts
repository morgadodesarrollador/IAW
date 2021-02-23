import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IProducto, MsnApiProductos } from '../../interfaces/ProductosInterface';
import { Subject } from 'rxjs';
import { IFiltrosProdcutos } from '../../interfaces/FiltrosInterfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductosService { 
  respuesta : MsnApiProductos;
  private productosStorage = new Subject <IProducto[]>();
  public productosStorageObservable = this.productosStorage.asObservable();


  constructor(private http: HttpClient) { }

  getFilter(filtros: IFiltrosProdcutos): Promise<MsnApiProductos>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json'
      })
    };
    let data = JSON.stringify(filtros) ;
    const ruta = `${ URL }/api/productos/filters`;
    console.log(data);
    return new Promise (resolve => {
   //   this.http.post<MsnApiProductos>(ruta, {data})
      this.http.post<MsnApiProductos>( ruta, {data} )
        .subscribe(datos => {
          console.log(datos);
          this.productosStorage.next(datos.data);
           this.respuesta = datos;
            resolve(this.respuesta);
      });
    });
  }

}
