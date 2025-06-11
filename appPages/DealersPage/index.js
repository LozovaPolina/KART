import { Facebook, Globe, Instagram, LocateIcon, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
// import { FaFacebookF, FaInstagram } from "react-icons/fa";
// import { FiGlobe, FiMail, FiPhone } from "react-icons/fi";
import ukraineImg from '../../public/assets/image/flags/ukraine.png';
import facebookImg from '../../public/assets/svg/facebook.svg';
import instaImg from '../../public/assets/svg/insta.svg';
import Image from "next/image";
import Link from "next/link";
import Title from "../../shared/ui/title/Title";
import Button from "../../shared/ui/button/Button";
import HintNavigation from "../../shared/hint-navigation/HintNavigation";
import MapLocation from "../../shared/map-location/MapLocation";
const dealers = [
  {
    country: "Украина",
    company: "Название компании",
    city: "Днепр, ул. Ивана Акинфиева 18 офис 512",
    phone: "+38 067 565 96 73",
    email: "Почта",
    website: '#',
  },
  {
    country: "Казахстан",
    company: "Центр Подологии",
    city: "Алматы ул.Сейфуллина 155",
    phone: "+7 705 649 81 33, +7 727 311 63 08",
    email: "Почта",
    website: '#',
  },
  {
    country: "Румыния",
    company: "Mail Rai",
    city: "SRL Бухарест ул.Эндрии Иоанчу N85, сектор 2",
    phone: "+7 705 649 81 33, +7 727 311 63 08",
    email: "Почта",
    website: '#',
  },
  {
    country: "Италия",
    company: "Название компании",
    city: "Piazza Giovanni Falcone 21A San Giovanni",
    phone: "+39 351 86 89 90",
    email: "Почта",
    website: '#',
  },
  {
    country: "Молдавия",
    company: "ARTESTETICA",
    city: "SRL г. Кишинев 31 Августа 1989 / 46",
    phone: "+359 88 322 0211",
    email: "Почта",
    website: '#',
  },
  {
    country: "Болгария",
    company: "Antoanette Co Ltd",
    city: "Antoanette Co Ltd София ул. Старинна, 13",
    phone: "+359 88 322 0211",
    email: "Почта",
    website: '#',
  },
  {
    country: "Греция",
    company: "Alchemy Cosmetics",
    city: "Каллифея Сандус 103",
    phone: "+309 085 125 32",
    email: "Почта",
    website: '#',
  },
  {
    country: "Польша",
    company: "Название компании",
    city: "Варшава Allee Ерозолимские 101 п.1",
    phone: "+48 583 368 994",
    email: "Почта",
    website: '#',
  },
  {
    country: "Чехия",
    company: "Название компании",
    city: "Прага Виглава Намести 87/9",
    phone: "+420 775 980 362",
    email: "Почта",
    website: '#',
  },
];

export default function DealersPage() {
  return (
    <div className="p-4 max-w-[1438px] w-full  mx-auto flex flex-col gap-2 ">
      <div className="flex flex-col gap-6 justify-center items-center">
        <HintNavigation links={[
          { label: 'Главная', href: '/' },
          { label: 'Представители', href: '/dealers' },
        ]} />
        <Title className="text-center">ОФИЦИАЛЬНЫЕ ДИЛЕРЫ</Title>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-flag-img  h-fit p-8 rounded-xl">
        {dealers.map((dealer, index) => (
          <div key={index} className="flex flex-col gap-2 ">
            <div

              className="rounded-lg space-y-2 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]"
            >
              <div className="flex justify-between rounded-lg shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-3 w-full bg-[#F3F3F3]">

                <div className="flex items-center gap-2 w-full">

                  <Image src={ukraineImg} alt="flag" className="rounded-lg max-w-[110px] max-h-[80px] w-full h-full object-cover" />
                  <div className="flex flex-col w-full   ">
                    <h4 className="w-full max-w-[142px] ">{dealer.country}</h4>
                    <p className="w-full max-w-[142px] ">{dealer.company}</p>
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
                  <Link href={'#'} target="_blank"
                    rel="noopener noreferrer" className="flex justify-center  items-center rounded-lg p-1 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
                    <Image src={instaImg} alt="insta" className="cursor-pointer" />
                  </Link>
                  <Link href={'#'} target="_blank"
                    rel="noopener noreferrer" className="flex justify-center  items-center rounded-lg p-1 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
                    <Image src={facebookImg} alt="facebook" className="cursor-pointer " />
                  </Link>



                </div>
              </div>
            </div>

            <div className="shadow-[0px_2px_10px_rgba(0,0,0,0.1)] rounded-lg bg-[#F5F5F580] flex flex-col justify-items-start gap-1 p-2">
              <p className="flex items-center gap-2 text-sm">
                <MapPin size={18} /> <span>{dealer.city}</span>
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
      <div className="text-center mt-8">
        <Button className="bg-[#A0C287] hover:shadow text-white py-2 px-4 rounded-full text-sm">
          Как стать Дилером KART
        </Button>
      </div>
      <MapLocation />
    </div>
  );
}
