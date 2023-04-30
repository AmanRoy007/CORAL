import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { LoginFormData, registerFormModel } from '../../models/models';
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
  inValidEmailFormat: string = '';
  isEmailRequired: string = '';
  isFnameEmpty: string = ''
  isLameEmpty: string = ''
  isPassRequired: string = ''
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
      username: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]),
      password: new FormControl('', Validators.required),
    });
  }


  getLoginFormData(): LoginFormData | undefined {
    let { username, password } = this.loginForm.controls;
    if (!username.value && !password.value) return;
    return { username: username.value, password: password.value };
  }

  errorMessageValidation() {

    if (this.loginForm.get('username')?.hasError('pattern')) {
      this.inValidEmailFormat = "Please Enter a valid Email Address"
    }
    else {
      this.inValidEmailFormat = ""
    }

    if (this.loginForm.get('username')?.value.length == 0) {
      this.isEmailRequired = "Email is Required";
      document.querySelector(".email-inpt")?.classList.add("error");
    }
    else {
      this.isEmailRequired = ""
    }

    if (this.loginForm.get('password')?.value.length == 0) {
      this.isPassRequired = "Password is Required";
      document.querySelector(".pass-inpt")?.classList.add("error");
    }
    else {
      this.isPassRequired = "";
    }

    if(this.registerForm.get('firstName')?.value.length == 0){
      this.isFnameEmpty = "First Name is Required";
      document.querySelector(".fname")?.classList.add("error")
    }
    else{
      this.isFnameEmpty = ""
      document.querySelector(".fname")?.classList.remove("error")
    }

    if(this.registerForm.get('lastName')?.value.length ==0 ){
      this.isLameEmpty = "Last Name is Required"
      document.querySelector(".lname")?.classList.add("error")

    }
    else{
      this.isLameEmpty= ""
      document.querySelector(".lname")?.classList.remove("error")
    }
  }

  loginUser() {

    this.errorMessageValidation()

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
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]),
      password: new FormControl('', [Validators.required, Validators.pattern('/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,20}$/')]),
      termcondition: new FormControl('', Validators.requiredTrue),
    });
  }

  handleUserRegisteration() {

    this.errorMessageValidation()

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
