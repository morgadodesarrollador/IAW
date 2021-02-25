import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamasService } from '../../../services/gamas.service';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  public codproducto: string;
  public accion: string;
  constructor(private route: ActivatedRoute, private gServices: GamasService,
              private prodService:ProductosService) { }

  async ngOnInit() {
    this.codproducto = this.route.snapshot.paramMap.get('id');
    this.accion = this.route.snapshot.paramMap.get('accion');

    console.log(this.codproducto);
    let respuesta = await this.prodService.showProductos(this.codproducto);
    console.log (respuesta);
  }

}
