import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  isClickConfig: boolean = false;
  iconFing = ['settings', 'settings-outline'];
  isAdmin: boolean = false;
  iconEdit: string = 'settings-outline';
  constructor(private uService: UsuariosService) { }

  public edicion(){
    this.isClickConfig = !this.isClickConfig;
    if (this.isClickConfig){
      this.iconEdit = this.iconFing[0];
    }else{
      this.iconEdit = this.iconFing[1];
    }
  }
  
}