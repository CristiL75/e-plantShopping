// Import the configureStore function from @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the cartReducer from CartSlice.jsx
import cartReducer from './CartSlice';

// Configure the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer, // Associate the cartReducer with the 'cart' slice of state
    },
});

// Export the configured store
export default store;
