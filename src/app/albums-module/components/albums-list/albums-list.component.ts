import { AlbumsService } from './../../services/albums.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

  constructor(
    private service: AlbumsService
  ) { }

  ngOnInit(): void {
    this.service.getAlbumsList();
  }

}
