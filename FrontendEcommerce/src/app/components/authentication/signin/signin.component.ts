import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Errors } from 'src/app/Enums/error';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { registerFormModel } from 'src/app/models/models';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public isSignIn: boolean = true;

  public loginForm!: UntypedFormGroup;
  public signUpForm!: UntypedFormGroup;

  public formError = Errors;


  constructor(private authService: AuthenticationServiceService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      password: new UntypedFormControl('', Validators.required),
    });
    this.signUpForm = new UntypedFormGroup({
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required),
      confirmPassword: new UntypedFormControl('', Validators.required),
    });
  }

  getFormData(formName: string) {
    if (formName === 'loginForm') {
      console.log(this.loginForm);
    } else {
      console.log(this.signUpForm);
      let payload: registerFormModel = {
        firstName: this.signUpForm.controls['firstName'].value,
        lastName: this.signUpForm.controls['lastName'].value,
        email: this.signUpForm.controls['email'].value,
        password: this.signUpForm.controls['password'].value,
        confirmPassword: this.signUpForm.controls['confirmPassword'].value,
      };
      this.authService.handleRegistration(payload).subscribe({
        next: (success) => {
          console.log(success);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
