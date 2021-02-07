import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamasService } from 'src/app/services/gamas.service';

@Component({
  selector: 'app-gamas',
  templateUrl: './gamas.component.html',
  styleUrls: ['./gamas.component.scss'],
})
export class GamasComponent implements OnInit {
  gamas: any;
  gama: any;
  constructor(private gamasService: GamasService, private route: ActivatedRoute ) {
    this.gama = this.route.snapshot.paramMap.get('id');
    console.log (this.gama);
    console.log(this.gamasService.getGamas());
   }

  ngOnInit() {
    this.gama = this.route.snapshot.paramMap.get('id');
    console.log (this.gama);
    console.log(this.gamasService.getGamas());
  }
  
  async ionViewWillEnter (){
    
    let respuesta = await this.gamasService.getGamas();
    this.gamas = respuesta['gamas'];
    console.log(this.gamas);
  }

  productos (gama){
    console.log (gama);
  }


}
