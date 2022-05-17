import { increment, decrement, reset, customIncrement } from './counter.action';
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
  }),

  on(customIncrement, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: +action.Vallue + state.counter,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
