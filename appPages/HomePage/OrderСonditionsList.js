import Swiper from '../../shared/swiper/Swiper';
import React from 'react';

import swiperImg from "../../public/assets/image/swiperImg.png";
import handsImg from "../../public/assets/svg/hands.svg";
import Image from 'next/image';
import Title from '../../shared/ui/title/Title';
import { ButtonWithCircleLink } from '../../shared/ui/button/ButtonWithCircleLink';
import { useTranslations } from 'next-intl';

const orderConditionsKeys = [
  'orderConditions.condition1',
  'orderConditions.condition2',
  'orderConditions.condition3',
  'orderConditions.condition4'
];

function OrderСonditionsList() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex gap-4 w-full justify-between flex-wrap md:flex-nowrap">
      <div className="w-full md:w-[50%] rounded-2xl shadow p-8 flex flex-col gap-4">
        <div>
          <Title>
            <div className="flex gap-1 items-center">
              <Image src={handsImg} alt="hands" />
              {t('orderConditions.title')}
            </div>
          </Title>
          <p className="text-[#848484] text-[.6875rem]">
            {t('orderConditions.subtitle')}
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {orderConditionsKeys.map((key, i) => (
            <li
              key={i}
              className="relative pl-4 text-[#848484] text-[16px] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-1 before:rounded-full before:bg-gray-500"
            >
              {t(key)}
            </li>
          ))}
        </ul>

        <ButtonWithCircleLink
          href="/conditions"
          buttonText={t('orderConditions.button')}
          circleBg="green"
        />
      </div>

      <Swiper
        items={[
          <Image key={1} src={swiperImg} alt="beauty img" className="object-cover w-full h-full" />,
          <Image key={2} src={swiperImg} alt="beauty img" className="object-cover w-full h-full" />,
          <Image key={3} src={swiperImg} alt="beauty img" className="object-cover w-full h-full" />,
          <Image key={4} src={swiperImg} alt="beauty img" className="object-cover w-full h-full" />
        ]}
      />
    </div>
  );
}

export default OrderСonditionsList;