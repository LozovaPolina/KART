import HintNavigation from '../../shared/hint-navigation/HintNavigation';
import Title from '../../shared/ui/title/Title';
import React from 'react';
import GalerySection from './GalerySection';

function GaleryPage() {
  return (
    <>

      <div className='flex justify-center'>
        <HintNavigation
          links={[
            { label: "Главная", href: "/" },
            { label: "Галерея", href: "/galery" },
          ]}
        />
      </div >
      <section className='w-full mt-[30px]'>
        <div className="flex flex-col text-center items-center gap-4 max-w-[534px] mx-auto">

          <Title>ИCТОРИЯ В ФОТОГРАФИЯХ</Title>
          <p> Лучшие кадры с мероприятий, обучающих встреч и рабочих процессов. Так мы создаём стиль, атмосферу и доверие.</p>
        </div>

        <GalerySection />

      </section>
    </>
  );
}

export default GaleryPage;