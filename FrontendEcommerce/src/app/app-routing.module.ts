import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { SignupComponent } from './components/authentication/signup/signup.component';

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
    path: 'dashboard',
    loadChildren: () =>
      import('./components/Admin/admin-dashboard/admin-dashboard.module').then(
        (module) => module.AdminDashboardModule
      ),

    // canActivate: [LoginGuardGuard]
  },
  {
    path: 'checkout',
    loadComponent:()=>import('./components/checkout-page/checkout-page.component').then((module)=>module.CheckoutPageComponent)
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
