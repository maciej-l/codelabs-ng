const ActionTypes = {
    SHOW_SUCCES_SNACK: '[GUI] Show success snack'
};

export class SnackSuccessAction {
    static readonly type = ActionTypes.SHOW_SUCCES_SNACK;

    constructor(
        public msg: string
    ) {}
}
