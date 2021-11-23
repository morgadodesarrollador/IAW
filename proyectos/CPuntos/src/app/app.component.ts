import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación de Incidencias TIC';
  nombre = 'María Sánchez';
  numero = 10;
  constructor(){
    setInterval(() => this.numero = Math.round(10*Math.random()), 100);
  }
}
