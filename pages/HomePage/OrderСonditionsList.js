import Swiper from '@/shared/swiper/Swiper';
import React from 'react';

import swiperImg from "../../public/assets/image/swiperImg.png";
import handsImg from "../../public/assets/svg/hands.svg";
import Image from 'next/image';
import Title from '@/shared/title/Title';
import { ButtonWithCircleLink } from '@/shared/button/ButtonWithCircleLink';

const orderConditions = [
  "Минимальный заказ 200€ (232$) + 35€ доставка",
  "Заказ от 300€ (348$) — доставка за счет компании",
  "Заказ от 500€ (580$) — доставка за счет компании + дополнительная скидка 5%",
  "Заказ от 1000€ (1160$) — доставка за счет компании + дополнительная скидка 10%",
];

function OrderСonditionsList() {
  return (
    <div className='flex gap-4 w-full justify-between flex-wrap md:flex-nowrap'>
      <div className='w-full md:w-[50%] rounded-2xl shadow p-8 flex flex-col gap-4'>
        <div>
          <Title>
            <div className='flex gap-1 items-center'>
              <Image src={handsImg} alt='hands' />
              УСЛОВИЯ ЗАКАЗОВ
            </div>

          </Title>
          <p className='text-[#848484] text-[.6875rem]'>Скидка 20% на любую из новинок*</p>
        </div>


        <ul className='flex flex-col gap-4'>
          {orderConditions.map((item, i) => (<li
            key={i}
            className="relative pl-4 text-[#848484] text-[16px] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-1 before:rounded-full before:bg-gray-500"
          >
            {item}
          </li>))}
        </ul>

        <ButtonWithCircleLink buttonText='Детальнее' circleBg='green'  > </ButtonWithCircleLink>

      </div>

      <Swiper items={[<Image key={1} src={swiperImg} alt='buity img' className='object-cover w-full h-full' />, <Image key={2} src={swiperImg} alt='buity img' className='object-cover w-full h-full' />, <Image key={3} src={swiperImg} alt='buity img' className='object-cover w-full h-full' />, <Image key={4} src={swiperImg} alt='buity img' className='object-cover w-full h-full' />,]} />

    </div>
  );
}

export default OrderСonditionsList;