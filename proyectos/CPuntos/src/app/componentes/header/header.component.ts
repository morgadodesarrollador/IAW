import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private usuario;
  constructor(public _ls: LoginService,private router: Router ) {

  }
  desconectar(){
    this._ls.desconectar();
    this.router.navigate(['login']);

  }

  ngOnInit() {
    this.usuario = this._ls.getidentidad();
  }

}
