import { Component, OnInit } from '@angular/core';
import { GamasService } from '../../../services/gamas.service';
import { IGama } from '../../../interfaces/ProductosInterface';

@Component({
  selector: 'app-gamas',
  templateUrl: './gamas.component.html',
  styleUrls: ['./gamas.component.scss'],
})
export class GamasComponent implements OnInit {
  public gamas: IGama;
  
  constructor(private gamasService: GamasService) { 
    
  }
  async ionViewWillEnter(){
    
  }
  async ngOnInit() {
    
  }

  

}
