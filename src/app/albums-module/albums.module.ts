import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';

import { EditAlbumComponent } from './components/edit-album/edit-album.component';
import { SharedModule } from './../shared/shared.module';
import { AlbumsService } from './services/albums.service';
import { AlbumsState } from './state/albums';
import { AlbumsContainerComponent } from './container/albums-container.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { AlbumFormComponent } from './components/album-form/album-form.component';

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
        path: 'edit/:id',
        component: EditAlbumComponent
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
    AlbumsListComponent,
    AlbumFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxsModule.forFeature([AlbumsState]),
    RouterModule.forChild(routes)
  ]
})
export class AlbumsModule { }
