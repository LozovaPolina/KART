'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';

import { dealersData } from "../../data/flagsDilers"


const FlagItem = ({ imageSrc, countryName, onClick }) => {
  // const [hoveredCountry, setHoveredCountry] = useState(null);

  // const handleHover = (country) => setHoveredCountry(country);
  // const handleLeave = () => setHoveredCountry(null);

  return (
    <div
      // onMouseEnter={() => handleHover(countryName)}
      // onMouseLeave={handleLeave}
      // onTouchStart={() => handleHover(countryName)}  // For mobile devices
      // onTouchEnd={handleLeave}                      // For mobile devices
      onClick={onClick}
      className="max-w-[150px] min-w-[70px]  w-full relative min-h-[80px] p-[10px] gap-[10px] rounded-[10px] bg-[#F3F3F3] shadow cursor-pointer hover:shadow-lg transition-all flex flex-col items-center justify-center"
    >
      <Image
        src={imageSrc}
        alt={countryName}
        width={78}
        height={50}
        className="rounded  "
      />
      <span className="mt-2  text-[11px] sm:text-[15px]
          md:text-[20px] font-[400] text-center font-fira-sans">{countryName}</span>
      {/* {hoveredCountry && (
        <div className="absolute z-50 -top-24 left-[30px] mb-4 p-4 bg-white rounded shadow max-w-[300px]">
          <p className="font-fira-sans text-[15px] font-[400]">
            Контакты дилера: <br />
            <strong>{hoveredCountry}</strong><br />
            Тел: +00 000 000 00<br />
            Email: example@mail.com
          </p>
        </div>
      )} */}
    </div>
  );
};

export default function FlagList() {

  const router = useRouter()



  return (
    <div className=" bg-flag-img w-full h-fit p-8">
      <h2 className="text-[33px] text-center font-[400] uppercase text-black font-fira-sans mb-6">
        ОФИЦИАЛЬНЫЕ ДИЛЕРЫ KART
      </h2>


      <div
        className="
          grid 
          grid-cols-3 
          sm:grid-cols-4 
          lg:grid-cols-6 
          gap-2
          md:gap-4
          lg:gap-6
          max-w-[1050px]
          mx-auto
        "
      >
        {dealersData.map((item) => (
          <FlagItem
            key={item.name}
            imageSrc={item.flag}
            countryName={item.name}
            onClick={() => router.push(`/dealers`)}
          />
        ))}
      </div>
    </div>
  );
}