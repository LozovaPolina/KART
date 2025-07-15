import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { API_URL } from "../../data/url";
import fetchWithAuth from "../../util/fetchWithAuth";

// Register user action (using cookies, no manual token handling)
export const registerUserAction = createAsyncThunk(
  "user/register",
  async (payload, { rejectWithValue }) => {
    try {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // send and receive cookies automatically
        body: JSON.stringify(payload),
      };

      const res = await fetch(API_URL + "/users/register/", config);

      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData);
      }

      const data = await res.json();
      return data; // backend returns user info or success message
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);
export const getPersonalProfileAction = createAsyncThunk(
  "profile/getPersonal",
  async (locale, { getState, dispatch, rejectWithValue }) => {
    try {
      const res = await fetchWithAuth(
        `${API_URL}/users/personal-details/`,
        {
          method: "GET",
          headers: {
            "Accept-Language": locale,
          },
        },
        (newAccess) => dispatch(setTokens({ access: newAccess })),
        () => dispatch(logout())
      );

      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);

export const getDeliveryDetailsAction = createAsyncThunk(
  "profile/getDeliveryDetails",
  async (locale, { dispatch, rejectWithValue }) => {
    try {
      const res = await fetchWithAuth(
        `${API_URL}/users/delivery-details/`,
        {
          method: "GET",
          headers: {
            "Accept-Language": locale,
          },
        },
        (newAccess) => dispatch(setTokens({ access: newAccess })),
        () => dispatch(logout())
      );

      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);

export const loginUserAction = createAsyncThunk(
  "user/login",
  async (payload, { rejectWithValue }) => {
    try {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      };

      const res = await fetch(API_URL + "/users/login/", config);

      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData);
      }

      const data = await res.json();
      return data; // user info or success message; tokens are in cookies
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);

const initialState = {
  user: null,
  accessToken: Cookies.get("access") || null,
  refreshToken: Cookies.get("refresh") || null,
  loading: false,
  error: null,
  isRegistered: false,
  isAuthenticated: !!Cookies.get("access"),
  data: null,
  deliveryData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      Cookies.remove("access");
      Cookies.remove("refresh");
      state.accessToken = null;
      state.refreshToken = null;
      state.loading = false;
      state.error = null;
      state.isRegistered = false;
      state.isAuthenticated = false;
      state.user = null;
    },

    resetRegisterFlag(state) {
      state.isRegistered = false;
      state.error = null;
    },

    setTokens: (state, action) => {
      const { access, refresh } = action.payload;
      if (access) {
        state.accessToken = access;
        Cookies.set("access", access, { expires: 7 });
      }
      if (refresh) {
        state.refreshToken = refresh;
        Cookies.set("refresh", refresh, { expires: 7 });
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUserAction.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isRegistered = false;
      })
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.isRegistered = true;
        state.user = action.payload.user;
      })
      .addCase(registerUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Registration failed";
        state.isRegistered = false;
      })

      .addCase(loginUserAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        const { access, refresh } = action.payload;
        if (access) {
          state.accessToken = access;
          Cookies.set("access", access, { expires: 7 });
        }
        if (refresh) {
          state.refreshToken = refresh;
          Cookies.set("refresh", refresh, { expires: 7 });
        }
        state.loading = false;
        state.isAuthenticated = true;
      })

      .addCase(loginUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
        state.isAuthenticated = false;
      })
      .addCase(getPersonalProfileAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPersonalProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPersonalProfileAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(getDeliveryDetailsAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDeliveryDetailsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.deliveryData = action.payload;
      })
      .addCase(getDeliveryDetailsAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { logout, resetRegisterFlag, setTokens } = authSlice.actions;
export default authSlice.reducer;
