import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DiaglogService {
  constructor(private matDialoge: MatDialog) {}

  openDialog(component: ComponentType<unknown>, options: {}) {
    return this.matDialoge.open(component, options);
  }
}
