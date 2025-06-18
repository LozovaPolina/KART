"use client"
import { useFormattedPrice } from '../../hooks/useFormattedPrice';
import { selectCartItems, deleteFromCart, addToCart, removeFromCart } from '../../redux/reducer/cartSlice';
import { Minus, Plus, X } from 'lucide-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './ProductItem'
function ProductList() {
  const cartItems = useSelector(selectCartItems) || [];

  return (
    <>
      {cartItems.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductList;