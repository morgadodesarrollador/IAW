import { ClientesService } from '../clientes.service';
import { Component, OnInit } from '@angular/core';
import { IPeople } from '../../../../interfaces/IPeople';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  peopleList : Array<IPeople> = [];

  constructor( private clientesService: ClientesService) { }

  ngOnInit(): void {
    let ifsocial = true;
    let ifLibros = true;
    this.clientesService.list(ifsocial)
      .subscribe( (result) => {
        this.peopleList = result;
      })
  }

}
