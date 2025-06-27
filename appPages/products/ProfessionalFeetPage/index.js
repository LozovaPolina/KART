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

      <div className="flex flex-wrap gap-8 justify-center">

        {products.map(product => (
          <ShopItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProfessionalFeetPage;