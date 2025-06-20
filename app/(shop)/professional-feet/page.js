import ShopCardName from '../../../shared/shop/ShopCardName';
import ShopItem from '../../../shared/shop/ProductItem';
import React from 'react';



import { products } from '../../../data/products'

function page() {
  return (
    <section className='flex flex-col gap-4 '>
      <ShopCardName name={'Professional Feet'} />

      <div className="flex flex-wrap gap-4 justify-center">

        {products.map(product => (
          <ShopItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default page;