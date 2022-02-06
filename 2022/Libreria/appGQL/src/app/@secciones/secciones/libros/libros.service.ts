import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/internal/operators/map';
import { GET_BOOKLIST } from 'src/app/@graphql/operations/bookList';
import { ApiService } from 'src/app/@graphql/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class LibrosService extends ApiService {

  constructor(apollo: Apollo) {
    super(apollo); //invocamos al constructor de la clase padre ApiService
  }
  list() {
    return this.query(GET_BOOKLIST).pipe(map((result:any) => {
      return result.bookList;
    }));
  }
}
