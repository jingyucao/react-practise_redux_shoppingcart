import {configureStore} from '@reduxjs/toolkit';
import cartToggleSlice from "./cartToggle";
import cartItemSlice from "./cartItemSlice";

const redux = require('redux');

const store = configureStore({
  reducer: {
    cartToggle:cartToggleSlice.reducer,
    cartItem:cartItemSlice.reducer
  }});

export default store;
