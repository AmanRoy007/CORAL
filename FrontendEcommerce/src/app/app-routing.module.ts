import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
  },
  {
    path:'addProduct',
    component: AddProductComponent,
  },
  {
    path:"home",
    loadChildren:()=>import('./components/home/home.module').then((module)=>module.HomeModule),
    // canActivate: [LoginGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
