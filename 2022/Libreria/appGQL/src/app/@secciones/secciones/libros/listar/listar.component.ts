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
    this.librosService.list()
      .subscribe(result => {
        this.booklist = result;
      })
  }

}
