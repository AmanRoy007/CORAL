import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductsComponent } from '../products/products.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { AddProductFormComponent } from '../../add-product-form/add-product-form.component';
import { DialogeService } from 'src/app/Services/dialoge.service';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AdminDashboardComponent, ProductsComponent, AddProductFormComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers:[DialogeService]
})
export class AdminDashboardModule { }
