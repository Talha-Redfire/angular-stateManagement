import { increment, decrement, reset } from './counter.action';
import { initialState } from './state';
import { createReducer, on } from '@ngrx/store';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    if (state.counter <= 0) {
      return {
        ...state,
        counter: 0,
      };
    } else {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
