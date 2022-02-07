import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IBook } from 'src/app/interfaces/IBook';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string = '';
  constructor(private ruta: ActivatedRoute, private librosService: LibrosService) { }
  book: IBook;
  ngOnInit(): void {
   this.ruta.params
   .subscribe((params: Params) => {
      this.id = params['id'];
      this.librosService.get(this.id)
        .subscribe( (result) => {
          this.book = result.data;
          console.log(result, this.book)
        })
   })
  }

}
