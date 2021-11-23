import { Component, OnInit, Input } from '@angular/core';
import { IRuta } from '../../../interfaces/BreadInterfaces';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('seccion') seccion: string;
  // tslint:disable-next-line:no-input-rename
  @Input('items') items: IRuta[];
   
  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
   }
}
