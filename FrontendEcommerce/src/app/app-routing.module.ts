import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { ManageDistributorAvailableComponent } from './components/manage-distributor-available/manage-distributor-available.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

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
    component: CheckoutPageComponent,
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'cart',
    component: ProductCartComponent,
  },
  {
    path: 'login',
    component: AuthenticationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
