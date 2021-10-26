import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter : any;

  constructor(private counterService : CounterService) { }

  ngOnInit(): void {
    console.log(this.counterService.getCounter().subscribe((counter) => {this.counter=counter}))
  }

  increaseCount(){
    this.counterService.setCounter(this.counter+1)
  }
  decreaseCount(){
    this.counterService.setCounter(this.counter-1)
  }

}
