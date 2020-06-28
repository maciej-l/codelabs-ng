import { IAllAlbumsModel } from './../../models/albums';
import { selectAllAlbums } from './../../state/select/albums';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngxs/store';
import { filter, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.scss']
})
export class EditAlbumComponent implements OnInit, AfterViewInit {

  public editedAlbumId: number;
  public editedAlbum: IAllAlbumsModel;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  ngAfterViewInit() {
    this.store.select(selectAllAlbums).pipe(
      map(albums => albums.filter(album => album.id === this.editedAlbumId)),
      take(1)
    ).subscribe(album => {
      console.log(album);
    });
  }

  getParams() {
    this.route.params.subscribe(params => {
      if (params) {
        this.editedAlbumId = +params.id;
      }
    });
  }

}
