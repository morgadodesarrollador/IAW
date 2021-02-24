import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatBadgeModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatToolbarModule,
  MatListModule,
  MatSelectModule,
  MatExpansionModule,
  MatInputModule
} from '@angular/material';



@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule
  ]
})
export class MaterialModule { }
