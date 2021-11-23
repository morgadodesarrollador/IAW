import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../../servicios/login.service';
import {IncidenciasService} from '../../../../servicios/incidencias.service';
import { Router, ActivatedRoute  } from '@angular/router';
import {IncidenciaInterface} from '../../../../models/IncidenciaInterface';
//import {NgSelectModule, NgOption} from '@ng-select/ng-select';
@Component({
  selector: 'app-new-inc',
  templateUrl: './new-inc.component.html',
  styleUrls: ['./new-inc.component.css']
})
export class NewIncComponent implements OnInit {
  private grupos: any[] = [];
  private alumnos: any[];
  private tipos: any[];

  private selectGrupo:string;
  private incidencia : IncidenciaInterface = {
    nidEscolar: '',
    nombre: '',
    fecha: '',
    puntos: 0,
    actuacion: '',
    tipo: '',
    descripcion: ''
  };

  ngOnInit() {

  }
  constructor(private _ias:IncidenciasService,
              private _ls:LoginService,
              private router: Router,
              private ruta: ActivatedRoute) {
    let token = this._ls.getToken();
    this._ias.getTiposIncidencias(token)
      .subscribe(
        response => {
          console.log(response);
          this.tipos = response.datos;
        }
      )

  }
  showIncidencias($event){
    console.log($event);
    this.incidencia.items = $event;

  }
  private getDatosIncidencia(event){
    let pos = event.target.value;
    this.incidencia.puntos = this.tipos[pos].puntos;
    this.incidencia.descripcion = this.tipos[pos].descripcion;
    this.incidencia.actuacion = this.tipos[pos].actuacion;
    this.incidencia.tipo = this.tipos[pos].codigoinc;


  }
  //se subscribe al EventeMITTER
  showMostrar(event) {
    console.log('KAJFFJKASD');
    console.log(event.nombre);
    this.incidencia.nidEscolar = event.nid;
  }
  public enviar(){
    let token = this._ls.getToken();
    console.log(this.incidencia);
  /*  this._ias.newIncidencia(this.incidencia, token)
      .subscribe(
        response => {
          console.log(response);
          this.router
            .navigate([
                      '/incidencias',
                      { outlets: { 'sidenav': ['Listincidencia',
                                    this.incidencia.nidEscolar]}}]) ;
        }
      )
    ;*/
  }


}
