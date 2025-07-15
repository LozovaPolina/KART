"use client";
import { selectCartItems } from "../../redux/reducer/cartSlice";
import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
function ProductList() {
  const cartItems = useSelector(selectCartItems) || [];

  return (
    <>
      {/* {cartItems.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))} */}
    </>
  );
}

export default ProductList;
