import { IAllAlbumsModel } from './../../models/albums';
const ActionTypes = {
    GET_LIST_OF_ALL_ALBUMS: '[ALBUMS] Get list of all albums',
    GET_LIST_OF_ALL_ALBUMS_SUCCESS: '[ALBUMS] Get list of all albums success',
    UPDATE_ALBUM: '[ALBUMS] Update album',
    UPDATE_ALBUM_SUCCESS: '[ALBUMS] Update album success',
    ADD_ALBUM: '[ALBUMS] Add album',
    ADD_ALBUM_SUCCESS: '[ALBUMS] Add album success',
    REMOVE_ALBUM: '[ALBUMS] Remove album',
    REMOVE_ALBUM_SUCCESS: '[ALBUMS] Remove album success',
};

export class GetListOfAllAlbumsAction {
    static readonly type = ActionTypes.GET_LIST_OF_ALL_ALBUMS;
}

export class GetListOfAllAlbumsSuccessAction {
    static readonly type = ActionTypes.GET_LIST_OF_ALL_ALBUMS_SUCCESS;

    constructor(
        public payload: IAllAlbumsModel[]
    ) { }
}

export class UpdateAlbumAction {
    static readonly type = ActionTypes.UPDATE_ALBUM;

    constructor(
        public payload: IAllAlbumsModel
    ) { }
}

export class UpdateAlbumSuccessAction {
    static readonly type = ActionTypes.UPDATE_ALBUM_SUCCESS;

    constructor(
        public payload: IAllAlbumsModel
    ) { }
}

export class AddAlbumAction {
    static readonly type = ActionTypes.ADD_ALBUM;

    constructor(
        public payload: IAllAlbumsModel
    ) { }
}

export class AddAlbumSuccessAction {
    static readonly type = ActionTypes.ADD_ALBUM_SUCCESS;

    constructor(
        public payload: IAllAlbumsModel
    ) { }
}

export class RemoveAlbumAction {
    static readonly type = ActionTypes.REMOVE_ALBUM;

    constructor(
        public id: number
    ) { }
}

export class RemoveAlbumSuccessAction {
    static readonly type = ActionTypes.REMOVE_ALBUM_SUCCESS;

    constructor(
        public payload: IAllAlbumsModel[]
    ) {}
}

