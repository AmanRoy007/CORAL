import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [
  {
    path:"",
    loadChildren:()=>import('./components/home/home.module').then((module)=>module.HomeModule),
    // canActivate: [LoginGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
