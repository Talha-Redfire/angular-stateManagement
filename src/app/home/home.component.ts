import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset, decrement, increment } from '../Store/counter.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  counterr: any;
  constructor(private store: Store<{ counter: { counter: any } }>) {}
  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onClearCounter() {
    this.store.dispatch(reset());
  }
  ngOnInit(): void {
    this.store.select('counter').subscribe((counter: any) => {
      this.counterr = counter;
    });
  }
}
