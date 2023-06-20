import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GetAllProductService } from 'src/app/Services/get-all-product.service';
import { productDetails, productList } from 'src/app/models/models';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  initialProductCount: number = 1;
  productDetails: productDetails | undefined;

  @ViewChild(ProductCartComponent) productCart!: ProductCartComponent;
  productId: string | null | undefined;

  constructor(
    private getproductService: GetAllProductService,
    private router: ActivatedRoute,
    private cartService:CartServiceService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.router.paramMap.subscribe({
      next: (params: ParamMap) => {
        let productId = params.get('id');
        this.productId = productId;
      },
    });
  }

  incrementCounter() {
    this.initialProductCount++;
  }

  decrementCounter() {
    if (this.initialProductCount <= 1) return;
    this.initialProductCount--;
  }

  getAllProducts() {
    this.getproductService.getAllProducts().subscribe({
      next: (success) => {
        let productData: productList | any = success;
        this.productDetails = productData.result.filter(
          (item: any) => item.productId === this.productId
        )[0];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  handleCartItem()
  {
    this.productCart.addActiveClass();
    let productObject = {
      "productId": this.productDetails?.productId,
      "productName":this.productDetails?.productTitle,
      "quanitity":this.initialProductCount,
      "productPrice":this.productDetails?.productPrice,
      "productImage":this.productDetails?.productImage
    }
    this.cartService.setProductToCart(productObject);
  }
}
