"use client"
import HintNavigation from '../../../../shared/hint-navigation/HintNavigation';

import { formatCurrencyRightLocalized } from '../../../../util/currencyFormater';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import productImage from '../../../../public/assets/image/product.png'
import Swiper from '../../../../shared/swiper/Swiper';
import ShopItem from '../../../../shared/shop/ProductItem';
import { useFormattedPrice } from '../../../../hooks/useFormattedPrice';

const products = [
  {
    id: '7031',
    slug: 'active-nail-cure-kit',
    title: 'Active Nail Cure Kit',
    fullName: 'Active Nail Cure Kit Professional Edition',
    description: 'Комплексный набор для эффективного ухода и лечения ногтей в домашних условиях. Помогает укрепить и восстановить ногтевую пластину.',
    usage: 'Наносите на очищенные ногти два раза в день, избегая попадания на кожу. Рекомендуется курсом 2-4 недели.',
    ingredients: [
      'Витамин E',
      'Алоэ Вера',
      'Пантенол',
      'Экстракт ромашки',
      'Глицерин',
    ],
    image: '/images/active-nail-kit.jpg',
    price: 3200,
    discountedPrice: 2500,
    quantity: 0,
  },
  {
    id: '7032',
    slug: 'hydration-foot-cream',
    title: 'Hydration Foot Cream',
    fullName: 'Hydration Foot Cream with Natural Extracts',
    description: 'Увлажняющий крем для ног с натуральными экстрактами мяты и масла ши, который помогает смягчить и освежить кожу стоп.',
    usage: 'Наносить на чистую кожу ног легкими массирующими движениями перед сном для максимального увлажнения.',
    ingredients: [
      'Масло ши',
      'Экстракт мяты',
      'Витамин B5',
      'Гиалуроновая кислота',
    ],
    image: '/images/hydration-foot-cream.jpg',
    price: 1800,
    discountedPrice: 1350,
    quantity: 0,
  },
  {
    id: '7033',
    slug: 'pro-pedicure-tools',
    title: 'Pro Pedicure Tools Set',
    fullName: 'Pro Pedicure Tools Set - Complete Kit',
    description: 'Профессиональный набор инструментов для педикюра, изготовленный из нержавеющей стали. Включает все необходимые инструменты для ухода за ногами.',
    usage: 'Используйте инструменты согласно инструкции, после каждого применения обязательно дезинфицируйте для поддержания гигиены.',
    ingredients: [
      'Нержавеющая сталь',
      'Силиконовые ручки',
    ],
    image: '/images/pedicure-tools.jpg',
    price: 4200,
    discountedPrice: 3700,
    quantity: 0,
  },
  {
    id: '7034',
    slug: 'organic-heel-balm',
    title: 'Organic Heel Balm',
    fullName: 'Organic Heel Balm with Healing Properties',
    description: 'Органический бальзам для пяток с восстанавливающим и смягчающим эффектом. Помогает избавиться от трещин и сухости кожи.',
    usage: 'Наносить на чистые пятки 1-2 раза в день, массируя до полного впитывания.',
    ingredients: [
      'Масло кокоса',
      'Воск пчелиный',
      'Масло лаванды',
      'Витамин F',
    ],
    image: '/images/heel-balm.jpg',
    price: 1500,
    discountedPrice: 1200,
    quantity: 0,
  },
  {
    id: '7035',
    slug: 'lavender-foot-soak',
    title: 'Lavender Foot Soak',
    fullName: 'Lavender Foot Soak Relaxing Formula',
    description: 'Расслабляющая ванночка для ног с лавандовым маслом, снимает усталость и успокаивает кожу после долгого дня.',
    usage: 'Растворите 2-3 столовые ложки ванночки в теплой воде и держите ноги в растворе 15-20 минут.',
    ingredients: [
      'Лавандовое масло',
      'Экстракт ромашки',
      'Соль Эпсома',
      'Масло жожоба',
    ],
    image: '/images/lavender-foot-soak.jpg',
    price: 2100,
    discountedPrice: 1700,
    quantity: 0,
  },
  {
    id: '7036',
    slug: 'toe-separator-kit',
    title: 'Revitalizing Toe Separator Kit',
    fullName: 'Revitalizing Toe Separator Kit',
    description: 'Набор для разделения пальцев ног с гелевыми вкладышами для коррекции и профилактики деформаций, улучшения кровообращения.',
    usage: 'Используйте ежедневно по 1-2 часа или по рекомендации врача для профилактики и коррекции.',
    ingredients: [
      'Гель силиконовый',
      'Мягкий пластик',
    ],
    image: '/images/toe-separator-kit.jpg',
    price: 1100,
    discountedPrice: 900,
    quantity: 0,
  },
  {
    id: '7037',
    slug: 'cooling-mint-gel',
    title: 'Cooling Mint Gel',
    fullName: 'Cooling Mint Gel for Foot Refreshment',
    description: 'Охлаждающий гель с мятным ароматом для облегчения усталости и снятия отечности ног после долгого дня.',
    usage: 'Наносите гель на ноги легкими массажными движениями по мере необходимости.',
    ingredients: [
      'Экстракт мяты',
      'Аллантоин',
      'Глицерин',
      'Ментол',
    ],
    image: '/images/cooling-mint-gel.jpg',
    price: 1300,
    discountedPrice: 1050,
    quantity: 0,
  },
  {
    id: '7038',
    slug: 'deep-repair-heel-socks',
    title: 'Deep Repair Heel Socks',
    fullName: 'Deep Repair Heel Socks with Moisturizing Gel',
    description: 'Носки с гелевым слоем для интенсивного увлажнения и восстановления кожи пяток во время сна.',
    usage: 'Надевайте носки на ночь после нанесения увлажняющего крема для ног.',
    ingredients: [
      'Гелевый увлажняющий слой',
      'Хлопковая ткань',
      'Витамин E',
      'Экстракт алоэ',
    ],
    image: '/images/deep-repair-heel-socks.jpg',
    price: 2500,
    discountedPrice: 1990,
    quantity: 0,
  },
]

export default function Page({ params }) {
  const { slug } = React.use(params);
  console.log(slug)
  const [tab, setTab] = useState('usage');
  const product = products.find((p) => p.slug === slug);
  const formattedPrice = useFormattedPrice(product?.price);
  const formattedDiscountedPrice = useFormattedPrice(product?.discountedPrice);
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
            <div className="flex flex-col justify-center">
              <h2 className="text-[20px] lg:text-xl ">{product.fullName}</h2>
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
              <button className="flex items-center gap-2 shadow w-[86px] md:w-[8.125rem] cursor-pointer text-[15px] lg:text-sm px-4 py-2 rounded-md hover:bg-gray-200">
                <ShoppingCart className="w-4 h-4" />
                В корзину
              </button>
            </div>
          </div>


          <div className="border-b flex gap-4 border-gray-200 mb-4 ">
            <button
              className={` py-2 text-sm ${tab === 'usage' ? 'border-b-2 text-[#404040] border-[#404040] ' : 'text-gray-500'}`}
              onClick={() => setTab('usage')}
            >
              Способ применения
            </button>
            <button
              className={` py-2 text-sm ${tab === 'ingredients' ? 'border-b-2 text-[#404040] border-[#404040] ' : 'text-gray-500'}`}
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