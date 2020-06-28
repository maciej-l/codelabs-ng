import { SharedModule } from './../shared/shared.module';
import { AlbumsService } from './services/albums.service';
import { AlbumsState } from './state/albums';
import { NgxsModule } from '@ngxs/store';
import { AlbumsContainerComponent } from './container/albums-container.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumsContainerComponent,
    children: [
      {
        path: 'list',
        component: AlbumsListComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  providers: [
    AlbumsService
  ],
  declarations: [
    AlbumsContainerComponent,
    AlbumsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxsModule.forFeature([AlbumsState]),
    RouterModule.forChild(routes)
  ]
})
export class AlbumsModule { }
