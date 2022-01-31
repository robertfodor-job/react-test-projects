import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  //cartSlice.reducer je v def exporte
  reducer: { ui: uiSlice.reducer, cart: cartSlice },
});

export default store;
