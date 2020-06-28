import { IAllAlbumsModel } from './../../models/albums';
const ActionTypes = {
    GET_LIST_OF_ALL_ALBUMS: '[ALBUMS] Get list of all albums',
    GET_LIST_OF_ALL_ALBUMS_SUCCESS: '[ALBUMS] Get list of all albums success',
};

export class GetListOfAllAlbumsAction {
    static readonly type = ActionTypes.GET_LIST_OF_ALL_ALBUMS;
}

export class GetListOfAllAlbumsSuccessAction {
    static readonly type = ActionTypes.GET_LIST_OF_ALL_ALBUMS_SUCCESS;

    constructor(
        public payload: IAllAlbumsModel[]
    ) {}
}
