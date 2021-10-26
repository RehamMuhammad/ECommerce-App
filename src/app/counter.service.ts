import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject(10)

  constructor() { }

  getCounter(){
    return this.counter;
  }

  setCounter(newCounter: number ){
    this.counter.next(newCounter)
  }

}
