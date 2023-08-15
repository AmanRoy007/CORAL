import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductPageComponent } from '../product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, 
  {
    path: 'productPage/:id',
    component: ProductPageComponent,
  },
  {
    path: 'category/:id',
    loadChildren: () =>
      import(
        '../../components/module/product-categories/product-categories.module'
      ).then((m) => m.ProductCategoriesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
