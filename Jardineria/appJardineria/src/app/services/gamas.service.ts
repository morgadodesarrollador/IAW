import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UsuariosService } from './usuarios.service';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class GamasService {

  constructor(private http: HttpClient, private uService: UsuariosService) { }

  async getProductosGama(id):Promise<any>{
    const token = await this.uService.getToken();
    const ruta = `${ URL }/api/admin/gamas`;
  }
  async getGamas(): Promise<any>{
    const token = await this.uService.getToken();
    const ruta = `${ URL }/api/admin/gamas`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
    return new Promise ( resolve => {
      this.http.get<any>(ruta, httpOptions)
        .subscribe ( respuesta => {
          resolve( respuesta );
        })
    })
  }
}
