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

  }
  ngOnDestroy() {

  }

}
