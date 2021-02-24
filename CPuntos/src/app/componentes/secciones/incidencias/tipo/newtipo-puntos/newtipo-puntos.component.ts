import { Component, OnInit } from '@angular/core';
import {TipoIncidenciaPuntosInterface} from '../../../../../models/IncidenciasPuntos/TipoIncidenciaPuntosInterface';

@Component({
  selector: 'app-newtipo-puntos',
  templateUrl: './newtipo-puntos.component.html',
  styleUrls: ['./newtipo-puntos.component.css']
})
export class NewtipoPuntosComponent implements OnInit {
  private TipoIncidencia : TipoIncidenciaPuntosInterface = {
    codigoInc: '',
    descripcion: '',
    actuacion: '',
    puntos: 0
  };
  constructor() { }

  ngOnInit() {
  }

}
