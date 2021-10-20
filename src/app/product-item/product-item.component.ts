import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  productName : string = "products";

  @Input() productItem: any;
  @Output() sendProductItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectedProduct(){
    this.sendProductItem.emit(this.productItem)
  }
  

}
