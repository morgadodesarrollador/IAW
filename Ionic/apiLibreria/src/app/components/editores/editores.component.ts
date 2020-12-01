import { Component, OnInit } from '@angular/core';
import { EditoresService } from 'src/app/services/editores.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editores',
  templateUrl: './editores.component.html',
  styleUrls: ['./editores.component.scss'],
})
export class EditoresComponent implements OnInit {
  editores: any;
  constructor(private edService: EditoresService, private navCtrl: NavController) {
    console.log('ed');
   }
  newLibros(){
    console.log ('libros');
    this.navCtrl.navigateRoot ('/editores/libros', { animated: true });
  }
  ngOnInit() {
    this.edService.getEditores()
      .subscribe(data => {
        this.editores = data;
        console.log(data)
      })

  }

}
