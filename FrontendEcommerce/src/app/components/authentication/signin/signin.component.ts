import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  PatternValidator,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Errors } from 'src/app/Enums/error';
import { RegExPattern } from 'src/app/Enums/validationPatterns';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { LoginFormData } from 'src/app/models/models';
// import { registerFormModel } from 'src/app/models/models';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public loginForm!: UntypedFormGroup;

  public formError = Errors;

  constructor(private authService: AuthenticationServiceService, private router:Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.pattern(RegExPattern.email),
      ]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14),
      ]),
    });
  }

  getUserData() {
    let { email, password } = this.loginForm.value;
    if (!email && !password) {
      this.loginForm.markAllAsTouched();
      return;
    }
    let payload: LoginFormData = {
      email: email,
      password: password,
    };

    this.loginUser(payload);
  }

  private loginUser(payload: LoginFormData) {
    this.authService.handleLogin(payload).subscribe({
      next: (success) => {
        if(success)
        {
          this.router.navigateByUrl('/');
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
