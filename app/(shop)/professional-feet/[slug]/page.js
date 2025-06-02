"use client"
import HintNavigation from '@/shared/hint-navigation/HintNavigation';
import { products } from '@/shared/shop/ProductList';
import { formatCurrencyRightLocalized } from '@/util/currencyFormater';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import productImage from '../../../../public/assets/image/product.png'
import Swiper from '@/shared/swiper/Swiper';
import ShopItem from '@/shared/shop/ProductItem';


export default function Page({ params }) {
  const { slug } = React.use(params);
  console.log(slug)
  const [tab, setTab] = useState('usage');
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="flex flex-col  items-center gap-[44px] w-full ">
      <HintNavigation links={[
        { label: 'Главная', href: '/' },
        { label: 'Professional Feet', href: '/professional-feet' },
        { label: 'Описание товара', href: `/professional-feet/${slug}` },
      ]} />
      <div className="flex gap-3 flex-wrap mb-[40px] h-full lg:flex-nowrap  w-full">
        <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl ">
          <Image
            src={productImage}
            alt={product.title}
            fill
            className="object-cover  p-8"
          />
        </div>

        <div className="flex flex-col gap-4  text-[#404040]">
          <div className=" flex gap-4 items-center">
            <div className="flex flex-col">
              <h2 className="text-[20px] lg:text-xl font-semibold">{product.fullName}</h2>
              <h3 className="text-lg text-gray-500 mb-4">{product.title}</h3>
            </div>

            <div className="text-sm text-right text-gray-400 mb-2">Код: {product.id}</div>
          </div>


          <div className="w-full bg-[#EDEDED] h-[1px]"></div>


          <div className="">
            <p className="text-[13px] lg:text-sm mb-6 text-[#404040]">{product.description}</p>

          </div>


          <div className="w-full bg-[#EDEDED] h-[1px]"></div>

          <div className="flex justify-between items-center">
            <div className="text-[#A0C287] text-[16px] lg:text-xl font-semibold mb-4">{formatCurrencyRightLocalized(product.price)} </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center  rounded px-2 py-1">
                <button >
                  <Minus className="w-8 h-8 p-2 cursor-pointer text-[#848484]" />
                </button>
                <span className="px-1 lg:px-3 text-[#848484]">0</span>
                <button >
                  <Plus className="w-8 h-8 p-2 cursor-pointer text-[#848484]" />
                </button>
              </div>
              <button className="flex items-center gap-2 shadow w-[70px] cursor-pointer text-[15px] lg:text-sm px-4 py-2 rounded-md hover:bg-gray-200">
                <ShoppingCart className="w-4 h-4" />
                В корзину
              </button>
            </div>
          </div>


          <div className="border-b flex gap-4 border-gray-200 mb-4 ">
            <button
              className={` py-2 text-sm ${tab === 'usage' ? 'border-b-2 text-[#404040] border-[#404040] font-semibold' : 'text-gray-500'}`}
              onClick={() => setTab('usage')}
            >
              Способ применения
            </button>
            <button
              className={` py-2 text-sm ${tab === 'ingredients' ? 'border-b-2 text-[#404040] border-[#404040] font-semibold' : 'text-gray-500'}`}
              onClick={() => setTab('ingredients')}
            >
              Список ингредиентов
            </button>
          </div>

          <div className="text-sm leading-relaxed w-full text-[#404040]">
            {tab === 'usage' ? (
              <p>{product.usage}</p>
            ) : (
              <ul className="list-disc w-full list-inside text-[#404040]">
                {product.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <Swiper controlBlock={false} itemsLength={Math.round(products.length / 4)} widthPercent={'342px'} items={products.map(product => (
        <ShopItem key={product.id} product={product} />
      ))} />

    </section >
  );
}