import {Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Apollo, gql} from 'apollo-angular';

const GET_BOOK_LIST = gql`
    query GetBooks{
      bookList{
        id
        title
      }
    }`;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy  {
  title = 'appGQLLibreria';
  books: any ;
  loading = true;
  error: any;
  querySubscription: Subscription = new Subscription;

  constructor (private apollo: Apollo){}

  ngOnInit(): void {

    this.querySubscription = this.apollo.watchQuery<any>({
        query: GET_BOOK_LIST
      })
      .valueChanges
      .subscribe( ({data, loading}) => {
        console.log (data);
        this.books = data.bookList;
      });
  }
  ngOnDestroy() {
      this.querySubscription.unsubscribe();
  }

}
