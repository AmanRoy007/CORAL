import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public userName: string = 'AR';
  public isLogin: boolean = false;

  constructor(private AUTHSERVICE: AuthenticationServiceService) {}

  ngOnInit(): void {
    this.AUTHSERVICE.getUserLoggedIn().subscribe({
      next: (success) => {
        if (success) {
          this.userName = success;
          this.isLogin = true;
        }
      },
    });
  }
}
