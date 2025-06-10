import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/cartSlice";
import authReducer from "../reducer/authSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer
  },
});

export default store