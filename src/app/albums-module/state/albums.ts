import { AlbumsService } from './../services/albums.service';
import { IAllAlbumsModel } from './../models/albums';
import { State, Action, StateContext, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';

import * as fromActions from './actions/albums.actions';
import { Navigate } from '@ngxs/router-plugin';
import { SnackSuccessAction } from 'src/app/shared/gui/state/actions/gui.actions';

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
        private store: Store,
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

    @Action(fromActions.UpdateAlbumAction)
    UpdateAlbum(
        ctx: StateContext<AlbumsStateModel>,
        action: fromActions.UpdateAlbumAction
    ) {
        this.service.updateAlbum(action.payload).subscribe((response) => {
            this.store.dispatch(new fromActions.UpdateAlbumSuccessAction(response));
        });
    }

    @Action(fromActions.UpdateAlbumSuccessAction)
    UpdateAlbumSuccess(
        ctx: StateContext<AlbumsStateModel>,
        action: fromActions.UpdateAlbumSuccessAction
    ) {
        const state = ctx.getState();

        const updatedAlbums = state.albums.map(albums => {
            if (albums.id === action.payload.id) {
                albums.title = action.payload.title;
                albums.userId = action.payload.userId;
            }
            return albums;
        });

        ctx.patchState({
            ...state,
            albums: updatedAlbums
        });

        this.store.dispatch(new Navigate(['/albums-list']));
        this.store.dispatch(new SnackSuccessAction('Album został zaktualizowany'));
    }

    @Action(fromActions.AddAlbumAction)
    addAlbum(
        ctx: StateContext<AlbumsStateModel>,
        action: fromActions.AddAlbumAction
    ) {
        this.service.addAlbum(action.payload).subscribe((response) => {
            this.store.dispatch(new fromActions.AddAlbumSuccessAction(response));
        });
    }

    @Action(fromActions.AddAlbumSuccessAction)
    addAlbumSuccess(
        ctx: StateContext<AlbumsStateModel>,
        action: fromActions.AddAlbumSuccessAction
    ) {
        const state = ctx.getState();
        const updatedState = state.albums;
        updatedState.push(action.payload);

        ctx.patchState({
            ...state,
            albums: updatedState
        });

        this.store.dispatch(new Navigate(['/albums-list']));
        this.store.dispatch(new SnackSuccessAction('Album został dodany'));
    }

    @Action(fromActions.RemoveAlbumAction)
    removeAlbum(
        ctx: StateContext<AlbumsStateModel>,
        action: fromActions.RemoveAlbumAction
    ) {
        this.service.removeAlbum(action.id).subscribe((response) => {
            const state = ctx.getState();

            const albums = state.albums;
            const updatedAlbums = albums.filter(album => {
                if (album.id !== action.id) {
                    return album;
                }
            });

            this.store.dispatch(new fromActions.RemoveAlbumSuccessAction(updatedAlbums));
        });
    }

    @Action(fromActions.RemoveAlbumSuccessAction)
    removeAlbumSucces(
        ctx: StateContext<AlbumsStateModel>,
        action: fromActions.RemoveAlbumSuccessAction
    ) {
        const state = ctx.getState();

        ctx.patchState({
            ...state,
            albums: action.payload
        });
        this.store.dispatch(new SnackSuccessAction('Album został skasowany'));
    }
}
