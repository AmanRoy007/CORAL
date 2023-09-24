import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoriesRoutingModule } from './product-categories-routing.module';
import { ProductCategoriesComponent } from './product-categories.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule} from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeModule } from '../../home/home.module';


@NgModule({
  declarations: [ProductCategoriesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSliderModule,
    ProductCategoriesRoutingModule,
    HomeModule
  ]
})
export class ProductCategoriesModule { }
