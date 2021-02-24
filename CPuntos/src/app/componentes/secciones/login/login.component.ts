import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { LoginService} from '../../../servicios/login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  public pantalla = 'login';
  public user: any = {
    codigo : '',
    pass : '',
    getHash: 'true',
    app: ''
  };
  public identidad;
  public token;
  constructor(private _ls: LoginService, private router: Router) {
  }

  public enviar() {
    console.log('enviar datos a la API');

    this._ls.login(this.user)
      .subscribe(
        data => {
          console.log(data);
          this.identidad = data.user;
          this.token = data.token;
          if (this.identidad.length <= 1){
            console.log('error en los datos');
          } else {
            localStorage.setItem('identidad',JSON.stringify(this.identidad));
            localStorage.setItem('token', this.token);
            localStorage.setItem('tipo', data.tipo);
      //      this.router.navigate(['home']);
            this.router.navigate(
              [{ outlets: { 'sidenav': [ 'home' ] }}]);

          }

        });
  }
}
