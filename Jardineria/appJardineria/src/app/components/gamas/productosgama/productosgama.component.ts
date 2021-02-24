import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamasService } from '../../../services/gamas.service';
import { IProducto, IGama, MsnApiGamas } from '../../../interfaces/ProductosInterface';
import { environment } from '../../../../environments/environment.prod';
import { IRuta } from '../../../interfaces/BreadInterfaces';

const URL = environment.url;

@Component({
  selector: 'app-productosgama',
  templateUrl: './productosgama.component.html',
  styleUrls: ['./productosgama.component.scss'],
})
export class ProductosgamaComponent implements OnInit {

  public respuesta: MsnApiGamas;
  public idgama: string;
  public gama: IGama;
  public productos: IProducto[];
  public images = `${URL}/img/productos`;

  public bread: IRuta[] = [
    { nombre: 'Gamas', clase: 'active', link: [ '/gamas'] }
  ];

  constructor(private route: ActivatedRoute, 
              private gService: GamasService) { }

  async ngOnInit() {
    this.idgama = this.route.snapshot.paramMap.get('id');
    this.bread.push({ nombre: this.idgama, clase: '', link: [] });

    /*this.respuesta = await this.gService.getProductosGama(this.idgama);
    if (this.respuesta.status == 'success'){
      this.gama = this.respuesta.data;
    }*/
  }

}
