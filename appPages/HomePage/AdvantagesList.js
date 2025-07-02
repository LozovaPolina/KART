import { useTranslations } from 'next-intl';
import Image from 'next/image';
import covid from '../../public/assets/svg/advantages-list/covid_personal-hygiene-hand-liquid-soap.svg';
import water from '../../public/assets/svg/advantages-list/ci_water-drop.svg';
import park from '../../public/assets/svg/advantages-list/icon-park-outline_foot.svg';
import shield from '../../public/assets/svg/advantages-list/lucide_shield.svg';
import outline_foot from '../../public/assets/svg/advantages-list/icon-park-outline_foot.svg';
import proicons_cart from '../../public/assets/svg/advantages-list/proicons_cart.svg';
import hand from '../../public/assets/svg/advantages-list/hand.svg';
import time from '../../public/assets/svg/advantages-list/icon-park-outline_time.svg';
import React from 'react';
const icons = [
  <Image key={1} src={covid} alt='covid' className='advantages__item-icon' />,

  <Image key={2} src={water} alt='water' className='advantages__item-icon' />,
  <Image key={3} src={park} alt='park' className='advantages__item-icon' />,
  <Image key={4} src={shield} alt='shield' className='advantages__item-icon' />,
  <Image key={5} src={time} alt='time' className='advantages__item-icon' />,
  <Image key={6} src={covid} alt='covid' className='advantages__item-icon' />,
  <Image key={7} src={proicons_cart} alt='proicons_cart' className='advantages__item-icon' />,
  <Image key={8} src={hand} alt='hand' className='advantages__item-icon' />,

];

function AdvantagesList() {
  const t = useTranslations('HomePage');
  const advantagesItems = [
    t('advantages1'),
    t('advantages2'),
    t('advantages3'),
    t('advantages4'),
    t('advantages5'),
    t('advantages6'),
    t('advantages7'),
    t('advantages8')
  ];
  return (
    <section className='advantages'>
      <div className='wrap marquee-container container'>
        <h2 className='advantages__title'>
          {t('advantagesTitle')}
          <span className='advantages__title--highlight'> {t('advantagesTitleHighlight')}</span>
        </h2>
        <div className='advantages__list marquee'>
          {advantagesItems.map((text, index) => (
            <div key={index} className='advantages__item'>
              {icons[index]}
              <p className="advantages__text">
                {text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default AdvantagesList;