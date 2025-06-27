import React from 'react';
import footerLogog from "../../public/assets/svg/footer-logo.svg"
import Image from 'next/image';
import Link from 'next/link';
import { MapPinHouse, PhoneIncoming, CalendarClockIcon } from 'lucide-react';
import FooterNavigation from './FooterNavigation';
function Footer() {
  return (
    <footer className='w-full   mx-auto flex flex-col gap-6 md:gap-0 items-center md:flex-row md:items-start text-white justify-around  bg-[#96B87D]! mt-[9.375rem]! md:mt-[7.5rem]! py-6 px-12 pb-12'>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        <Image src={footerLogog} alt='logo' />
        <p className='text-[.9375rem]'>© Все права <br /> защищены KART</p>

        <div className='flex gap-2'>
          <Link href={'/'} className=' flex justify-center items-center rounded-full  w-10 h-10 bg-[#A0C287] shadow-2xl'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link>
          <Link href={'/'} className=' flex justify-center items-center rounded-full  w-10 h-10 bg-[#B4D69B] shadow-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>

          </Link>
          <Link href={'/'} className=' flex justify-center items-center rounded-full  w-10 h-10 bg-[#C8EAAF] shadow-2xl'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-youtube"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2 29.94 29.94 0 0 0-.46 5.58 29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2c1.71.42 8.59.42 8.59.42s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2 29.94 29.94 0 0 0 .46-5.58 29.94 29.94 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
            </svg>
          </Link>
        </div>

      </div>

      <div className='flex flex-col  text-[.9375rem] md:items-start items-center text-center md:text-start'>
        <div className="flex flex-col gap-4 ">
          <h5 className='text-white text-[1.5625rem]'>Контакти</h5>
          <div className="flex flex-col gap-1 items-center md:items-start">
            <div className='flex gap-2 '><MapPinHouse className='w-[1.25rem]' /> <p>Сахарова, 11, Рішон Ле-Ціон</p></div>
            <div className='flex gap-2'><PhoneIncoming className='w-[1.25rem]' /> <p>+972 54 262 6027</p></div>
            <div className='flex gap-2'><CalendarClockIcon className='w-[1.25rem]' /><p>Вс-Чт 9:00-17:00</p></div>

          </div>


        </div>

      </div>
      <div className='flex flex-col  text-[.9375rem] items-center md:items-start'>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h5 className='text-white text-[1.5625rem]'>Линии</h5>
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