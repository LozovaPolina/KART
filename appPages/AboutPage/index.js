import HintNavigation from "../../shared/hint-navigation/HintNavigation";
import Text from "../../shared/ui/text/Text";
import Title from "../../shared/ui/title/Title";
import React from "react";
import logoImg from "../../public/assets/svg/logo-aboutPage.svg";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <main className='px-6 py-12 md:px-16'>
      <div className='w-full flex flex-col gap-6'>
        {/* Header */}
        <div
          className='p-8 rounded-xl'
          style={{
            background: 'linear-gradient(to left, white, #5EAC41)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className='flex justify-between'>
            <div className='text-white flex flex-col justify-center gap-4'>
              <HintNavigation
                className='text-white! mt-0!'
                links={[
                  { label: t('breadcrumbs.home'), href: '/' },
                  { label: t('breadcrumbs.about'), href: '/about' },
                ]}
              />
              <Title color='white'>{t('title')}</Title>
            </div>
            <Image className='hidden sm:block' src={logoImg} alt='logo' />
          </div>
        </div>

        {/* Description */}
        <section className='bg-[#F5F5F5] p-6 rounded-xl  shadow-[0px_2px_10px_rgba(0,0,0,0.1)] mb-10 flex flex-col gap-6'>
          <Text className='leading-normal text-[16px]!'>{t('description1')}</Text>
          <Text className='leading-normal text-[16px]!'>{t('description2')}</Text>
        </section>

        {/* Advantages List */}
        <section className='p-6 rounded-xl'>
          <h2 className='text-2xl font-semibold mb-4 text-[#848484]'>
            {t('benefits.title')}
          </h2>
          <ul className='list-disc list-inside space-y-2 text-[#848484]'>
            {t.raw('benefits.items', { returnObjects: true }).map((item, idx) => (
              <li key={idx} className="leading-normal text-[16px]!">{item}</li>
            ))}
          </ul>
        </section>

        {/* Education Block */}
        <section className='p-6 rounded-xl shadow-[0px_2px_10px_rgba(0,0,0,0.1)]'>
          <Text className='text-[1rem]! leading-normal'>
            {t('education')}
          </Text>
        </section>
      </div>
    </main>
  );
}
