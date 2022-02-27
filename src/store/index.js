import {configureStore} from '@reduxjs/toolkit';
import uiSlice from "./uiSlice";
import cartItemSlice from "./cartItemSlice";

const redux = require('redux');

const store = configureStore({
  reducer: {
    ui:uiSlice.reducer,
    cartItem:cartItemSlice.reducer
  }});

export default store;
