import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../../services/config.service';
import { ActivatedRoute } from '@angular/router';
import { IProducto, IGama, MsnApiGamas } from '../../../../interfaces/ProductosInterface';
import { ProductosService } from '../../../../services/productos.service';
import { GamasService } from '../../../../services/gamas.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  public producto: IProducto
  private codproducto: string;
  public gamas: IGama;
  constructor(private route: ActivatedRoute, 
              private prodService:ProductosService, 
              private gamasService: GamasService,
              public configService:ConfigService) { }

  async ngOnInit() {
    this.codproducto = this.route.snapshot.paramMap.get('id');
    let respuesta = await this.prodService.showProductos(this.codproducto);
    console.log(respuesta);
    if (respuesta.status == 'success'){
      this.producto = respuesta.data[0];
      console.log(this.producto);
    }
    let respuestaG = await this.gamasService.getGamas();
    console.log(respuesta);
    if (respuestaG.status == 'success'){
      this.gamas = respuestaG.data;
      console.log(this.gamas);
    }
  }
  edit(){
    console.log('producto');
    console.log(this.producto);
  }

}
