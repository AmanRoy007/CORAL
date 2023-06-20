import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { ProductCardComponent } from '../product-filter/product-card/product-card.component';
import { BestSellerComponent } from '../best-seller/best-seller.component';
import { ProductPageComponent } from '../product-page/product-page.component';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [
    HomeComponent,
    ProductFilterComponent,
    ProductCardComponent,
    BestSellerComponent,
    ProductPageComponent,
    ProductCartComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
  ],
})
export class HomeModule {}
