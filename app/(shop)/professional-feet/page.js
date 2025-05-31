import ShopCardName from '@/shared/shop/ShopCardName';
import ShopItem from '@/shared/shop/ShopItem';
import React from 'react';

function page() {
  return (
    <section className='flex flex-col gap-4 '>
      <ShopCardName name={'Professional Feet'} />

      <div className="flex flex-wrap gap-4 justify-center">

        {Array.from({ length: 10 }).map((item, i) => <ShopItem key={i} />)}
      </div>
    </section>
  );
}

export default page;