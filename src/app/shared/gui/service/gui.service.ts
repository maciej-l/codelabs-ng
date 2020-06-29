import { Injectable, Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class GuiService {

  protected snackService: MatSnackBar;

  constructor(
    injector: Injector
  ) {
    this.snackService = injector.get(MatSnackBar);
  }

  successSnack(successMsg: string) {
    this.snackService.open(`${successMsg}`, '', {panelClass: 'success' });
  }
}
