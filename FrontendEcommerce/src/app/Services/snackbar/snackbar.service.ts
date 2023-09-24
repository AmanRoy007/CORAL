import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  autoHideSnackBar(message: string,panelClass:string) {
    this._snackBar.open(message, '', {
      duration:5000,
      panelClass:panelClass,
      horizontalPosition: 'end',
      verticalPosition:'top'
    });
  }
}
