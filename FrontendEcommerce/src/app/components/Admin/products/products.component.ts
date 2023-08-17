import { Component, OnInit } from '@angular/core';
import { GetAllProductService } from 'src/app/Services/get-all-product.service';

export interface PeriodicElement {
  productId: string;
  productTitle: string;
  productImage: string;
  productCategory: string;
  productPrice: string;
  isOnSale: boolean;
  isBestSeller: boolean;
}

let ELEMENT_DATA: PeriodicElement[] | any = [
  {
    productId: '01_001',
    productTitle: 'Adicolor Classics Joggers',
    productImage: 'assets/01_001.jpg',
    productCategory: 'Dress',
    productPrice: '$63.85',
    isOnSale: false,
    isBestSeller: true,
  },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = [
    'productId',
    'productTitle',
    'productImage',
    'productCategory',
    'productPrice',
  ];
  dataSource = ELEMENT_DATA;

  constructor(private productService: GetAllProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (success:any) => {
        this.dataSource = success?.result;
      },
    });
  }
}
