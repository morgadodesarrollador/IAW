import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginService} from '../../../servicios/login.service';
import { Router } from '@angular/router';
import {AlumnosService} from '../../../servicios/alumnos.service';
import { IncidenciaInterface } from '../../../models/IncidenciaInterface';
import {IncidenciasService} from '../../../servicios/incidencias.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
 // private mostrar: boolean;
  private grupos: any[] = [];
  private alumnos: any[];
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
  private exitoG:boolean = false;
  private exitoA:boolean = false;

  @Output() public mostrar = new EventEmitter<any>();
  public valor;
  constructor(private _ls:LoginService, private _ias:IncidenciasService,
              private _as:AlumnosService,
              private router: Router) {
    this.cargarGrupos();
  }
  private cargarAlumnos(value){
    console.log(value);
    console.log('er');

    this.selectGrupo = value;
    let token = this._ls.getToken();
    this._as.getAlumnosGrupo(token, value)
      .subscribe(response => {
        console.log(response);
        this.exitoG = false;
        this.exitoA = true;

        this.alumnos = response.data;

      });
  }
  private cargarGrupos($event) {
    if (this.grupos.length == 0) {
      let token = this._ls.getToken();
      this._as.getGrupos(token)
        .subscribe(
          response => {
            console.log(response);
            this.exitoG = true;
            this.exitoA = false;
            this.grupos = response.data;
          });
    }
  }
  public selectAlumno(valor) {//devuelve le nid del usuario
    this.incidencia.nombre = valor;
    this.mostrar.emit({ nid : valor });

  }

  ngOnInit() {
  }

}
