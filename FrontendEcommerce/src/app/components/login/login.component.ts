import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { LoginFormData, registerFormModel } from '../../models/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = true;
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private authentication_Service: AuthenticationServiceService) {
    this.loginForm = new FormGroup({});
    this.registerForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.InitializeLoginForm();
  }

  InitializeLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  getLoginFormData(): LoginFormData | undefined {
    let { username, password } = this.loginForm.controls;
    if (!username.value && !password.value) return;
    return { username: username.value, password: password.value };
  }

  loginUser() {
    let formData: LoginFormData | undefined = this.getLoginFormData();
    if (!formData) return;
    let loginPayload: LoginFormData = formData;
    this.authentication_Service.handleLogin(loginPayload).subscribe({
      next: (success) => {
        console.log(success);
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
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      termcondition: new FormControl('', Validators.requiredTrue),
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
