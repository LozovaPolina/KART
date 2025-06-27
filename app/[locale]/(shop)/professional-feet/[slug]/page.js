"use client"
import HintNavigation from '../../../../../shared/hint-navigation/HintNavigation';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import productImage from '../../../../../public/assets/image/product.png'
import Swiper from '../../../../../shared/swiper/Swiper';
import ShopItem from '../../../../../shared/shop/ProductItem';
import { useFormattedPrice } from '../../../../../hooks/useFormattedPrice';

import { products } from '../../../../../data/products'
import Text from '../../../../../shared/ui/text/Text';
import Title from '../../../../../shared/ui/title/Title';
import { useTranslations } from 'next-intl';

export default function Page({ params }) {
  const { slug } = React.use(params);
  const [tab, setTab] = useState('usage');
  const product = products.find((p) => p.slug === slug);
  const t = useTranslations("ProfessionalFeetSlug");



  const formattedDiscountedPrice = useFormattedPrice(product?.discountedPrice);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className=" w-full ">
      <div className="flex  justify-center items-center mb-[44px]">
        <HintNavigation
          links={[
            { label: t('home'), href: '/' },
            { label: 'Professional Feet', href: '/professional-feet' },
            { label: t('productDescription'), href: `/professional-feet/${slug}` },
          ]}
        />

      </div>

      <div className="flex gap-3 flex-wrap mb-[40px] h-full lg:flex-nowrap  w-full">
        <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl ">
          <Image
            src={productImage}
            alt={product.title}
            fill
            className="object-cover  p-8"
          />
        </div>

        <div className="flex flex-col w-full gap-4  text-[#404040]">
          <div className=" flex gap-4 items-center">
            <div className="flex flex-col justify-center  w-[95%] ">
              <h2 className="text-[20px] lg:text-xl ">{product.fullName}</h2>
              <h3 className="text-lg text-gray-500 ">{product.title}</h3>
            </div>

            <div className="text-sm text-right min-w-[80px] shrink-0 text-gray-400">
              {t('code')}: {product.id}
            </div>
          </div>


          <div className="w-full bg-[#EDEDED] h-[1px]"></div>


          <div className="">
            <p className="text-[13px] lg:text-sm mb-6 text-[#404040]">{product.description}</p>

          </div>


          <div className="w-full bg-[#EDEDED] h-[1px]"></div>

          <div className="flex justify-between items-center">
            <div className="text-[#A0C287] text-[16px] lg:text-xl  mb-4">{formattedDiscountedPrice} </div>
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
              <button className="flex items-center text-[#848484] gap-2 shadow-sm w-fit cursor-pointer text-[15px] lg:text-sm px-4 py-2 rounded-md hover:bg-gray-200">
                <ShoppingCart className="w-4 h-4 text-black" />
                <span className='hidden lg:block'>{t('addToCart')}</span>
              </button>
            </div>
          </div>


          <div className="border-b flex gap-4 border-gray-200 mb-4 ">
            <button
              className={`py-2 text-sm ${tab === 'usage' ? 'border-b-2 text-[#404040] border-[#404040]' : 'text-gray-500'}`}
              onClick={() => setTab('usage')}
            >
              {t('usage')}
            </button>
            <button
              className={`py-2 text-sm ${tab === 'ingredients' ? 'border-b-2 text-[#404040] border-[#404040]' : 'text-gray-500'}`}
              onClick={() => setTab('ingredients')}
            >
              {t('ingredients')}
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
      <Title className="text-start text-black mb-4">{t('popularProducts')}</Title>
      <Swiper controlBlock={false} itemsLength={Math.round(products.length / 4)} widthPercent={20} items={products.map(product => (
        <ShopItem key={product.id} product={product} />
      ))} />

    </section >
  );
}