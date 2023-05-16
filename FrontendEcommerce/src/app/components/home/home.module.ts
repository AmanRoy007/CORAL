import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { ProductCardComponent } from '../product-filter/product-card/product-card.component';
import { BestSellerComponent } from '../best-seller/best-seller.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductFilterComponent,
    ProductCardComponent,
    BestSellerComponent
  ],
  imports: [CommonModule, HomeRoutingModule, MatMenuModule, MatIconModule],
})
export class HomeModule {}
