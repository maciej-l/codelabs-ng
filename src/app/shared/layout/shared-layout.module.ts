import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS = [
  MainLayoutComponent,
  TopBarComponent,
  FooterComponent
];

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ COMPONENTS ]
})
export class SharedLayoutModule { }
