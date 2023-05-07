import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLogined: boolean = true;
  isCreateAccount: boolean = false;
  isForgotPassword: boolean = false;
  isSubmitted: boolean = false;
  submitFormLogin: boolean = false;
  isForgotSubmitForm:boolean = false
  visibilityIcon: string = 'visibility_off';
  checkText: boolean = false;
  successMessage:any;
  isRegister!: FormGroup;
  isLoginedForm!: FormGroup;
  isForgot!:FormGroup;


  constructor(private formBuider: FormBuilder) { }

  Login() {
    this.isLogined = true;
    this.isCreateAccount = false;
    this.isForgotPassword = false;
  }

  createAccount() {
    this.isCreateAccount = true;
    this.isLogined = false;
    this.isForgotPassword = false;
  }

  forgotPassword() {
    this.isForgotPassword = true;
    this.isCreateAccount = false;
    this.isLogined = false;
  }

  ngOnInit(): void {
    this.isRegister = this.formBuider.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@(outlook|gmail|yahoo)\.com')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })

    this.isLoginedForm = this.formBuider.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@(outlook|gmail|yahoo)\.com')]],
      password: ['', [Validators.required, Validators.minLength(8)] ]
    })

    this.isForgot = this.formBuider.group({
      email:['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@(outlook|gmail|yahoo)\.com')]]
    })

  }

  toggle() {
    if (this.visibilityIcon == 'visibility_off') {
      this.visibilityIcon = 'visibility';
      this.checkText = true;
    }
    else {
      this.checkText = false;
      this.visibilityIcon = 'visibility_off'
    }
  }

  submitFormLoginData() {
    this.submitFormLogin = true;
    if (this.isLoginedForm.invalid) return
  }


  submitFormData() {
    this.isSubmitted = true;
    if (this.isRegister.invalid)  return
  }

  ForgotPass(){
    this.isForgotSubmitForm = true;
    if(this.isForgot.invalid) return
  }
}
