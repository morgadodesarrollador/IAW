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
export class ProductosService {
  private httpOptions: any ;
  public respuesta: MsnApiProductos;

  constructor(private http: HttpClient, private uService: UsuariosService) { }

  async showProductos(id): Promise<MsnApiProductos>{
    console.log('Id = ', id);
    const token = await this.uService.getToken();
    const ruta = `${ URL }/api/admin/productos/${id}`;
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
          resolve(this.respuesta);
        });
    });
  }
}
