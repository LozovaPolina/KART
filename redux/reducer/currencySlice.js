import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExchangeRates = createAsyncThunk(
  'currency/fetchExchangeRates',
  async () => {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/EUR');
    if (!response.ok) throw new Error('Failed to fetch exchange rates');
    const data = await response.json();
    return data.rates;
  }
);

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    selectedCurrency: 'EUR',
    exchangeRates: { EUR: 1 },
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    setCurrency(state, action) {
      state.selectedCurrency = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchExchangeRates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExchangeRates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.exchangeRates = action.payload;
      })
      .addCase(fetchExchangeRates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCurrency } = currencySlice.actions;

export const selectCurrency = (state) => state.currency.selectedCurrency;
export const selectExchangeRates = (state) => state.currency.exchangeRates;
export const selectCurrencyStatus = (state) => state.currency.status;
export const selectCurrencyError = (state) => state.currency.error;

export default currencySlice.reducer;
