import { LibrosService } from './../libros.service';
import { IBook } from './../../../../interfaces/IBook';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public bookForm: FormGroup ;
  book: IBook ={
    id: "50",
    title: "Programación en Angular",
    isbn: "xxx",
    pageCount: 200,
    publishedDate: "2012",
    thumbnailUrl: "logo.png",
    shortDescription: "descripcion corta",
    longDescription: "description: larga",
    authors: ["juan", "isabel"]
  }
  constructor(private formBuilder: FormBuilder, private librosService: LibrosService) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      id: [this.book.id],
      title: [ this.book.title ],
      isbn: [ this.book.isbn ],
      pageCount: [ this.book.pageCount],
    //  authors: ["morgado", "luis", "esther"]
    })
  }
  onSubmit() {
    console.log(this.bookForm.value);
    console.log(this.book);
    this.book.id = this.bookForm.value.id;
    this.book.title = this.bookForm.value.title;
    this.book.isbn = this.bookForm.value.isbn;
    this.book.pageCount = this.bookForm.value.pageCount;

    this.librosService.new({book: this.book})
      .subscribe( (result) => {
        console.log(result);
      }, (error) => {
        console.log('error en mutation ', error)
      })
    // Guardar cambios del producto usando un Service(productService)
  }

}
