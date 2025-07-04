
"use client"
import React from 'react';
import productImg from '../../public/assets/image/product.png'
import Image from 'next/image';
import { ButtonWithCircleLink } from '../ui/button/ButtonWithCircleLink';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reducer/cartSlice';
import { useFormattedPrice } from '../../hooks/useFormattedPrice';
import { Link } from '../../i18n/navigation';
function ShopItem({ product }) {
  const dispatch = useDispatch();


  const formattedPrice = useFormattedPrice(product.price);
  const formattedDiscountedPrice = useFormattedPrice(product.discountedPrice);

  return (
    <div
      key={product.id}
      className="flex flex-col gap-4 p-4 rounded-2xl shadow-[0px_2px_10px_rgba(0,0,0,0.1)] w-full h-full"
    >
      <Link href={`/professional-feet/${product.slug}`}>
        <Image
          className="w-full object-cover rounded-2xl"
          src={productImg}
          alt={product.title}
          width={340}
          height={200}
        />
        <div className="flex flex-col mt-2">
          <div className="flex justify-between">
            <p className="text-[#3C5E23]">{product.title}</p>
            <p className="text-[15px] text-[#82A469] line-through">{formattedPrice}</p>
          </div>
          <div className="flex justify-between text-[#3C5E23]">
            <p className="text-[13px]">Код: {product.id}</p>
            <div className="text-[20px]">{formattedDiscountedPrice}</div>
          </div>
        </div>
      </Link>

      <ButtonWithCircleLink
        buttonOnClick={() => dispatch(addToCart({ id: product.id }))}
        circleHref={`/professional-feet/${product.slug}`}
        circleClassName="bg-gradient-to-b from-black/10 to-[#49BA4A]"
        buttonText="В корзину"
        buttonClassName="w-full bg-[#49BA4A] bg-gradient-to-b from-black/10 to-[#49BA4A]"
      />
    </div>
  );
}

export default ShopItem;