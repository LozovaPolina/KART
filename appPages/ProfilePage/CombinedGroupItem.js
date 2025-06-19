"use client"

import Image from 'next/image';
import React from 'react';
import image from "../../public/assets/image/product.png"
import { useFormattedPrice } from '../../hooks/useFormattedPrice';
function CombinedGroupItem({ item }) {
  const formattedPrice = useFormattedPrice(item.price);
  return (
    <>
      <div
        className="flex  border-b px-2 border-[#E3E3E3] items-center gap-4 text-sm text-[#848484]"
      >
        <Image
          src={image}
          alt={item.title}
          width={12}
          height={12}
          className="w-12 h-12 rounded-md object-cover"
        />
        <div className=" flex flex-1 flex-wrap gap-2 items-center justify-between">
          <div className="font-medium truncate max-w-[200px] te overflow-hidden whitespace-nowrap">
            {item.title}
          </div>
          <div className="text-xs max-w-[100px] w-full text-[#848484]">#{item.id}</div>
        </div>
        <div className="max-w-32 w-full  text-start text-[#848484]  ">
          {item.price ? (
            <span className='max-w-[100px] w-full'>{formattedPrice} </span>
          ) : (
            <span className="text-[#848484]">Цена только для мастеров</span>
          )}
        </div>
        <div className=" text-start max-w-[50px] w-full">{item.quantity}</div>
      </div>
    </>
  );
}

export default CombinedGroupItem;