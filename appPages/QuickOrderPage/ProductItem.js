"use client"
import React from 'react';
import productImg from '../../public/assets/image/product.png'
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import Button from '../../shared/ui/button/Button';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useFormattedPrice } from '../../hooks/useFormattedPrice';
import { addToCart, deleteFromCart, selectCartItems } from '../../redux/reducer/cartSlice';

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);



  const formattedPrice = useFormattedPrice(product?.price);
  const quantityInCart = cartItems.find(item => item.id === product.id)?.quantity || 0;
  return (
    <div
      className="flex items-center justify-between  shadow  px-4 py-2 hover:shadow-sm flex-col gap-2 sm:gap-0 sm:flex-row"
    >
      <div className="flex items-center gap-5 w-full sm:w-2/5 ">
        <div className="w-12 h-12 relative  overflow-hidden">
          <Image
            src={productImg}
            alt={product?.name}
            fill
            className="object-contain"
          />
        </div>
        <span className="text-sm text-[#848484]">{product?.name}</span>
      </div>
      <div className="flex w-full sm:w-[70%] justify-between items-center ">
        <div className="text-sm text-[#848484] w-[80px] text-center">{product?.id}</div>
        <div className="text-sm font-semibold text-[#848484] w-[90px] text-center">
          {formattedPrice}
        </div>
        <div className="flex items-center text-[#848484] gap-2 w-[80px] justify-center">
          <button onClick={() => dispatch(deleteFromCart({ id: product.id }))} className=" text-[15px] p-2 cursor-pointer"><Minus size={16} /></button>
          <span className="text-lg font-bold">{quantityInCart}</span>
          <button onClick={() => dispatch(addToCart({ id: product.id }))} className="text-[15px] p-2 cursor-pointer"><Plus size={16} /></button>
        </div>
        <div className="sm:w-[110px]">
          <Button className=" py-1 text-sm font-medium text-black! block  sm:hidden" bgColor={'white'} > <ShoppingCart /> </Button>
          <Button className="w-full py-1 text-sm font-medium text-black! hidden sm:block" bgColor={'white'} onClick={() => dispatch(addToCart({ id: product.id }))} >В корзину</Button>
        </div>

      </div>

    </div >
  );
}

export default ProductItem;