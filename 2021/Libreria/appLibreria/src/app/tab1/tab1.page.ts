import { Component } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { ILibro } from '../interfaces/ILibro';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 libros: ILibro[];
  constructor(private librosService: LibrosService) {
    this.librosService.getLibros()
    .subscribe ( data => {
      this.libros = data;
      data.forEach ( libro => {
        console.log (libro['nombrelibro']);
        
      })

   //   this.libros = data;
    });
  }

}
