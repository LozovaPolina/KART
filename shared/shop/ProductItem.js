import React from 'react';
import productImg from '../../public/assets/image/product.png'
import Image from 'next/image';
import { ButtonWithCircleLink } from '../button/ButtonWithCircleLink';
import { formatCurrencyRightLocalized } from '@/util/currencyFormater';
function ShopItem({ product }) {
  return (
    <div key={product.id} className='flex w-[340px] flex-col gap-2 p-4 rounded-2xl shadow-[0px_2px_10px_rgba(0,0,0,0.1)]'>
      <Image
        className='w-full object-cover  rounded-2xl'
        src={productImg}
        alt={product.title}
        width={340}
        height={200}
      />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className='text-[#3C5E23]'>{product.title}</p>

          <p className="text-[15px] text-[#82A469] line-through">{formatCurrencyRightLocalized(product.price)}</p>
        </div>
        <div className="flex text-[#3C5E23] justify-between">
          <p className='text-[13px]'>Код: {product.id}</p>
          <div className='text-[20px]'>{formatCurrencyRightLocalized(product.discountedPrice)}</div>
        </div>
      </div>
      <ButtonWithCircleLink
        href={`/professional-feet/${product.slug}`}
        circleClassName='bg-gradient-to-b from-black/10 to-[#49BA4A]'
        buttonText='В корзину'
        buttonClassName='w-[80%] bg-[#49BA4A] bg-gradient-to-b from-black/10 to-[#49BA4A]'
      />
    </div>
  );
}

export default ShopItem;