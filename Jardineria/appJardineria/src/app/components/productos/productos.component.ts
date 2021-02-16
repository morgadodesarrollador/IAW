import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGama, IProducto, MsnApiGamas } from 'src/app/interfaces/ProductosInterface';
import { GamasService } from 'src/app/services/gamas.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  public respuesta: MsnApiGamas;
  public gama: IGama;
  public idgama: string;
  public productos: IProducto[];
  public images = `${URL}/img/productos`;
   rol: string;
  // tslint:disable-next-line:no-input-rename
 // @Input('idGama') idgama: string;

  constructor(private route: ActivatedRoute,  private router: Router,
              private gService: GamasService, public uService: UsuariosService ) { 
    this.idgama = this.route.snapshot.paramMap.get('gama');
    console.log(this.idgama);
    this.router.navigate(['/filters', { outlets: { rfiltros: ['productos'] } }]);


  }

  async ngOnInit() {
    this.respuesta = await this.gService.getProductosGama(this.idgama);
    if (this.respuesta.status == 'success'){
      this.gama = this.respuesta.data;
    }

    this.uService.userStorageObservable
      .subscribe ( data => {
        this.rol = data.rol;
        console.log (this.rol );
      });
  }

}
