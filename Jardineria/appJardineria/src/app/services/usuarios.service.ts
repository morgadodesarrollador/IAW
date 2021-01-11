import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { IUsuario, MsnApiLogin, MsnApiRegister } from '../interfaces/UsuarioInterface';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json',
    //  'Content-Type': 'multipart/form-data'
    })
  };
  token: string = null;
  usuario: IUsuario;
  constructor(private http: HttpClient, private storage: Storage) { }

  public getUsuarios(){
    return this.http.get('http://jardineria.test/api/admin/usuarios');
  }

  login (email: string, password: string): Promise<MsnApiLogin>{
    const data = { email, password };
    const ruta = `${ URL }/api/login`;
    console.log (ruta, data);
    return new Promise( resolve => {
      this.http.post<MsnApiLogin>(ruta, data)
        .subscribe( respuesta => {
          //hemos de hacer el TIPADO con INTERFACES
          if (respuesta.status == 'success'){
            this.saveToken(respuesta.token.access_token);
            this.saveUser(respuesta.user);
            //si llega aquí la promesa devuelve true indicando que todo ha sido OK
            resolve(respuesta);
          } else {
            this.token = null;
            this.storage.clear();
            //la promesa devuelve false indicando que ha habido un ERROR
            resolve (respuesta);
          }
      })
    })
    
  }
  
  //devuelve una promesa (async)
  async saveToken(token: string){ 
    this.token = token;
    //espero (await) a que se guarde el token en el storage antes de continuar
    await this.storage.set('token', token); 
  }

  async saveUser(user: IUsuario){ 
    this.usuario = user;
    //espero (await) a que se guarde el token en el storage antes de continuar
    await this.storage.set('usuario', user); 
  }
  

  registro(usuario: IUsuario): Promise<MsnApiRegister>{

    const ruta = `${ URL }/api/register`;
    const data = usuario;
    console.log (ruta, data);

    return new Promise ( resolve => {
      this.http.post<MsnApiRegister>(ruta, data, this.httpOptions)
        .subscribe (respuesta => {
          if (respuesta.status == 'success'){
            resolve(respuesta)
          }else{
            this.token = null;
            this.storage.clear();
            resolve (respuesta);
          }
        });
    });
  }
}
