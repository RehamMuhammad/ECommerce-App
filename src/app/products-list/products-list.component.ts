import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CounterService } from './../counter.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  counter : any;

products : any;
  constructor(private productsService :ProductsService, private router : Router, private counterService : CounterService ) { }
  ngOnInit(): void {
    this.productsService.getProductsList().subscribe((data) => {console.log(data)
      this.products =Object.assign(data).map((item: any)=>{return {...item,quantity:0}});
      console.log(this.products)

      // console.log(this.counterService.getCartList().subscribe((counter) => {this.counter=counter}))

      
    },
  (error) =>{ 
    console.log(error)
  })
    
}

getProductDetailss(product:any){
  this.router.navigate([`product-details/${product.id}`])
}

addToCart(newItem:any){
  this.counterService.setCartList(newItem);
  
}

}