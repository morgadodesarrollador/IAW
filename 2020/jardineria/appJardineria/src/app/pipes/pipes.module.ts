import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewImagePipe } from './view-image.pipe';
import { TruncatePipe } from './truncate.pipe';



@NgModule({
  declarations: [ViewImagePipe, TruncatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    ViewImagePipe,
    TruncatePipe
  ]
})
export class PipesModule { }
