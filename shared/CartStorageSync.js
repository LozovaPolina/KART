"use client";

import { setCartItems } from "../redux/reducer/cartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function CartStorageSync() {
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = localStorage.getItem("cartItems");
    if (saved) {
      dispatch(setCartItems(JSON.parse(saved)));
    }
  }, []);

  return null;
}
