import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {


  public isSignIn:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
