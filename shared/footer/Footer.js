import React from 'react';
import footerLogog from "../../public/assets/svg/logotype.svg"
import Image from 'next/image';
import Link from 'next/link';
import { MapPinHouse, PhoneIncoming, CalendarClockIcon } from 'lucide-react';
import FooterNavigation from './FooterNavigation';
import instagram from '../../public/assets/svg/insta.svg';
import gmail from '../../public/assets/svg/gmail-icon.svg';
import youtube from '../../public/assets/svg/youtube.svg';
function Footer() {
  return (
    <footer className='w-full shadow-[inset_0px_2px_10px_rgba(0,0,0,0.1)]  mx-auto flex flex-col gap-6 md:gap-0 items-center md:flex-row md:items-start text-[#848484] justify-around  bg-white mt-[9.375rem]! md:mt-[7.5rem]! py-6 px-12 pb-12'>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        <Image src={footerLogog} alt='logo' className='w-[110px]' />
        <p className='text-[.9375rem]'>© Все права <br /> защищены KART</p>

        <div className='flex gap-2'>
          <Link href={'/'} className=' flex justify-center items-center rounded-full  w-10 h-10 bg-[#F5F5F5] shadow-2xl'>
            <Image src={instagram} alt='instagram' className='w-5 h-5' />
          </Link>
          <Link href={'/'} className=' flex justify-center items-center rounded-full  w-10 h-10 bg-[#F5F5F5] shadow-2xl'>
            <Image src={gmail} alt='gmail' className='w-5 h-5' />

          </Link>
          <Link href={'/'} className=' flex justify-center items-center rounded-full  w-10 h-10 bg-[#F5F5F5] shadow-2xl'>
            <Image src={youtube} alt='youtube' className='w-5 h-5' />
          </Link>
        </div>
      </div>

      <div className='flex flex-col  text-[.9375rem] md:items-start items-center text-center md:text-start'>
        <div className="flex flex-col gap-4 ">
          <h5 className='text-[#848484] text-[1.5625rem]'>Контакти</h5>
          <div className="flex flex-col gap-1 items-center md:items-start">
            <div className='flex gap-2 '><MapPinHouse className='w-[1.25rem]' /> <p>Сахарова, 11, Рішон Ле-Ціон</p></div>
            <div className='flex gap-2'><PhoneIncoming className='w-[1.25rem]' /> <p>+972 54 262 6027</p></div>
            <div className='flex gap-2'><CalendarClockIcon className='w-[1.25rem]' /><p>Вс-Чт 9:00-17:00</p></div>

          </div>


        </div>

      </div>
      <div className='flex flex-col  text-[.9375rem] items-center md:items-start'>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h5 className='text-[#848484] text-[1.5625rem]'>Линии</h5>
          <div className="flex flex-col gap-1 items-center md:items-start">
            <p>Professional Feet</p>
            <p>Feeto Care</p>
            <p>Сопутствующие материалы</p>
          </div>
        </div>
      </div>

      <FooterNavigation />
    </footer>
  );
}

export default Footer;