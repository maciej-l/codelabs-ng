import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { GuiService } from '../service/gui.service';

import * as fromActions from './actions/gui.actions';

@State<any>({
    name: 'gui',
})
@Injectable()
export class GuiState {

    constructor(
        private service: GuiService
    ) {}

    @Action(fromActions.SnackSuccessAction)
    snackSuccessAction(
        ctx: StateContext<any>,
        action: fromActions.SnackSuccessAction
    ) {
        this.service.successSnack(action.msg);
    }
}
