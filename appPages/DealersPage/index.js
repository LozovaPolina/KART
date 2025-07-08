"use client";

import { Globe, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import facebookImg from "../../public/assets/svg/facebook.svg";
import instaImg from "../../public/assets/svg/insta.svg";
import Image from "next/image";
import { Link } from "../../i18n/navigation";
import Title from "../../shared/ui/title/Title";
import Button from "../../shared/ui/button/Button";
import HintNavigation from "../../shared/hint-navigation/HintNavigation";
import MapLocation from "../../shared/map-location/MapLocation";
import { dealersData } from "../../data/flagsDilers";

import { useState, useEffect } from "react";
import { API_URL } from "../../data/url";

import { useLocale } from "next-intl";

export default function DealersPage() {
  const locale = useLocale();
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlagList = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${API_URL}/dealers/`, {
          headers: {
            "Accept-Language": locale,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        console.log(data);
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
    <div className="w-full mx-auto flex flex-col gap-4">
      <div className="flex flex-col gap-6 items-center">
        <HintNavigation
          links={[
            { label: "Главная", href: "/" },
            { label: "Представители", href: "/dealers" },
          ]}
        />
        <Title className="text-center">ОФИЦИАЛЬНЫЕ ДИЛЕРЫ</Title>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 sm:shadow-[0px_2px_10px_rgba(0,0,0,0.1)] h-fit  sm:p-8 rounded-xl">
        {dealers.map((dealer, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="rounded-lg space-y-2 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
              <div className="flex justify-between rounded-lg shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-3 w-full bg-[#F3F3F3]">
                <div className="flex items-center gap-2 w-full">
                  <Image
                    src={dealer.image}
                    alt="flag"
                    width={94}
                    height={60}
                    className="rounded-lg max-w-[110px] max-h-[80px] w-full h-full object-cover"
                  />
                  <div className="flex flex-col w-full">
                    <h4 className="w-full max-w-[142px]">{dealer.country}</h4>
                    <p className="w-full max-w-[150px] truncate">
                      {dealer.company_name}
                    </p>
                    <Link
                      href={dealer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-1 text-[#96B87D] text-[15px] w-full items-center"
                    >
                      <Globe className="cursor-pointer" size={18} />
                      <span>Веб сайт</span>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {dealer.instagram && (
                    <Link
                      href={dealer.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center rounded-lg p-1 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]"
                    >
                      <Image
                        width={25}
                        height={25}
                        src={instaImg}
                        alt="insta"
                        className="cursor-pointer"
                      />
                    </Link>
                  )}

                  {dealer.facebook && (
                    <Link
                      href={dealer.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center rounded-lg p-1 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]"
                    >
                      <Image
                        width={25}
                        height={25}
                        src={facebookImg}
                        alt="insta"
                        className="cursor-pointer"
                      />
                    </Link>
                  )}

                  {dealer.whats_app && (
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center rounded-lg p-1 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]"
                    >
                      <Image
                        width={25}
                        height={25}
                        src={facebookImg}
                        alt="whats_app"
                        className="cursor-pointer"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="shadow-[0px_2px_10px_rgba(0,0,0,0.1)] rounded-lg bg-[#F5F5F580] flex flex-col gap-1 p-2">
              <p className="flex items-center gap-2 text-sm">
                <MapPin size={18} /> <span>{dealer.adress}</span>
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={18} /> <span>{dealer.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={18} /> <span>{dealer.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка вынесена из grid */}
      <div className="flex justify-center mt-4">
        <Link href="/criteria-diler">
          <Button className=" hover:shadow text-white py-2 px-6 rounded-full text-sm">
            Как стать Дилером KART
          </Button>
        </Link>
      </div>

      <MapLocation />
    </div>
  );
}
