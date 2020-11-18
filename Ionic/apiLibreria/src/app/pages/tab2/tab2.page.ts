import { MsmEditorInterface } from './../../Models/Interfaces/EditorInterface';
import { Component, OnInit } from '@angular/core';
import { EditoresService } from 'src/app/services/editores.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public editores: Array <MsmEditorInterface> = [];
  constructor(private editoresService: EditoresService) {}

  ngOnInit(){
    this.editoresService.getEditores()
      .subscribe ( data => {
        this.editores = data;
        console.log ( this.editores  );
      });
  }
}
