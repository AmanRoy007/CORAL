import { Component, OnInit } from '@angular/core';
import { GetAllProductService } from 'src/app/Services/get-all-product.service';
import { productList } from 'src/app/models/models';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent implements OnInit {
  public productFilterList:any[]|undefined;

  constructor(private getproductService: GetAllProductService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }



  getAllProducts() {
    this.getproductService.getAllProducts().subscribe({
      next: (success) => {
        let productData :productList|any = success;
        this.productFilterList = productData.result;        
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
