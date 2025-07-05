"use client"

import React, { useState } from 'react';
import CombinedGroupItem from './CombinedGroupItem';
import { useFormattedPrice } from '../../hooks/useFormattedPrice';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('OrderList');
  const formattedPrice = useFormattedPrice(orderGroup.total);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="rounded-xl h-fit">
      <button
        onClick={() => setIsVisible(p => !p)}
        className="flex  items-center w-full   gap-2 mb-2"
      >
        <div className="flex  flex-grow items-center justify-between rounded-xl w-full sm:px-4 px-2 py-2 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col items-start ">
            <span className="sm:text-sm text-xs">
              {shortenYear(orderGroup.date)}
            </span>
            <span className="sm:text-xs text-xs text-black ">
              {orderGroup.orderNumber === "Basket" || orderGroup.orderNumber === "Корзина" ? orderGroup.orderNumber : `Номер: ${orderGroup.orderNumber}`}


            </span>

          </div>

          <span className={`text-xs sm:text-sm font-semibold ${orderGroup.status === t('status.paid')
            ? 'text-[#EF4444]'
            : 'text-[#C89A00]'
            }`}>
            {orderGroup.status}
          </span>

        </div>

        <span className="text-[#49BA4A] text-[15px] sm:text-lg sm:min-w-[120px] rounded-xl  p-3 min-w-[85px]   text-center font-semibold shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
          {formattedPrice}
        </span>
      </button>

      <div className="space-y-3">
        {orderGroup.items.map((item) => (
          <CombinedGroupItem item={item} key={item.code} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
}

export default CombinedOrders;