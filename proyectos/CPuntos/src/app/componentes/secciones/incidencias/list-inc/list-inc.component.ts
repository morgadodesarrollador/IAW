import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoginService} from '../../../../servicios/login.service';
import {IncidenciasService} from '../../../../servicios/incidencias.service';
import {AlumnosService} from '../../../../servicios/alumnos.service';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { IncidenciaInterface} from '../../../../models/IncidenciaInterface';


@Component({
  selector: 'app-list-inc',
  templateUrl: './list-inc.component.html',
  styleUrls: ['./list-inc.component.css']
})
export class ListIncComponent implements OnInit {
  private incidencias: any[];
  private nidEscolar: string = '';
  constructor(private _ls:LoginService, private _ias:IncidenciasService,
              private _as:AlumnosService,
              private route: ActivatedRoute,
              private router: Router) {

    let nid = this.route.snapshot.params['nid'];
    this.nidEscolar = nid ? nid : '';
    console.log(this.nidEscolar);

    let token = _ls.getToken();
    if (_ls.getTipo() == 'Alumno') {
      this.getIncidencias(token, '');
    }else{ //es un profe q lista las incidencias de un alumno
      if (this.nidEscolar)
        this.getIncidencias(token, this.nidEscolar);
    }
  }
  showMostrar(event) {
    console.log('KAJFFJKASD');
    console.log(event.nid);
    this.nidEscolar = event.nid;
    this.cargarIncidencias();
  }

  public cargarIncidencias(){
    let token = this._ls.getToken();
    if (this._ls.getTipo() == 'Alumno'){
      this.getIncidencias(token,'');
    } else {
      this.getIncidencias(token, this.nidEscolar);
    }

  }



  public getIncidencias(tk, nidEscolar) {
    console.log('listado de incidencias');
    if (nidEscolar == '') {
      this._ias.getIncidencias(tk,'')
        .subscribe(
          response => {
            console.log(response);
            this.incidencias = response.datos;
          }
        );
    }else{
      this._ias.getIncidencias(tk, nidEscolar)
        .subscribe(
          response => {
            console.log(response);
            this.incidencias = response.datos;
            let nid = this.route.snapshot.params['nid'];
            this.nidEscolar = nid ? nid : '';
            console.log(this.nidEscolar);
          }
        );
    }
  }
  ngOnInit() {
    console.log('jhaasdjf');
  }
}
