import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../products.service';



@Component({
  selector: 'app-product-dynamic-details',
  templateUrl: './product-dynamic-details.component.html',
  styleUrls: ['./product-dynamic-details.component.css']
})
export class ProductDynamicDetailsComponent implements OnInit {

  constructor(private activateRoute : ActivatedRoute, private productsService :ProductsService) { }
products:any
  product :any
  ngOnInit(): void {
    this.productsService.getProductsList().subscribe((data) => {console.log(data)
      this.products = data;
      console.log(data)
    

    this.activateRoute.params.subscribe(params => {
      this.product =  this.products.filter((productItem:any) => productItem.id == params.id)[0];
      console.log(this.product)
    })
    })
}

}