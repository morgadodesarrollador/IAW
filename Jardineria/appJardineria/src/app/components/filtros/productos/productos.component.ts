import { Component, OnInit } from '@angular/core';
import { GamasService } from '../../../services/gamas.service';
import { IGama } from '../../../interfaces/ProductosInterface';
import { ProductosService } from '../../../services/filters/productos.service';
import { Platform } from '@ionic/angular';
import { IFiltrosProdcutos } from '../../../interfaces/FiltrosInterfaces';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
 
  public gamas: IGama;
  public items: string[] = [];
  public precio = 50;
  public rangeVal: string;
  public IFiltros: IFiltrosProdcutos = {
   // precio: { min: 0, max: 0 },
    precios: [],
    gamas: []
  };
  constructor(public platform: Platform,
              private gamasService: GamasService, private filterPService: ProductosService) {
    this.platform.ready().then( () => {
      this.rangeVal = "50";
    });

  }
  async ionViewWillEnter(){
    let respuesta = await this.gamasService.getGamas();
    this.gamas = respuesta.data;
    console.log (respuesta);
  }
  changeRange(precio) {
    console.log(precio.detail.value.lower,':', precio.detail.value.upper);
   // console.log(this.rangeVal);
   //this.IFiltros.precio.max = precio.detail.value.upper;
   //this.IFiltros.precio.min = precio.detail.value.lower;
   this.IFiltros.precios[0] = precio.detail.value.lower;
   this.IFiltros.precios[1] = precio.detail.value.upper;

  }
  async ngOnInit() {
    let respuesta = await this.gamasService.getGamas();
    this.gamas = respuesta.data;
    console.log (respuesta);
  }

  async selectgama(gama, pos){
    console.log(gama, pos);
    //
    let i = this.items.indexOf(gama);
    if ( i == -1 ){
      this.items.push(gama);
    }else {
      this.items.splice( i, 1 );
    }
    console.log(this.items);
   // let respuesta = await this.gamasService.getProductosGama(gama);
  }

  async aplicar(){
     this.IFiltros.gamas = this.items;

      console.log (this.IFiltros);
      let respuesta = await this.filterPService.getFilter(this.IFiltros);
     //  console.log(respuesta);
       this.items = [];
  }
}
