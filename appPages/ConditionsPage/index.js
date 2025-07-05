import HintNavigation from '../../shared/hint-navigation/HintNavigation';
import Text from '../../shared/ui/text/Text';
import Title from '../../shared/ui/title/Title';
import Image from 'next/image';
import React from 'react';
import logoImg from "../../public/assets/svg/logo-aboutPage.svg";
import { Link } from "../../i18n/navigation";
import { useTranslations } from 'next-intl';

export default function ConditionsPage() {
  const t = useTranslations('ConditionsPage');

  return (
    <main className='sm:px-6 py-12 md:px-16'>
      <div className='w-full flex flex-col gap-6'>
        {/* Banner */}
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
                  { label: t('breadcrumbs.conditions'), href: '/conditions' },
                ]}
              />
              <Title color='white'>{t('pageTitle')}</Title>
            </div>
            <Image className='hidden sm:block' src={logoImg} alt='logo' />
          </div>
        </div>

        {/* Section 1 */}
        <section className='p-4 sm:p-6 rounded-xl flex flex-col gap-4 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]'>
          <Text className='text-[16px]! leading-normal'>{t('masterKart')}</Text>
          <Text className='text-[16px]! leading-normal'>
            {t('pedicureMaster')}{' '}
            <Link href='/' className='text-[#49BA4A]'>
              {t('linkText')}
            </Link>
          </Text>
          <Text className='text-[16px]! leading-normal'>{t('retailClient')}</Text>
        </section>

        {/* Section 2 */}
        <section className='p-2 sm:p-6 rounded-xl flex flex-col gap-4'>
          <h2 className='text-2xl font-semibold text-[#848484]'>
            {t('conditionsTitle')}
          </h2>
          <ul className='list-disc list-inside space-y-2 text-[#848484] text-sm sm:text-lg'>
            {t.raw('conditionsList', { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <Text className='text-[16px]! leading-normal'>
            {t('dealerNote')}{' '}
            <Link href='/' className='text-[#49BA4A]'>
              {t('linkText')}
            </Link>
          </Text>
        </section>

        {/* Section 3 */}
        <section className='p-6 rounded-xl flex flex-col gap-4 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]'>
          <Text className='text-[16px]! leading-normal'>{t('orderProcessing')}</Text>
          <Text className='text-[16px]! leading-normal'>{t('contactDetailsNote')}</Text>
        </section>

        <Text className='text-[16px]! leading-normal' >{t('contactDetailsNote')}</Text>
      </div>
    </main>
  );
}

