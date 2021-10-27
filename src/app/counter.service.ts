import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private cartList = new BehaviorSubject<any>([])
  public cartItems:any= [];

  constructor() { }

  getCartList(){
    return this.cartList;
  }

  setCartList(newItem: any ){
    if(!this.cartItems.length){
    newItem.quantity = newItem.quantity+1
    this.cartItems.push(newItem)
    }else{
      if(this.cartItems.find((item:any) => item.id === newItem.id )){
        this.cartItems.find((item:any) => item.id === newItem.id).quantity +=1
      }else{
        newItem.quantity = newItem.quantity+1
        this.cartItems.push(newItem)    
      }
    }
    this.cartList.next(this.cartItems)
    console.log(this.cartList)
  }

  decreaseCartList(newItem: any ){
      if(this.cartItems.find((item:any) => item.id === newItem.id).quantity!==0){

        this.cartItems.find((item:any) => item.id === newItem.id).quantity -=1
      }else{
        console.log("removed")
      }
    this.cartList.next(this.cartItems)
    console.log(this.cartList)
  }

  removeItem(deletedItem: any, i:any) {
    console.log(this.cartItems)
    console.log(this.cartList)

    if(this.cartItems.find((item:any) => item.id === deletedItem.id))
    this.cartItems.splice(this.cartItems.indexOf(i),1)

    this.cartList.next(this.cartItems)
    console.log(this.cartItems)
    console.log(this.cartList)


  }
  




}
