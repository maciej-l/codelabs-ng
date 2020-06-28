import { RemoveAlbumAction } from './../../state/actions/albums.actions';
import { Component, OnInit, ViewChild, Injectable, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-album',
  templateUrl: './remove-album.component.html',
  styleUrls: ['./remove-album.component.scss']
})
export class RemoveAlbumComponent implements OnInit {

  public title: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number; title: string; },
    private dialogRef: MatDialogRef<RemoveAlbumComponent>,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.title = this.data.title;
  }

  public cancelClicked() {
    this.dialogRef.close();
  }

  public removeClicked() {
    this.store.dispatch(new RemoveAlbumAction(this.data.id)).subscribe(() => {
      this.dialogRef.close();
    });
  }

}
