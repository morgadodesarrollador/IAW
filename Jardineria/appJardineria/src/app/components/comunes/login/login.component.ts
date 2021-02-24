import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios.service';
import { NavController } from '@ionic/angular';
import { UiServiceService } from '../../../services/ui-service.service';
import { ILogin } from '../../../interfaces/UsuarioInterface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginUser: ILogin = {
    email: 'antonio@gmail.com',
    password: '1234'
  };

  constructor(private uService: UsuariosService,
              private navCtrl: NavController, 
              private router: Router,
              private route: ActivatedRoute,
              private uiService: UiServiceService) { 

  }

  async login(fLogin: NgForm){
    console.log(this.loginUser);
    if (fLogin.invalid) { return; }
    // recordemos que 'peticion' es una PROMESA 
    const peticion = await this.uService.login(this.loginUser);

    if ( peticion.status == 'success' ){
      // navegar al home
     
      this.router.navigate(['/', { outlets: {
          primary: ['tabs', 'gamas'],
     //     secondary: ['filters', 'gamas']
      } }], { relativeTo: this.route.parent } );


//      this.navCtrl.navigateRoot('tabs', { animated: true } );
  //    this.router.navigate(['/filters', { outlets: { secondary: [ 'gamas'] } }]);

      

    }else {
      this.uiService.alertaInformativa('Usuario/Password no son válidos');
    }
    
  }

  ngOnInit() {}

}
