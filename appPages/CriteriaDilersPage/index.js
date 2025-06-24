import { ButtonWithCircleLink } from '../../shared/ui/button/ButtonWithCircleLink';
import React from 'react';



import { criteriaDilers } from "../../data/criteriaDilers"
import { useTranslations } from 'next-intl';

export default function CriteriaDilersPage() {
  const t = useTranslations('CriteriaDilersPage');

  return (
    <section className='flex flex-col gap-10 items-center'>
      <div className='flex flex-wrap justify-center sm:gap-x-6 gap-y-12 sm:gap-y-18 h-fit p-8 rounded-xl'>
        {criteriaDilers(t).map((item, index) => (
          <div
            key={index}
            className='flex flex-col gap-2 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]'
          >
            <div className='flex flex-col justify-between rounded-lg space-y-2 shadow-[0_2px_10px_rgba(0,0,0,0.1)] relative'>
              <div className='flex justify-between rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.1)] p-3 w-full bg-white relative text-center'>
                <div className='flex items-center gap-2 w-full'>
                  <div className='flex flex-col w-full'>
                    <h3 className='font-semibold text-lg mb-1'>{item.title}</h3>
                  </div>
                </div>
                <div className='w-8 h-8 bg-[#43B549] text-white rounded-full flex items-center justify-center font-bold absolute -top-4 left-1/2 -translate-x-1/2'>
                  {item.number}
                </div>
              </div>
            </div>

            <div className='shadow-[0_2px_10px_rgba(0,0,0,0.1)] text-center p-4 rounded-lg bg-[#F5F5F580] flex flex-col justify-between gap-1 flex-grow h-full'>
              <p className='text-[#404040] text-sm flex-grow'>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <ButtonWithCircleLink
        href='/dilers-form'
        buttonText={t('sendRequest')}
        buttonClassName='bg-[#81D742]'
      />
    </section>
  );
}

