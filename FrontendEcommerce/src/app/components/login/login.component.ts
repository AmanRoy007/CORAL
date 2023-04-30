import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import {
  LoginFormData,
  loginResponse,
  registerFormModel,
} from '../../models/models';
import { LoginGuardGuard } from 'src/app/guards/login-guard.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = true;
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(
    private authentication_Service: AuthenticationServiceService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({});
    this.registerForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.InitializeLoginForm();
  }

  InitializeLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  getLoginFormData(): LoginFormData | undefined {
    let { email, password } = this.loginForm.controls;
    if (!email.value && !password.value) return;
    return { email: email.value, password: password.value };
  }

  loginUser() {
    let formData: LoginFormData | undefined = this.getLoginFormData();
    if (!formData) return;
    let loginPayload: LoginFormData = formData;
    // this.loginForm.reset();
    this.authentication_Service.handleLogin(loginPayload).subscribe({
      next: (success) => {
        let { isLogedIn }: any = success;

        !isLogedIn
          ? this.router.navigateByUrl('/')
          : this.router.navigateByUrl('/home');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  registerUserForm() {
    this.isLoggedIn = !this.isLoggedIn;
    if (!this.isLoggedIn) this.InitializeRegisterationForm();
  }

  InitializeRegisterationForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      termcondition: new FormControl('', Validators.required),
    });
  }

  handleUserRegisteration() {
    let { firstName, lastName, email, password, termcondition } =
      this.registerForm.controls;
    if (!firstName.value && !lastName.value && !email.value && !password.value)
      return;
    let registerPayload: registerFormModel = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };
    if (!termcondition) return;
    this.registerForm.reset();
    this.authentication_Service.handleRegistration(registerPayload).subscribe({
      next: (success) => {
        console.log(success);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
