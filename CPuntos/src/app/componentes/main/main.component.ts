import {ChangeDetectorRef, Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {MediaMatcher} from '@angular/cdk/layout';
import {LoginService} from '../../servicios/login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements  OnInit{

  @ViewChild('snav') sidenav: MatSidenav;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              private _ls: LoginService, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.router.navigate(
      [{ outlets: { 'sidenav': [ 'login' ] }}]);

  }

  ngOnInit(){
    this.sidenav.toggle();

  }




}
