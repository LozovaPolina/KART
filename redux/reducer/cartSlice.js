import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../data/url";

const initialState = {
  cartItems: [],
  cartProducts: [],
  isSettingsOpen: false,
  byCategory: {},
  loading: false,
  error: null,
};
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async ({ categorySlug, locale }, { getState, rejectWithValue }) => {
    const state = getState();
    const cached = state.cart.byCategory[categorySlug];

    if (cached && cached.locale === locale) {
      return null;
    }

    try {
      const res = await fetch(
        `${API_URL}/products/items?category__slug=${categorySlug}`,
        {
          headers: {
            "Accept-Language": locale,
          },
        }
      );

      if (!res.ok) throw new Error("Failed to fetch category products");

      const data = await res.json();
      console.log("Fetched products for category:", categorySlug, data);
      return { categorySlug, products: data, locale };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchCartProductsByIds = createAsyncThunk(
  "cartProducts/fetchByIds",
  async (ids) => {
    const response = await fetch(
      `${API_URL}/products/get-actual-prices?products=${ids.join(",")}`
    );
    const data = await response.json();
    return data;
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity++;
      } else {
        const newItem = { id, quantity: 1 };
        state.cartItems.push(newItem);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    addToCartQuick(state, action) {
      const { id, quantity } = action.payload;
      if (quantity <= 0) return;

      const itemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += quantity;
      } else {
        const newItem = { id, quantity };
        state.cartItems.push(newItem);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].quantity === 1) {
          state.cartItems.splice(itemIndex, 1);
        } else {
          state.cartItems[itemIndex].quantity--;
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    deleteFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartProducts = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          const { categorySlug, products, locale } = action.payload;

          state.byCategory = {
            ...state.byCategory,
            [categorySlug]: {
              products,
              locale,
            },
          };
        }
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchCartProductsByIds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartProductsByIds.fulfilled, (state, action) => {
        state.status = "succeeded";
        const productsWithQty = action.payload.map((product) => {
          const cartItem = state.cartItems.find(
            (item) => item.id === product.id
          );
          return {
            ...product,
            quantity: cartItem ? cartItem.quantity : 0,
          };
        });
        state.cartProducts = productsWithQty;
      })
      .addCase(fetchCartProductsByIds.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  deleteFromCart,
  addToCartQuick,
  setCartItems,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectProducts = (state) => state.cart.items;
export const selectCartQuantity = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
export const selectIsSettingsOpen = (state) => state.cart.isSettingsOpen;

export default cartSlice.reducer;
