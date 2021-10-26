import { Component, OnInit } from '@angular/core';
import { CounterService } from './../counter.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  counter : any;

  constructor(private counterService : CounterService) { }

  ngOnInit(): void {
 this.counter = this.counterService.getCounter()

  }

}
