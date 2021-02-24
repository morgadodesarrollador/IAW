import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UsuariosService } from './usuarios.service';
import { MsnApiGamas, IGama, IProducto, MsnApiProductos } from '../interfaces/ProductosInterface';
import { Subject } from 'rxjs';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class GamasService {
  private httpOptions: any ;
  public respuesta: MsnApiProductos;
  private productosStorage = new Subject <IProducto[]>();
  public productosStorageObservable = this.productosStorage.asObservable();

  constructor(private http: HttpClient, private uService: UsuariosService) { }

  cabecera (token) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
  }

  async getProductosGama(id): Promise<MsnApiProductos>{
    console.log('Id = ', id);
    const token = await this.uService.getToken();
    const ruta = `${ URL }/api/admin/gamas/${id}/productos`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
    return new Promise ( resolve => {
      this.http.get<MsnApiProductos>(ruta, httpOptions)
        .subscribe(data => {
          this.respuesta = data;
          this.productosStorage.next(this.respuesta.data);
          resolve(this.respuesta);
        });
    });
  }
  async getGamas(): Promise<MsnApiGamas>{
    const token = await this.uService.getToken();
    const ruta = `${ URL }/api/admin/gamas`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
    return new Promise ( resolve => {
      this.http.get<MsnApiGamas>(ruta, httpOptions)
        .subscribe ( respuesta => {
          resolve( respuesta );
        })
    })
  }
}
