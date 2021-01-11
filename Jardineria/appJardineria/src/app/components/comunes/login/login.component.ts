import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios.service';
import { NavController } from '@ionic/angular';
import { UiServiceService } from '../../../services/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginUser = {
    email: 'jose@gmail.com',
    password: '1234'
  };

  constructor(private uService: UsuariosService,
              private navCtrl: NavController, 
              private uiService: UiServiceService) { 

  }

  async login(fLogin: NgForm){
    if (fLogin.invalid) { return; }
    // recordemos que 'peticion' es una PROMESA que tendrá valor true/false
    const peticion = await this.uService.login(this.loginUser.email, this.loginUser.password);

    if ( peticion.status == 'success' ){
      // navegar al home
      this.navCtrl.navigateRoot('home', { animated: true } );
    }else {
      // mostrar alerta al usuario que indique el error
      this.uiService.alertaInformativa('Usuario/Password no son válidos');
    }
  }

  ngOnInit() {}

}
