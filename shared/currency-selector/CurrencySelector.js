"use client"
import { fetchExchangeRates, selectCurrency, setCurrency } from '../../redux/reducer/currencySlice';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CurrencySelector() {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(selectCurrency);

  const handleChange = (e) => {
    dispatch(setCurrency(e.target.value));
  };


  useEffect(() => {
    dispatch(fetchExchangeRates());
  }, [dispatch]);
  return (
    <select
      value={selectedCurrency}
      onChange={handleChange}
      className="px-3 py-2 rounded-md bg-transparent text-[#323232]  focus:bg-white text-sm focus:outline-none focus:border-transparent transition"
    >
      <option value="EUR">EUR (€)</option>
      <option value="USD">USD ($)</option>
      <option value="UAH">UAH (₴)</option>
    </select>
  );
}
