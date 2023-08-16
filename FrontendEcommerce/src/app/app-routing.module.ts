import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/home/home.module').then(
        (module) => module.HomeModule
      ),

    // canActivate: [LoginGuardGuard]
  },
  {
    component: CheckoutPageComponent,
    path: 'checkout',
  },
  {
    component: ProductCartComponent,
    path: 'cart',
  },
  {
    component: AuthenticationComponent,
    path: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
