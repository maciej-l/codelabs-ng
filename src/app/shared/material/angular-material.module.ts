import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [
  MatCardModule,
  MatIconModule,
  MatButtonModule
];


@NgModule({
  declarations: [],
  imports: [MATERIAL_MODULES],
  exports: [MATERIAL_MODULES]
})
export class AngularMaterialModule { }
