import { AngularMaterialModule } from './../material/angular-material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableEditActionsComponent } from './components/table-edit-actions/table-edit-actions.component';

const COMPONENTS = [
  MainLayoutComponent,
  TopBarComponent,
  FooterComponent,
  TableEditActionsComponent
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ],
  exports: [ ...COMPONENTS ]
})
export class SharedLayoutModule { }
