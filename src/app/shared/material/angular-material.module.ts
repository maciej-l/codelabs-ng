import { GuiService } from './../gui/service/gui.service';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatDialogModule, MatDialogConfig, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatSnackBarModule, MatSnackBarConfig, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

const MATERIAL_MODULES = [
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSnackBarModule,
  MatToolbarModule
];

const MAT_SNACK_CUSTOM_GLOBAL_OPTIONS: MatSnackBarConfig = {
  duration: 3500,
  verticalPosition: 'top'
};

const MAT_DIALOG_CUSTOM_OPTIONS: MatDialogConfig = {
  width: '360px'
};


@NgModule({
  declarations: [],
  providers: [
    GuiService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACK_CUSTOM_GLOBAL_OPTIONS},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_CUSTOM_OPTIONS }
  ],
  imports: [ ...MATERIAL_MODULES ],
  exports: [ ...MATERIAL_MODULES ]
})
export class AngularMaterialModule { }
