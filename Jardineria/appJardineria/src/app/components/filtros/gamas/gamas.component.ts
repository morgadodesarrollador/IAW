import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamas',
  templateUrl: './gamas.component.html',
  styleUrls: ['./gamas.component.scss'],
})
export class GamasComponent implements OnInit {
  public categorias = [
    { val: 'Todas', isChecked: true },
    { val: 'Herramientas', isChecked: false },
    { val: 'Herbaceas', isChecked: false }
  ];
  constructor() { 
    
  }

  ngOnInit() {}

}
