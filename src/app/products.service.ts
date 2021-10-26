import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http : HttpClient) { }


  getProductsList(){
    return this.http.get('https://fakestoreapi.com/products');
  }

  getProductDetails(productID : any){
    return this.http.get(`https://fakestoreapi.com/products/${productID}`);
  
  }
}
