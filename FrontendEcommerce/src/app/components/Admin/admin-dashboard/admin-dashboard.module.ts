import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductsComponent } from '../products/products.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [AdminDashboardComponent, ProductsComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    MatSidenavModule,
    MatTableModule
  ]
})
export class AdminDashboardModule { }
