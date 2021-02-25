import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamasService } from '../../../services/gamas.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  public codproducto: string;
  public accion: string;
  constructor(private route: ActivatedRoute, private gServices: GamasService ) { }

  ngOnInit() {
    this.codproducto = this.route.snapshot.paramMap.get('id');
    this.accion = this.route.snapshot.paramMap.get('accion');

    console.log(this.codproducto);
  }

}
