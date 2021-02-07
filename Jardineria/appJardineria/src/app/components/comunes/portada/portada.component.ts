import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss'],
})
export class PortadaComponent implements OnInit {
  
  constructor(private uService: UsuariosService) { }

  login(){
    console.log('entrar...');
  }
  ngOnInit() {
    this.uService.userStorageObservable
      .subscribe ( data => {
        //this.usuario = data;
        console.log (data );
      })
  }

}
