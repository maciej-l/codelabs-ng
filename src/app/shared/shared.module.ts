import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLayoutModule } from './layout/shared-layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedLayoutModule
  ],
  exports: [
    SharedLayoutModule
  ]
})
export class SharedModule { }
