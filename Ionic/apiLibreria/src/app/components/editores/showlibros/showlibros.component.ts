import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showlibros',
  templateUrl: './showlibros.component.html',
  styleUrls: ['./showlibros.component.scss'],
})
export class ShowlibrosComponent implements OnInit {
  id = null;
  constructor(private activatedRoute: ActivatedRoute) { 
    console.log('show')
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

}
