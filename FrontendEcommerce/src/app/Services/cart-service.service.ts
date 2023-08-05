import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  cartProductDetails = new BehaviorSubject<any>('');

  constructor() {}

  setProductToCart(productObject: any) {
    let productArray = [];
    if (!productObject) return;
    productArray.push(productObject);
    this.cartProductDetails.next(productArray);
  }


  getProductFromSubject(){
    return this.cartProductDetails.asObservable();
  }
}
