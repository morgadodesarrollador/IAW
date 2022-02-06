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
    authors: ["juan", "isabel"]
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      id: [this.book.id],
      title: [ this.book.title ],
      isbn: [ this.book.isbn ],
      pageCount: [ this.book.pageCount]
    })
  }
  onSubmit() {
    console.log(this.bookForm.value);
    // Guardar cambios del producto usando un Service(productService)
  }

}
