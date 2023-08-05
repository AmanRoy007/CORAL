import { Component, ElementRef, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {
  productCount: number = 0;

  isOpen!: boolean;

  productDetails!: any[];

  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.cartService.getProductFromSubject().subscribe({
      next: (success) => {
        console.log(success)
        this.productCount = success.length;
        this.productDetails = success;
      },
    });
  }

  addActiveClass() {
    this.isOpen = !this.isOpen;
  }
}
