"use client";

import Image from "next/image";
import React from "react";
import image from "../../public/assets/image/product.png";
import { useFormattedPrice } from "../../hooks/useFormattedPrice";
function CombinedGroupItem({ item, isVisible }) {
  const formattedPrice = useFormattedPrice(item.price);
  return (
    <>
      {isVisible && (
        <div className="flex  border-b px-2 border-[#E3E3E3] items-center gap-4 text-sm text-color ">
          <Image
            src={image}
            alt={item.title}
            width={12}
            height={12}
            className="w-12 h-12 rounded-md object-cover"
          />
          <div className=" flex flex-1 flex-wrap gap-[15%] sm:flex-nowrap  items-center justify-between">
            <div className="font-medium  max-w-[200px] w-full whitespace-nowrap">
              {item.title}
            </div>
            <div className="flex gap-[10%] w-full justify-between">
              <div className="text-xs  w-full text-color ">#{item.id}</div>
              <div className=" w-full  text-start text-color   ">
                {item.price && (
                  <span className=" w-full">{formattedPrice} </span>
                )}
              </div>
              <div className=" text-start max-w-[50px] w-full">
                {item.quantity}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CombinedGroupItem;
