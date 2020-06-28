import { AlbumsService } from './../services/albums.service';
import { IAllAlbumsModel } from './../models/albums';
import { State, Action, StateContext, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';

import * as fromActions from './actions/albums.actions';

export interface AlbumsStateModel {
    albums: IAllAlbumsModel[];
}

@State<AlbumsStateModel>({
    name: 'albums',
    defaults: {
        albums: []
    }
})
@Injectable()
export class AlbumsState {

    constructor(
        private service: AlbumsService,
        private store: Store
    ) {}

    @Action(fromActions.GetListOfAllAlbumsAction)
    getListOfAllAlbums(
        ctx: StateContext<AlbumsStateModel>,
        action: fromActions.GetListOfAllAlbumsAction
    ) {
        this.service.getAlbumsList().subscribe(response => {
            this.store.dispatch(new fromActions.GetListOfAllAlbumsSuccessAction(response));
        });
    }

    @Action(fromActions.GetListOfAllAlbumsSuccessAction)
    GetListOfAllAlbumsSuccess(
        ctx: StateContext<AlbumsStateModel>,
        action: fromActions.GetListOfAllAlbumsSuccessAction
    ) {
        const state = ctx.getState();

        ctx.patchState({
            ...state,
            albums: action.payload
        });
    }
}
