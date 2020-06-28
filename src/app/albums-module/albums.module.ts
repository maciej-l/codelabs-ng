import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';

import { SharedModule } from './../shared/shared.module';
import { AlbumsService } from './services/albums.service';
import { AlbumsState } from './state/albums';
import { AlbumsContainerComponent } from './container/albums-container.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { AlbumFormComponent } from './components/album-form/album-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormActions } from './config/form-actions.enum';
import { RemoveAlbumComponent } from './components/remove-album/remove-album.component';


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
        component: AlbumFormComponent,
        data: {
          formActionType: FormActions.IS_EDITING
        }
      },
      {
        path: 'add',
        component: AlbumFormComponent,
        data: {
          formActionType: FormActions.IS_ADDING
        }
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
  entryComponents: [
    RemoveAlbumComponent
  ],
  declarations: [
    AlbumsContainerComponent,
    AlbumsListComponent,
    AlbumFormComponent,
    RemoveAlbumComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([AlbumsState]),
    RouterModule.forChild(routes)
  ]
})
export class AlbumsModule { }
