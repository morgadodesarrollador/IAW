import { Component, Input , Output, EventEmitter, OnInit} from '@angular/core';


@Component({
  selector: 'app-show-inc',
  templateUrl: './show-inc.component.html',
  styleUrls: ['./show-inc.component.css']
})
export class ShowIncComponent implements OnInit {
  panelOpenState = false;
  items: string[] = new Array();
  @Input() incidencias: any[];
  @Output() listInc = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.incidencias);
  }
  getIncidencia(item){
    let indice = this.items.indexOf(item);
    if (indice>-1){
      this.items.splice(indice,1);
    }else{
      this.items.push(item);
    }
    console.log(this.items);
    this.listInc.emit(this.items);

  }

}
