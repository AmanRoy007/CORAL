import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {


  public filterForm!: FormGroup;
  public panelOpenState = false;

  @ViewChild(MatAccordion) matAccordion!:MatAccordion;

  constructor() {
    this.filterForm = new FormGroup({
      
    });
  }
  
  ngOnInit(): void {
   
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
}
