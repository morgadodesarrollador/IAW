import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../servicios/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public apps = {
    'cp': 'Cartnet por Puntos',
    'tic': 'Coordinación TIC'
  };


  constructor(private _ls: LoginService,
              private router: Router, private ruta: ActivatedRoute) {

  }

  accederPTOS(){
    let token = this._ls.getToken();
    console.log('MainMenu');
  /*  this.router
      .navigate(
        ['/incidencias',
                  { outlets: { 'sidenav': [ 'new' ]
        }}]);
  */


    this.router.navigate(
      [{ outlets: { 'mainmenu': [ 'incidencias' ],
                              'sidenav': [ 'incidencias', 'new']
        }}], { relativeTo: this.ruta.root});
    return false;

  }

  accederTIC(){

  }






}
