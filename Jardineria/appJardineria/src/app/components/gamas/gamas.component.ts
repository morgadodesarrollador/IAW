import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamasService } from 'src/app/services/gamas.service';

@Component({
  selector: 'app-gamas',
  templateUrl: './gamas.component.html',
  styleUrls: ['./gamas.component.scss'],
})
export class GamasComponent implements OnInit {
  gama: any; 
  constructor(private gamasService: GamasService, private route: ActivatedRoute ) {
    console.log('gamas');
    this.gamasService.getGamas()
      .subscribe( data => {
        console.log(data);
      })
   }

  ngOnInit() {
    this.gama = this.route.snapshot.paramMap.get('id');
    console.log(this.gama);
  }

}
