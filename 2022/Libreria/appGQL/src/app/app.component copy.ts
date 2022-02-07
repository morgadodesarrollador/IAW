import {Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Apollo, gql} from 'apollo-angular';


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
 // querySubscription: Subscription = new Subscription;

  constructor (){}

  ngOnInit(): void {

    this.querySubscription = this.apollo.watchQuery<any>({
        query: GET_BOOKLIST
      })
      .valueChanges
      .subscribe( (result: any ) => {
        console.log(result);
        this.loading = false;
        this.error = result.error;
        this.books = (result?.data?.bookList as IBook[]);
      });
  }
  ngOnDestroy() {
      this.querySubscription.unsubscribe();
  }

}
