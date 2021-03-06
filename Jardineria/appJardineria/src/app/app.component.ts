import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GamasService } from './services/gamas.service';
import { UsuariosService } from './services/usuarios.service';
import { Router } from '@angular/router';
import { IUsuario } from './interfaces/UsuarioInterface';
import { ConfigService } from './services/config.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
  gamas: any;
  usuario: IUsuario;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private gamasService: GamasService,
    private uService: UsuariosService,
    private navCtrl: NavController,
    private router: Router,
    private configService: ConfigService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  mostrarProductos(g){
    console.log(g);
    this.router.navigate(["/gamas",{ outlets: {'primary': ["productos", g] }} ]).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });

   // this.navCtrl.navigateRoot ('/gamas/Frutales', { animated: true });
  //  this.navCtrl.setDirection('root');
   // this.router.navigate(['/gamas/Frutales']);
  //   this.router.navigateByUrl('/gamas/Frutales');

  }

  async ionViewWillEnter (){
    console.log('datos de usuario');
  //  this.usuario = await this.uService.getUsuarioStorage();
    this.uService.userStorageObservable
      .subscribe ( data => {
        this.usuario = data;
        console.log (this.usuario );
      })
    
  }
  async ngOnInit() {

    this.uService.userStorageObservable
      .subscribe ( data => {
        this.usuario = data;
        console.log (this.usuario );
      });
    }
  

  async getUser() {
     // this.usuario = await this.uService.getUsuarioStorage();
      console.log (this.usuario);
  }
}
