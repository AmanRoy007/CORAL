import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Errors } from 'src/app/Enums/error';
import { RegExPattern } from 'src/app/Enums/validationPatterns';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
// import { registerFormModel } from 'src/app/models/models';


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
      password: new UntypedFormControl('', [Validators.required, Validators.minLength(8) , Validators.maxLength(8)]),
    });
    this.signUpForm = new UntypedFormGroup({
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', [Validators.required,Validators.pattern(/[a-zA-Z0-9]/g)]),
      password: new UntypedFormControl('', Validators.required),
      confirmPassword: new UntypedFormControl('', Validators.required),
    });
  }



  logInUser()
  {
    let {email, password} = this.loginForm.value;

    if(!email && !password)
    {
      this.loginForm.markAllAsTouched()
    }

  }



  registerUser()
  {
    let {firstName, lastName, email, password, confirmPassword} = this.signUpForm.value;
    if(!firstName && !lastName &&!email&&!password&&!confirmPassword) this.signUpForm.markAllAsTouched();
  }

}
