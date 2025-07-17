"use client";
import { selectCartItems } from "../../redux/reducer/cartSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { API_URL } from "../../data/url";

export default function ProductList({ cartProducts }) {
  return (
    <>
      {cartProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
}
