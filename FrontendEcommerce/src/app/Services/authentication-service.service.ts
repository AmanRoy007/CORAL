import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  LoginFormData,
  registerFormModel,
} from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationServiceService {
  private loginUrl: string = 'http://localhost:5000/user/login';
  private registerUrl: string = 'http://localhost:5000/user/registerUser';
  public isLoggedInUser: boolean = false;

  constructor(private http: HttpClient) {}

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
