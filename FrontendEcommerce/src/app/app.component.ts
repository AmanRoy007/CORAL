import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FrontendEcommerce';
  public isLoginPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe({
      next: (routeData) => {
        if (
          (routeData instanceof NavigationStart &&
            routeData.url === '/login') ||
          (routeData instanceof NavigationStart &&
            routeData.url === '/dashboard') || (routeData instanceof NavigationStart &&
              routeData.url === '/dashboard/products') 
        ) {
          this.isLoginPage = true;
        } else if (
          routeData instanceof NavigationStart &&
          routeData.url === '/'
        ) {
          this.isLoginPage = false;
        }
      },
    });
  }
}
