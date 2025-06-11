"use client"
import { formatCurrencyRightLocalized } from '../../util/currencyFormater';
import { selectCartItems, deleteFromCart, addToCart, removeFromCart } from '../../redux/reducer/cartSlice';
import { Minus, Plus, X } from 'lucide-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ProductList() {
  const cartItems = useSelector(selectCartItems) || []
  const dispatch = useDispatch()

  return (

    <>
      {cartItems && cartItems?.map((product) => (
        <div key={product.id} className=" rounded-2xl shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-4">
          {/* Desktop layout */}
          <div className="hidden md:grid grid-cols-[2fr_1.5fr_0.5fr] items-center text-[#848484]">
            {/* Product */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-16 bg-gray-200 rounded" />


              <div>
                <div className=" text-black">{product.title}</div>
                {/* <div className="text-sm mt-1">€{product.price.toFixed(2)}</div> */}
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-1">
                <div className="text-[15px]  line-through"> {formatCurrencyRightLocalized(+product.discountedPrice)}</div>
                <div className="text-[15px]  ">{formatCurrencyRightLocalized(product.price)} </div>

              </div>
              <div className=" p-1 shadow flex gap-[6px] items-center justify-center rounded-2xl">
                <button className="cursor-pointer" onClick={() => dispatch(removeFromCart({ id: product.id }))}>
                  <Minus size={16} />
                </button>

                <span>{product.quantity}</span>

                <button className="cursor-pointer" onClick={() => dispatch(addToCart({ id: product.id }))}>
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Total + Remove */}
            <div className="flex items-center justify-end gap-2">
              <span className=" text-black">
                {formatCurrencyRightLocalized(product.price * product.quantity)
                }
              </span>
              <button className="cursor-pointer" onClick={() => dispatch(deleteFromCart({ id: product.id }))} ><X size={16} color='#848484' /></button>
            </div>
          </div>

          {/* Mobile layout */}
          <div div className="md:hidden space-y-2 text-[#848484] " >
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-16  rounded" />
                <div className=" text-black">{product.title}</div>
              </div>


              <button className="p-1" onClick={() => dispatch(deleteFromCart({ id: product.id }))} ><X size={16} color='#848484' /></button>
            </div>
            <div className="flex gap-1 justify-between items-center">
              <div>
                <div className="text-sm mt-1">{formatCurrencyRightLocalized(product.price)}</div>
              </div>

              <div className="p-1 shadow flex gap-[6px] items-center justify-center rounded-2xl">
                <button className="cursor-pointer">
                  <Minus size={16} />
                </button>

                <span>{product.quantity}</span>

                <button className="cursor-pointer">
                  <Plus size={16} />
                </button>
              </div>

              <div className="flex gap-1 justify-between items-center">
                <span className="text-black ">
                  Итого: {formatCurrencyRightLocalized((product.price * product.quantity))}
                </span>

              </div>
            </div>

          </div>
        </div>
      ))
      }

    </>
  );
}

export default ProductList;