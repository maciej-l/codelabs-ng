import { GetListOfAllAlbumsAction } from './../state/actions/albums.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-albums-container',
  templateUrl: './albums-container.component.html',
  styleUrls: ['./albums-container.component.scss']
})
export class AlbumsContainerComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetListOfAllAlbumsAction());
  }

}
