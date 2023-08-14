import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';

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
    component:CheckoutPageComponent,
    path:'checkout',
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:ProductCartComponent,
    path:'cart'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
