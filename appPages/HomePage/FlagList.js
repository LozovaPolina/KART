"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";

import { dealersData } from "../../data/flagsDilers";
import { useTranslations } from "next-intl";

import { API_URL } from "../../data/url";

const FlagItem = ({ imageSrc, countryName, onClick }) => {
  return (
    <div
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
      <span
        className="mt-2  text-[11px] sm:text-[15px]
          md:text-[20px] font-[400] text-center font-fira-sans"
      >
        {countryName}
      </span>
    </div>
  );
};

export default function FlagList() {
  const router = useRouter();
  const t = useTranslations("HomePage");

  const locale = useLocale();
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlagList = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${API_URL}/partners/dealers/`, {
          headers: {
            "Accept-Language": locale,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setDealers(data);
      } catch (error) {
        console.error(error);
        setDealers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFlagList();
  }, [locale]);

  return (
    <div className=" bg-flag-img w-full h-fit p-8">
      <h2 className="text-[33px] text-center font-[400] uppercase text-black font-fira-sans mb-6">
        {t("dealers.title")}
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
        {dealers.map((item) => (
          <FlagItem
            key={item.country}
            imageSrc={item.image}
            countryName={item.country}
            onClick={() => router.push(`/dealers`)}
          />
        ))}
      </div>
    </div>
  );
}
