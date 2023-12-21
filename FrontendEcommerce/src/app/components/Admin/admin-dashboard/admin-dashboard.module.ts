import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductsComponent } from '../products/products.component';
import {MatTableModule} from '@angular/material/table';
import { AddProductComponent } from '../add-product/add-product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [AdminDashboardComponent, ProductsComponent, AddProductComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,  
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class AdminDashboardModule { }
