import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamasService } from '../../../services/gamas.service';
import { IProducto, IGama } from '../../../interfaces/ProductosInterface';
import { environment } from '../../../../environments/environment.prod';

const URL = environment.url;

@Component({
  selector: 'app-productosgama',
  templateUrl: './productosgama.component.html',
  styleUrls: ['./productosgama.component.scss'],
})
export class ProductosgamaComponent implements OnInit {

  public idgama: string;
  public gama: IGama;
  public productos: IProducto[];
  public images = `${URL}/img/productos`;

  public bread: [
    {
      'nombre': 'Gamas', 'clase': 'active', 'link': [ '/', 'gamas']
    }
  ];
  constructor(private route: ActivatedRoute, 
              private gService: GamasService) { }

  async ngOnInit() {
    this.idgama = this.route.snapshot.paramMap.get('id');
    let respuesta = await this.gService.getProductosGama(this.idgama);
    if (respuesta.status == 'success'){
      this.gama = respuesta.data;
    }
  }

}
