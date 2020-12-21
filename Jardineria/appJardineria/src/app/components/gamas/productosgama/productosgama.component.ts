import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productosgama',
  templateUrl: './productosgama.component.html',
  styleUrls: ['./productosgama.component.scss'],
})
export class ProductosgamaComponent implements OnInit {

  public gama: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.gama = this.route.snapshot.paramMap.get('id');
    console.log(this.gama);
  }

}
