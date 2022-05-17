import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterState } from './state';

const getCounterState = createFeatureSelector<counterState>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
  console.log(state);
  return state.counter;
});
