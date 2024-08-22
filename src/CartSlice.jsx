import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Adds a new plant to the cart, or increases its quantity if it already exists
    addItem: (state, action) => {
      const plant = action.payload;
      const existingPlant = state.items.find(item => item.name === plant.name);

      if (existingPlant) {
        existingPlant.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },

    // Removes a plant from the cart based on its name
    removeItem: (state, action) => {
      const plantName = action.payload;
      state.items = state.items.filter(item => item.name !== plantName);
    },

    // Updates the quantity of a specific plant in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const plant = state.items.find(item => item.name === name);

      if (plant) {
        plant.quantity = quantity;
      }
    },
  },
});

// Export the action creators to be used in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be used in the store
export default CartSlice.reducer;
