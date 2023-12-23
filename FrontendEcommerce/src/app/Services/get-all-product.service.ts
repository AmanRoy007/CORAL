import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productList } from '../models/models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductService {


  private productUrl:string = 'https://coralbackend.onrender.com/products';
  constructor(private http:HttpClient) { 
    if(!environment.production){
      this.productUrl = 'http://localhost:5000/products'
    }
  }


  public getAllProducts()
  {
    return this.http.get(this.productUrl);
  }
}
