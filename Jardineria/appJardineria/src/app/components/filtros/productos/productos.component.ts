import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  public categorias = [
    { val: 'Todas', isChecked: true },
    { val: 'Herramientas', isChecked: false },
    { val: 'Herbaceas', isChecked: false }
  ];
  constructor() {
    console.log(this.categorias);
   }

  ngOnInit() {}

}
