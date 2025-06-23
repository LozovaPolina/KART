import HintNavigation from '../../shared/hint-navigation/HintNavigation';
import Title from '../../shared/ui/title/Title';
import React from 'react';
import GalerySection from './GalerySection';
import { useTranslations } from 'next-intl';

function GaleryPage() {
  const t = useTranslations("GaleryPage");

  return (
    <>
      <div className='flex justify-center'>
        <HintNavigation
          links={[
            { label: t("navigation.home"), href: "/" },
            { label: t("navigation.gallery"), href: "/galery" },
          ]}
        />
      </div>
      <section className='w-full mt-[30px]'>
        <div className="flex flex-col text-center items-center gap-4 max-w-[534px] mx-auto">
          <Title>{t("title")}</Title>
          <p>{t("description")}</p>
        </div>

        <GalerySection />
      </section>
    </>
  );
}

export default GaleryPage;