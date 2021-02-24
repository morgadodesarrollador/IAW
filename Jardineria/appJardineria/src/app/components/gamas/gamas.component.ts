import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamasService } from 'src/app/services/gamas.service';
import { IGama } from '../../interfaces/ProductosInterface';
import { environment } from '../../../environments/environment.prod';
import { IRuta } from 'src/app/interfaces/BreadInterfaces';
import { UsuariosService } from '../../services/usuarios.service';
import { NavController } from '@ionic/angular';
const URL = environment.url;

@Component({
  selector: 'app-gamas',
  templateUrl: './gamas.component.html',
  styleUrls: ['./gamas.component.scss'],
})
export class GamasComponent implements OnInit {
  gamas: IGama;
  gama: any;
  rol: string;
  tipo: string;
  isActiveConfig: boolean = false;
  isClickConfig: boolean = false;
  isAdmin: boolean = false;

  public images = `${URL}/img/gamas`;
  public bread: IRuta[] = [
    { nombre: 'Gamas', clase: 'active', link: [ '/gamas'] }
  ];
  constructor(public uService: UsuariosService,  private gamasService: GamasService,
                    private navCtrl: NavController, 
                    private router: Router,
                    private route: ActivatedRoute ) {
    this.gama = this.route.snapshot.paramMap.get('id');
    console.log (this.gama);
    console.log(this.gamasService.getGamas());
   // this.router.navigate(['/filters', { outlets: { secondary: ['gamas'] } }]);

   }

  async ngOnInit() {
  
    let respuesta = await this.gamasService.getGamas();
//    this.rol = await this.uService.getRol();
    if (respuesta.status == 'success'){
      this.gamas = respuesta.data;
      console.log(this.gamas);
    }
    this.uService.userStorageObservable
      .subscribe ( data => {
        this.rol = data.rol;
        if (this.rol == 'administrador'){
          this.isAdmin = true;
          this.tipo = 'settings-outline';
        }else
          this.isAdmin = false;
        this.isActiveConfig = !this.isActiveConfig;
        console.log (this.rol );
      });
  }
  pulsar(){
    this.isClickConfig = !this.isClickConfig;
    if (this.isClickConfig)
      this.tipo = "settings"
    else  
      this.tipo = "settings-outline";
  }
  async ionViewWillEnter (){
    // this.router.navigate(['/filters', { outlets: { secondary: ['gamas'] } }]);

    console.log('filtros');
    let respuesta = await this.gamasService.getGamas();
    if (respuesta.status == 'success'){
      this.gamas = respuesta.data;
    }
  }

  productos (gama){
    console.log (gama);
  }


}
