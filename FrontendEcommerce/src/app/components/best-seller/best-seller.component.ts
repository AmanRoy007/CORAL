import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetAllProductService } from 'src/app/Services/get-all-product.service';
import { productList } from 'src/app/models/models';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss'],
})
export class BestSellerComponent implements OnInit {
  public productFilterList: any[] | undefined;

  public tabForm!: FormGroup;

  public bestSellerFilter = [
    {
      filterName: 'AllProduct',
    },
    {
      filterName: 'T-shirt',
    },
    {
      filterName: 'Hoodies',
    },
    {
      filterName: 'Jacket',
    },
  ];

  constructor(private getproductService: GetAllProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.tabForm = new FormGroup({
      'filter': new FormControl(),
      
    });
  }

  getAllProducts() {
    this.getproductService.getAllProducts().subscribe({
      next: (success) => {
        let productData: productList | any = success;
        this.productFilterList = productData.result;
      },
      error: (error) => {
      },
    });
  }
}
