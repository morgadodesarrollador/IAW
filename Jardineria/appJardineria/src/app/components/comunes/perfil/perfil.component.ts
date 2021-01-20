import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/interfaces/UsuarioInterface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  usuario: IUsuario;
  constructor(private uService: UsuariosService) { }

  async ngOnInit() {
    //this.usuario = await this.uService.getUsuarioStorage();
   // console.log (this.usuario);

    this.uService.userStorageObservable
      .subscribe ( data => {
        this.usuario = data;
        console.log (this.usuario );
      })
  }
 async ionViewWillEnter (){
    console.log('entra');
    /*
    this.uService.userStorageObservable
      .subscribe ( data => {
        this.usuario = data;
        console.log (this.usuario );
      })
  */
    this.usuario = await this.uService.getUsuarioStorage();
    console.log(this.usuario);
  }

}
