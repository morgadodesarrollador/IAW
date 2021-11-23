import { Component, OnInit } from '@angular/core';
import { EditoresService } from 'src/app/services/editores.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editores',
  templateUrl: './editores.component.html',
  styleUrls: ['./editores.component.scss'],
})
export class EditoresComponent implements OnInit {
  editores: any;
  constructor(private edService: EditoresService, private navCtrl: NavController, private router: Router) {
    console.log('ed');
   }
  newLibros(){
    console.log ('libros');
 //   this.navCtrl.navigateRoot ('/editores/libros', { animated: true });
    this.router.navigate(['/editores/libros/42']);
  }
  ngOnInit() {
    this.edService.getEditores()
      .subscribe(data => {
        this.editores = data;
        console.log(data)
      })

  }

}
