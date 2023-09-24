import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { Errors } from 'src/app/Enums/error';
import { RegExPattern } from 'src/app/Enums/validationPatterns';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { SnackbarService } from 'src/app/Services/snackbar/snackbar.service';
import { registerFormModel, registerUserResponse } from 'src/app/models/models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signUpForm!: UntypedFormGroup;
  public formError = Errors;

  constructor(
    private authenticationService: AuthenticationServiceService,
    private snackBarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.signUpForm = new UntypedFormGroup({
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.pattern(RegExPattern.email),
      ]),
      password: new UntypedFormControl('', Validators.required),
      confirmPassword: new UntypedFormControl('', Validators.required),
    });
  }

  getUserData() {
    let { firstName, lastName, email, password, confirmPassword } =
      this.signUpForm.value;
    if (!firstName && !lastName && !email && !password && !confirmPassword) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    let payload: registerFormModel = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    this.registerUser(payload);
  }

  private registerUser(payload: registerFormModel) {
    this.authenticationService.handleRegistration(payload).subscribe({
      next: (success:any) => {
        this.snackBarService.autoHideSnackBar(success.message,'successSnackBar');
        this.signUpForm.reset();

      },
      error: (error) => {
        console.log(error);

        if (error instanceof HttpErrorResponse) {
          this.snackBarService.autoHideSnackBar(error.error.message,'errorSnackBar');
        }
      },
    });
  }
}
