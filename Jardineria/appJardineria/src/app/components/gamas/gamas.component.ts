import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamasService } from 'src/app/services/gamas.service';
import { IGama } from '../../interfaces/ProductosInterface';
import { environment } from '../../../environments/environment.prod';
const URL = environment.url;

@Component({
  selector: 'app-gamas',
  templateUrl: './gamas.component.html',
  styleUrls: ['./gamas.component.scss'],
})
export class GamasComponent implements OnInit {
  gamas: IGama[];
  gama: any;
  public images = `${URL}/img/gamas`;
  constructor(private gamasService: GamasService, private route: ActivatedRoute ) {
    this.gama = this.route.snapshot.paramMap.get('id');
    console.log (this.gama);
    console.log(this.gamasService.getGamas());
   }

  async ngOnInit() {
    let respuesta = await this.gamasService.getGamas();
    if (respuesta.status == 'success'){
      this.gamas = respuesta.data;
      console.log(this.gamas);
    }
  }
  
  async ionViewWillEnter (){
    let respuesta = await this.gamasService.getGamas();
    if (respuesta.status == 'success'){
      this.gamas = respuesta.data;
    }
  }

  productos (gama){
    console.log (gama);
  }


}
