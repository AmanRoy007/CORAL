import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginFormData, registerFormModel } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationServiceService {
  private loginUrl: string = 'http://localhost:5000/login';
  private registerUrl: string = 'http://localhost:5000/register';

  constructor(private http: HttpClient) {}

  handleLogin(payload: LoginFormData) {
    return this.http.post(this.loginUrl, payload);
  }

  handleRegistration(payload: registerFormModel) {
    return this.http.post(this.registerUrl, payload);
  }
}
