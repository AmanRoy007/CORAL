import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { GetAllProductService } from 'src/app/Services/get-all-product.service';
import { productList } from 'src/app/models/models';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {


  public filterForm!: FormGroup;
  public panelOpenState = false;
  public productFilterList:any[]|undefined;


  @ViewChild(MatAccordion) matAccordion!:MatAccordion;

  constructor(private getproductService:GetAllProductService) {
    this.filterForm = new FormGroup({
      
    });
    
  }
  
  ngOnInit(): void {
   this.getAllProducts()
  }

  ngAfterViewInit()
  {
   if(this.matAccordion.multi) this.matAccordion.openAll();
  }
  
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
  
    return `${value}`;
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
