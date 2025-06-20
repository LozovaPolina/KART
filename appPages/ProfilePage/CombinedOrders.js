"use client"

import React, { useState } from 'react';
import CombinedGroupItem from './CombinedGroupItem';
import { useFormattedPrice } from '../../hooks/useFormattedPrice';
function shortenYear(dateStr) {

  const parts = dateStr.split('.');
  if (parts.length !== 3) return dateStr;

  const day = parts[0];
  const month = parts[1];
  const year = parts[2];


  const shortYear = year.slice(-2);

  return `${day}.${month}.${shortYear}`;
}

function CombinedOrders({ orderGroup }) {

  const formattedPrice = useFormattedPrice(orderGroup.total);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div key={orderGroup.date} className=" rounded-xl ">
        <button onClick={() => setIsVisible(p => !p)} className="flex items-center w-full flex-wrap  justify-between gap-2  mb-2">
          <div className="flex items-center justify-between  w-full  sm:px-4 px-2 py-2 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">

            <span className="sm:text-sm text-xs font-semibold">
              {shortenYear(orderGroup.date)}
            </span>
            <span
              className={`text-sm font-semibold ${orderGroup.status === "Оплачено"
                ? "text-[#EF4444]"
                : "text-[#C89A00]"
                }`}
            >
              {orderGroup.status}

            </span>
            <span className="sm:text-sm text-xs text-black font-medium ">
              #{orderGroup.orderNumber}
            </span>
          </div>
          <span className="text-[#49BA4A] flex-1 sm:p-2 py-2  w-full sm:w-fit text-center font-semibold shadow-[0px_2px_10px_rgba(0,0,0,0.1)] ">
            {formattedPrice}
          </span>
        </button>





        <div className="space-y-3">
          {orderGroup.items.map((item) => (
            <CombinedGroupItem item={item} key={item.code} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CombinedOrders;