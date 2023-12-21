import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { InterceptorService } from './Interceptor/interceptor.service';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormControlsModule } from './components/FormControls/form-controls.module';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { MobileHeaderComponent } from './components/header/mobile-header/mobile-header.component';
import { ManageDistributorAvailableComponent } from './components/manage-distributor-available/manage-distributor-available.component';
import { ManageDistributorAvailableDialogeComponent } from './components/manage-distributor-available-dialoge/manage-distributor-available-dialoge.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatDrawerContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    AuthenticationComponent,
    SigninComponent,
    SignupComponent,
    CheckoutPageComponent,
    MobileHeaderComponent,
    ManageDistributorAvailableComponent,
    ManageDistributorAvailableDialogeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    FormControlsModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatTableModule,
    MatMenuModule,
    MatChipsModule,
    MatAutocompleteModule,
    ScrollingModule,
    MatSidenavModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    LoginGuardGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
