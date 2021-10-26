import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

products : any;
  constructor(private productsService :ProductsService, private router : Router ) { }
  ngOnInit(): void {
    this.productsService.getProductsList().subscribe((data) => {console.log(data)
      this.products = data;
      console.log(this.products)
      
    },
  (error) =>{ 
    console.log(error)
  })
    
}

getProductDetailss(product:any){
  this.router.navigate([`product-details/${product.id}`])
  // return this.productsService.getProductDetails(product.id).subscribe((p) => console.log(p))
}


}