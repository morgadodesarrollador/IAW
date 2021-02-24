import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  isClickConfig: boolean = false;
  iconFing = ['settings', 'settings-outline'];
  isAdmin: boolean = false;
  constructor(private uService: UsuariosService) {
    this.config();
  }

  public config() {
    this.uService.userStorageObservable
      .subscribe ( data => {
        if (data.rol == 'administrador'){
          this.isAdmin = true;
        }
      });
  }
}