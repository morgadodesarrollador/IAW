import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss'],
})
export class PortadaComponent implements OnInit {
  
  constructor() { }

  login(){
    console.log('entrar...');
  }
  ngOnInit() {}

}
