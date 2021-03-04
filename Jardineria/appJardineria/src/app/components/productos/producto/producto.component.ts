import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamasService } from '../../../services/gamas.service';
import { ProductosService } from '../../../services/productos.service';
import { IProducto } from '../../../interfaces/ProductosInterface';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  public read: boolean = true;
  public codproducto: string;
  public accion: string;
  public producto: IProducto;
  constructor(private route: ActivatedRoute, private gServices: GamasService,
              private prodService:ProductosService,
              public configService: ConfigService) { }

  public editar(){
    this.read = !this.read;
    if (this.read) {
      this.accion = 'readonly';
    }else{
      this.accion = null;
    }

    console.log(this.read, this.accion);
  }
  async ngOnInit() {
    this.codproducto = this.route.snapshot.paramMap.get('id');
    this.accion = this.route.snapshot.paramMap.get('accion');

    console.log(this.codproducto);
    let respuesta = await this.prodService.showProductos(this.codproducto);
    console.log(respuesta);
    if (respuesta.status == 'success'){
      this.producto = respuesta.data[0];
      console.log(this.producto);
    }
  }

}
