import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginFormData, registerFormModel } from '../models/models';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationServiceService {
  private loginUrl: string = 'https://coral-yuom.onrender.com/user/login';
  private registerUrl: string =
    'https://coral-yuom.onrender.com/user/registerUser';
  private cookieUrl: string = 'https:////coral-yuom.onrender.com/user/cookies';
  public isLoggedInUser = new BehaviorSubject<string|null|undefined>(null);

  constructor(private http: HttpClient) {
    if (!environment.production) {
      this.loginUrl = 'http://localhost:5000/user/login';
      this.registerUrl = 'http://localhost:5000/user/registerUser';
      this.cookieUrl = 'http://localhost:5000/user/cookies';
    }
  }

  handleLogin(payload: LoginFormData) {
    return this.http.post(this.loginUrl, payload);
  }

  handleRegistration(payload: registerFormModel) {
    return this.http.post(this.registerUrl, payload);
  }

  SetUserLoggedIn(userName: string) {
    this.isLoggedInUser.next(userName);
  }

  getUserLoggedIn() {
    return this.isLoggedInUser.asObservable();
  }

  getLoginCookie() {
    return this.http.get(this.cookieUrl);
  }
}
