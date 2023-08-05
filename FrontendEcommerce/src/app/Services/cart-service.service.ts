import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  cartProductDetails = new BehaviorSubject<any>('');

   productArray:any[]= [];
  constructor() {}

  setProductToCart(productObject: any) {
    if (!productObject) return;
    this.productArray.push(productObject);
    this.cartProductDetails.next(this.productArray);
  }


  getProductFromSubject(){
    return this.cartProductDetails.asObservable();
  }
}
