import { Component, OnInit } from '@angular/core';
import { IBook } from '../../../../interfaces/IBook';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  booklist: Array<IBook> = [];
  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.librosService.list(true)
      .subscribe( (result) => {
        console.log(result);
        this.booklist = result;
      })
  }
  

  detalle(id:string){
    console.log(id);

  }

}
