"use client"

import React from 'react';
import CombinedGroupItem from './CombinedGroupItem';
import { useFormattedPrice } from '../../hooks/useFormattedPrice';

function CombinedOrders({ orderGroup }) {

  const formattedPrice = useFormattedPrice(orderGroup.total);
  return (
    <>
      <div key={orderGroup.date} className=" rounded-xl p-4">
        <div className="flex items-center justify-between gap-4 mb-2">

          <div className="flex flex-1 items-center justify-between  w-full  px-4 py-2 rounded-xl shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">

            <span className="text-sm font-semibold">{orderGroup.date}</span>
            <span
              className={`text-sm font-semibold ${orderGroup.status === "Оплачено"
                ? "text-[#EF4444]"
                : "text-[#C89A00]"
                }`}
            >
              {orderGroup.status}

            </span>
            <span className="text-sm text-black font-medium">
              #{orderGroup.orderNumber}
            </span>
          </div>
          <span className="text-[#49BA4A] p-2 min-w-[86px] text-center rounded-xl font-semibold shadow-[0px_2px_10px_rgba(0,0,0,0.1)] ">
            {formattedPrice}
          </span>
        </div>





        <div className="space-y-3">
          {orderGroup.items.map((item) => (
            <CombinedGroupItem item={item} key={item.code} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CombinedOrders;