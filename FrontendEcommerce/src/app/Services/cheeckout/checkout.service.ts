import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private checkoutUrl = 'http://localhost:5000/payment/checkout';

  constructor(
    private httpClient: HttpClient,
    @Inject(DOCUMENT) readonly document: Document
  ) {
    if (environment.production) {
      this.checkoutUrl = 'https://coralbackend.onrender.com/products/payment/checkout';
    }
  }

  proceedToCheckout(): Observable<{}> {
    return this.httpClient.get(this.checkoutUrl);
  }

  public redirectToExternalRoute(url: string, target: string) {
    const window = this.document.defaultView;
    window?.open(url, target);
  }
}
