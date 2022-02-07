import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/internal/operators/map';
import { GET_BOOK, GET_BOOKLIST } from 'src/app/@graphql/operations/query/bookList';
import { ADD_BOOK } from 'src/app/@graphql/operations/mutation/addBok';

import { ApiService } from 'src/app/@graphql/services/api.service';
import { IBook } from 'src/app/interfaces/IBook';

@Injectable({
  providedIn: 'root'
})
export class LibrosService extends ApiService {

  constructor(apollo: Apollo) {
    super(apollo); //invocamos al constructor de la clase padre ApiService
  }
  list(vskip: boolean = false) {
    console.log(vskip);
    return this.query(GET_BOOKLIST,{ skip: vskip } ).pipe(map((result:any) => {
      return result.bookList;
    }));
  }

  get(idbook: string) {
    console.log(idbook);
    return this.query(GET_BOOK,{ bookid: idbook } ).pipe(map((result:any) => {
      console.log(result.bookId);
      return result.bookId;
    }));
  }

  new (book: any){
    console.log(book);
    return this.mutation(ADD_BOOK, book ).pipe(map((result:any) => {
      return result.addBook;
    }));
  }
}
