import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/Services/cheeckout/checkout.service';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  constructor(
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkoutService.proceedToCheckout().subscribe({
      next: (success: any) => {
        this.checkoutService.redirectToExternalRoute(success.url, 'blank');
      },
      error: (error) => {
      },
    });
  }
}
