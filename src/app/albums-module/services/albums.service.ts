import { IAllAlbumsModel } from './../models/albums';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumsListServerDto } from './albums-list.dtos';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumsService {

  API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  getAlbumsList(): Observable<IAllAlbumsModel[]> {
    return this.http.get<AlbumsListServerDto[]>(`${this.API_URL}/albums`).pipe(
      map(response => response.map(data => {
         return {
          id: data.id,
          title: data.title,
          userId: data.userId
        } as IAllAlbumsModel;
      })
      ));
  }

  updateAlbum(payload: IAllAlbumsModel): Observable<IAllAlbumsModel> {
    return this.http.put<AlbumsListServerDto>(`${this.API_URL}/albums/${payload.id}`, payload);
  }

  addAlbum(payload: IAllAlbumsModel): Observable<IAllAlbumsModel> {
    return this.http.post<AlbumsListServerDto>(`${this.API_URL}/albums`, payload);
  }

  removeAlbum(payload: number) {
    return this.http.delete(`${this.API_URL}/albums/${payload}`);
  }
}
