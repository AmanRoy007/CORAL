import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { registerFormModel } from 'src/app/models/models';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public isSignIn: boolean = true;

  public loginForm!: FormGroup;
  public signUpForm!: FormGroup;

  constructor(private authService: AuthenticationServiceService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
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
