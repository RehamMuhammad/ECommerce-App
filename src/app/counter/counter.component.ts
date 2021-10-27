import { CounterService } from './../counter.service';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit ,OnChanges{

  cartList : any;

  constructor(private counterService : CounterService) { }

  ngOnInit(): void {
    this.counterService.getCartList().subscribe((cartList) => {this.cartList=cartList})
  }

  increaseCount(item:any){
    this.counterService.setCartList(item)
  }
  decreaseCount(item:any){
    this.counterService.decreaseCartList(item)
  }

  deleteItem(deletedItem: any, i:any) {
    this.counterService.removeItem(deletedItem,i)
  }

 ngOnChanges():void{
  this.counterService.getCartList().subscribe((cartList) => {this.cartList=cartList})
  console.log(this.cartList)
}


}
