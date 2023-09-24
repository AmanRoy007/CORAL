import { Component, Input, OnInit } from '@angular/core';
import {productDetails}from '../../../models/models'
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productDetails: productDetails | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }

}
