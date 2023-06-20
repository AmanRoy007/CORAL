import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productList } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductService {


  private productUrl:string = 'http://localhost:5000/products';
  constructor(private http:HttpClient) { }


  public getAllProducts()
  {
    return this.http.get(this.productUrl);
  }
}
