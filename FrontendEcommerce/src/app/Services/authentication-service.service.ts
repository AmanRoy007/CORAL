import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  LoginFormData,
  registerFormModel,
} from '../models/models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationServiceService {
  private loginUrl: string = 'https://coral-yuom.onrender.com/user/login';
  private registerUrl: string = 'http://coral-yuom.onrender.com/user/registerUser';
  public isLoggedInUser: boolean = false;

  constructor(private http: HttpClient) {
    if(!environment.production){
      this.loginUrl = 'http://localhost:5000/user/login';
      this.registerUrl = 'http://localhost:5000/user/registerUser'
    }
  }

  handleLogin(payload: LoginFormData) {
    return this.http.post(this.loginUrl, payload);
  }

  handleRegistration(payload: registerFormModel) {
    return this.http.post(this.registerUrl, payload);
  }

  SetUserLoggedIn(isUserLoggedIn: boolean) {
    this.isLoggedInUser = isUserLoggedIn;
  }

  getUserLoggedIn(): boolean {
    return this.isLoggedInUser;
  }
}
