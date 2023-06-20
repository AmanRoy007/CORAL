import { Component, OnInit } from '@angular/core';
import { GetAllProductService } from 'src/app/Services/get-all-product.service';
import { productList } from 'src/app/models/models';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {

  public productFilterList:any[]|undefined;
  constructor(private getproductService: GetAllProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
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
