import { IAllAlbumsModel } from './../../models/albums';
import { UpdateAlbumAction, AddAlbumAction } from './../../state/actions/albums.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { FormActions } from '../../config/form-actions.enum';
import { selectAllAlbums } from '../../state/select/albums';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss']
})
export class AlbumFormComponent implements OnInit, AfterViewInit {

  public dataForm: FormGroup;
  public ONLY_NUMBERS = '^[0-9]*$';
  public editedAlbumId: number;
  private formAction: string;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getParams();
    this.getAlbumId();
  }

  ngAfterViewInit() {
    if (this.formAction === FormActions.IS_EDITING) {
      setTimeout(() => {
        this.store.select(selectAllAlbums).pipe(
          map(albums => albums.filter(album => album.id === this.editedAlbumId)),
          take(1)
        ).subscribe(album => {
          if (album) {
            const [albumData]: [IAllAlbumsModel] = album;
            this.dataForm.get('id').setValue(albumData.id);
            this.dataForm.get('userId').setValue(albumData.userId);
            this.dataForm.get('title').setValue(albumData.title);
          }
        });
      });
    }
  }

  public onSaveClicked() {
    if (this.formAction === FormActions.IS_EDITING) {
      this.store.dispatch(new UpdateAlbumAction(this.dataForm.value));
    } else {
      const payload: IAllAlbumsModel = {
        id: null,
        title: this.dataForm.get('title').value,
        userId: this.dataForm.get('userId').value
      };
      this.store.dispatch(new AddAlbumAction(payload));
    }
  }

  public cancelClicked() {
    this.route.navigate(['albums-list/list']);
  }

  private buildForm() {
    this.dataForm = this.fb.group({
      userId: [null, [Validators.required, Validators.pattern(this.ONLY_NUMBERS)]],
      title: [null, [Validators.required]],
      id: [null]
    });
  }

  private getParams() {
    this.activatedRoute.data.subscribe(data => {
      this.formAction = data.formActionType;
    });
  }

  private getAlbumId() {
    this.activatedRoute.params.subscribe(params => {
      if (params) {
        this.editedAlbumId = +params.id;
      }
    });
  }

}
