import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLayoutModule } from './layout/shared-layout.module';
import { AngularMaterialModule } from './material/angular-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedLayoutModule,
    AngularMaterialModule
  ],
  exports: [
    SharedLayoutModule,
    AngularMaterialModule
  ]
})
export class SharedModule { }
