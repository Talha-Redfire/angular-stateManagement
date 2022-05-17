import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  reset,
  decrement,
  increment,
  customIncrement,
} from '../Store/counter.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  counterr: any;
  constructor(private store: Store<{ counter: { counter: any } }>) {}
  formData: any;
  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onClearCounter() {
    this.store.dispatch(reset());
  }
  getdata(data: NgForm): any {
    this.store.dispatch(customIncrement(data));
  }
  ngOnInit(): void {
    this.store.select('counter').subscribe((counter: any) => {
      this.counterr = counter;
    });
  }
}
