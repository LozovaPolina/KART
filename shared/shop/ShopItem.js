import React from 'react';
import productImg from '../../public/assets/image/product.png'
import Image from 'next/image';
import { ButtonWithCircleLink } from '../button/ButtonWithCircleLink';
function ShopItem() {
  return (
    <div className='flex w-[340px] flex-col gap-2 p-4 rounded-2xl shadow'>
      <Image className='w-full object-cover rounded-2xl' src={productImg} alt='product' />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className='text-[#3C5E23]'>Active Nail Cure Kit</p>
          <p className='text-[15px] text-[#82A469]'>3200 ₴</p>

        </div>
        <div className="flex text-[#3C5E23] justify-between">
          <p className='text-[13px]'>Код: 7031</p>
          <div className='text-[20px]'>2500 ₴</div>
        </div>
      </div>
      <ButtonWithCircleLink circleClassName={'bg-gradient-to-b from-black/10 to-[#49BA4A]'} buttonText='В корзину' buttonClassName='w-[80%] bg-[#49BA4A] bg-gradient-to-b from-black/10 to-[#49BA4A]' />
    </div>
  );
}

export default ShopItem;