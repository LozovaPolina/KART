import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/cartSlice";
import authReducer from "../reducer/authSlice";
import currencyReducer from "../reducer/currencySlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    currency: currencyReducer
  },
});

export default store