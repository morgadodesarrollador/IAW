import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/IBook';
import { LibrosService } from './libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  booklist: Array<IBook> = [];
  constructor() { }

  ngOnInit(): void {

  }

}
