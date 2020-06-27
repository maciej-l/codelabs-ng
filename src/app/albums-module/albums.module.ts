import { AlbumsContainerComponent } from './container/albums-container.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { AddAlbumComponent } from './components/add-album/add-album.component';
import { EditAlbumComponent } from './components/edit-album/edit-album.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumsContainerComponent,
    children: [
      {
        path: 'list',
        component: AlbumsListComponent,
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
  declarations: [
    AlbumsContainerComponent,
    AddAlbumComponent,
    EditAlbumComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AlbumsModule { }
