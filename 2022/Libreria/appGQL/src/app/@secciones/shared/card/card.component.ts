import { Component, Input, OnInit,  } from '@angular/core';
import { IBook } from '../../../interfaces/IBook';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() book: IBook | undefined;
  @Input() titulo: string = '';
  @Input() foto: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
