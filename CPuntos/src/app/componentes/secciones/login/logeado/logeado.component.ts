import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../../servicios/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logeado',
  templateUrl: './logeado.component.html',
  styleUrls: ['./logeado.component.css']
})
export class LogeadoComponent implements OnInit {
  private usuario;

  constructor(public _ls: LoginService,private router: Router ) {

  }
  desconectar(){
    this._ls.desconectar();

    this.router.navigate(
      [{ outlets: { 'sidenav': [ 'login' ] }}]);

  }

  ngOnInit() {
    this.usuario = this._ls.getidentidad();
  }


}
