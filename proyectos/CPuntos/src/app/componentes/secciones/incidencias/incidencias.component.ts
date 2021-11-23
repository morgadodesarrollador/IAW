import { Component, OnInit} from '@angular/core';
import { LoginService } from '../../../servicios/login.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit  {

  constructor(private _ls: LoginService) {
    console.log('kk');
  }

  ngOnInit(){
    console.log('kk');
  }


}

