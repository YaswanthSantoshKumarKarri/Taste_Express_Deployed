import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { foodMenu, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.foodMenu.id === foodMenu.id
      );

      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ foodMenu, quantity });
      }
    },
    changeQuantity(state,action){
        const {id,quantity}=action.payload;
        const indexOfItem=(state.items).findIndex(item=>item.foodMenu.id ===id);
        if(quantity>0){
            state.items[indexOfItem].quantity=quantity;
        }else{
            state.items=state.items.filter(item => item.foodMenu.id !== id);
        }
    },
    deleteFromCart(state, action) {
      const foodMenuId = action.payload;
      state.items = state.items.filter(item => item.foodMenu.id !== foodMenuId);
    },
  },
});

export const { addToCart,changeQuantity, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
