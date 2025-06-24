import Image from 'next/image';
import React from 'react';
const feetoItems = [
  {
    key: 1,
    imgSrc: profeetsImg,
    imgAltKey: 'feetolines.altProfessionalFeet',
    titleKey: 'feetolines.titleProfessionalFeet',
    categoryKey: 'feetolines.categoryPedicure',
  },
  {
    key: 2,
    imgSrc: feetocareImg,
    imgAltKey: 'feetolines.altFeetoCare',
    titleKey: 'feetolines.titleFeetoCare',
    categoryKey: 'feetolines.categoryPedicure',
  },
  {
    key: 3,
    imgSrc: karttoolsImg,
    imgAltKey: 'feetolines.altKartTools',
    titleKey: 'feetolines.titleKartTools',
    categoryKey: 'feetolines.categoryKart',
  },
];
export default function FeetoLinesList() {
  const t = useTranslations("HomePage");

  return (
    <>
      {feetoItems.map(({ key, imgSrc, imgAltKey, titleKey, categoryKey }) => (
        <div
          key={key}
          className="feetolines__list-item select-none"
          draggable={false}
        >
          <Image
            className="feetolines__item-img select-none"
            src={imgSrc}
            alt={t(imgAltKey)}
          />
          <div className="feetolines__item-sticker">
            <h4 className="feetolines__item-title">{t(titleKey)}</h4>
            <p className="feetolines__item-category">{t(categoryKey)}</p>
          </div>
        </div>
      ))}
    </>
  );
};