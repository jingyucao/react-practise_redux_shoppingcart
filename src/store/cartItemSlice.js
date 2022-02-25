import {createSlice} from "@reduxjs/toolkit";

const initialCartItemState = {
  items: [],
  totalQuantity: 0,
}

const cartItemSlice = createSlice(
  {
    name: 'cartItem',
    initialState: initialCartItemState,
    reducers: {
      addItemToCart(state, action) {
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id);
        state.totalQuantity++;
        if (!existingItem) {
          state.items.push({
            id: newItem.id,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            name: newItem.title
          })
        } else {
          existingItem.quantity++
          existingItem.totalPrice = existingItem.totalPrice + newItem.price
        }
      },

      reduceItemFromCart(state, action) {
        const id = action.payload;
        const existingItem = state.items.find(item => item.id === id);
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice = existingItem.totalPrice - existingItem.price
        }
        state.totalQuantity--;

      }
    }
  }
)

export const cartItemActions = cartItemSlice.actions;

export default cartItemSlice;
