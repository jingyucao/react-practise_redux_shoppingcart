import {createSlice} from "@reduxjs/toolkit";

const initialCartToggleState = {
  toggleCart: false
};

const cartToggleSlice = createSlice({
  name: 'cartToggle',
  initialState: initialCartToggleState,
  reducers: {
    toggleCart(state) {
      state.toggleCart = !state.toggleCart;
    }
  }
});

export const cartToggleActions = cartToggleSlice.actions;

export default cartToggleSlice;
