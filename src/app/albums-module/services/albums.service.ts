import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumsListServerDto } from './albums-list.dtos';

import { map } from 'rxjs/operators';
import { IAlbumsModel } from '../models/albums';

@Injectable()
export class AlbumsService {

  API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  getAlbumsList() {
    return this.http.get<AlbumsListServerDto>(`${this.API_URL}/albums`).pipe(
      map(response => {
        return {
          id: response.id,
          title: response.title,
          userId: response.userId
        } as IAlbumsModel;
      })
    );

  }
}
