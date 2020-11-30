import { Component, OnInit } from '@angular/core';
import { EditoresService } from 'src/app/services/editores.service';

@Component({
  selector: 'app-editores',
  templateUrl: './editores.component.html',
  styleUrls: ['./editores.component.scss'],
})
export class EditoresComponent implements OnInit {
  editores: any;
  constructor(private edService: EditoresService) { }

  ngOnInit() {
    this.edService.getEditores()
      .subscribe(data => {
        this.editores = data;
        console.log(data)
      })

  }

}
