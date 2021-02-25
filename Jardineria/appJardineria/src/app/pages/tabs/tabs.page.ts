import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public configService: ConfigService) {
    
   }

  ngOnInit() {
    console.log(this.configService.isAdmin, this.configService.iconEdit);
    //this.configService.edicion();
  }

}
