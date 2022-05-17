import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  reset,
  decrement,
  increment,
  customIncrement,
} from '../Store/counter.action';
import { getCounter } from '../Store/counter.Selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  counterrr$!: Observable<number>;
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
    this.counterrr$ = this.store.select(getCounter);
    // this.store.select(getCounter).subscribe((counterr: any) => {
    //   // console.log(counterr);
    //   this.counterrr$ = counterr;
    // });
  }
}
