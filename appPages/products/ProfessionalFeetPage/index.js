"use client"

import { useSelector } from 'react-redux';
import { selectProducts } from '../../../redux/reducer/cartSlice';
import ShopItem from '../../../shared/shop/ProductItem';
import ShopCardName from '../../../shared/shop/ShopCardName';
import React from 'react';

function ProfessionalFeetPage() {
  const products = useSelector(selectProducts)
  return (
    <section className='flex flex-col gap-4 '>
      <ShopCardName name={'Professional Feet'} />

      <div className="flex flex-wrap justify-center lg:justify-between gap-8">

        {products.map(product => (
          <div key={product.id} className=" sm:w-[48%] lg:w-[30%] xl:w-[23%]">
            <ShopItem product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfessionalFeetPage;