import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

// redux toolkit will autom. clone existing state, so we can use state.counter++,
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
