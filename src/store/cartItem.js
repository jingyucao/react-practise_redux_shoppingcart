import {createSlice} from "@reduxjs/toolkit";

const initialCartItemState = {
  number: 0,
  showCart: true
}

const cartItemSlice = createSlice(
  {
    name: 'cartItem',
    initialState: initialCartItemState,
    reducers: {
      addItem(state) {
        state.number++;
        state.showCart = true;
      },
      reduceItem(state) {
        if (state.number > 1) {
          state.number--;
          state.showCart = true
        } else {
          state.showCart = false
        }
      }
    }
  }
)

export const cartItemActions = cartItemSlice.actions;

export default cartItemSlice;
