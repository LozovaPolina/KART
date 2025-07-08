import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";
import { API_URL } from "../../data/url";

const initialState = {
  cartItems: [],
  items: products,
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
      const res = await fetch(API_URL + `/products?category=${categorySlug}`, {
        headers: {
          "Accept-Language": locale,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch category products");

      const data = await res.json();
      return { categorySlug, products: data, locale };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async ({ locale }, { rejectWithValue }) => {
    try {
      const res = await fetch(+"/products", {
        headers: {
          "Accept-Language": locale,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch all products");

      const allProducts = await res.json();

      // Group products by category slug
      const groupedByCategory = allProducts.reduce((acc, product) => {
        const category = product.categorySlug || "uncategorized";
        if (!acc[category]) {
          acc[category] = {
            products: [],
            locale,
          };
        }
        acc[category].products.push(product);
        return acc;
      }, {});

      return groupedByCategory;
    } catch (error) {
      return rejectWithValue(error.message);
    }
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
        const item = state.items.find((item) => item.id === id);
        const newItem = { ...item, quantity: 1 };
        state.cartItems.push(newItem);
      }
    },
    addToCartQuick(state, action) {
      const { id, quantity } = action.payload;
      if (quantity <= 0) return;

      const itemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        // Item already in cart → increase quantity
        state.cartItems[itemIndex].quantity += quantity;
      } else {
        // New item → add to cart with specified quantity
        const item = state.items.find((item) => item.id === id);
        if (item) {
          const newItem = { ...item, quantity };
          state.cartItems.push(newItem);
        }
      }
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
    },
    deleteFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        if (action.payload) {
          const { categorySlug, products, locale } = action.payload;
          state.byCategory[categorySlug] = { products, locale };
        }
        state.loading = false;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        console.error("Failed to fetch products:", action.payload);
        state.loading = false;
      });
  },
});

export const { addToCart, removeFromCart, deleteFromCart, addToCartQuick } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectProducts = (state) => state.cart.items;
export const selectCartQuantity = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
export const selectIsSettingsOpen = (state) => state.cart.isSettingsOpen;

export default cartSlice.reducer;
