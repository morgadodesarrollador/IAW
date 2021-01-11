import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GamasService } from './services/gamas.service';
import { UsuariosService } from './services/usuarios.service';
import { Router } from '@angular/router';
import { IUsuario } from './interfaces/UsuarioInterface';


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
    private router: Router
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

  ngOnInit(): void {
    this.uService.userStorageObservable
      .subscribe ( data => {
        this.usuario = data;
        console.log (this.usuario );
      })
    
  }

  async getUser() {
      this.usuario = await this.uService.getUsuarioStorage();
      console.log (this.usuario);
  }
}
