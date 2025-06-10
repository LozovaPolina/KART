import React from 'react';
import Title from '../ui/title/Title';

function ShopCardName({ name }) {
  return (
    <div className="w-full rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.1)] text-[#43B549] flex justify-center items-center text-center p-12 md:p-24">
      <Title color="green">{name}</Title>
    </div>
  );
}

export default ShopCardName;