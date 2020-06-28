import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';

const MATERIAL_MODULES = [
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
];


@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AngularMaterialModule { }
