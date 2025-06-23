import React from "react";

import { MapPin, Phone, Send } from "lucide-react";
import { ButtonWithCircleLink } from "../../shared/ui/button/ButtonWithCircleLink";
import HintNavigation from "../../shared/hint-navigation/HintNavigation";

export default function ContactPage() {
  return (
    <>
      <div className='flex justify-center'>
        <HintNavigation
          links={[
            { label: "Главная", href: "/" },
            { label: "Контакты", href: "/contacts" },
          ]}
        />
      </div>

      <section className='bg-[#F5F5F5]  py-10 px-4 md:px-10'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-8 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-8 rounded-xl'>
          {/* Form */}
          <form className='order-1 md:order-2 space-y-4 bg-[#FFFFFF] p-4 sm:p-6 rounded-xl'>
            <div className='relative w-full'>
              <label
                htmlFor='name'
                className='absolute -top-1 left-5 bg-white px-1 text-sm text-gray-500'
              >
                Ваше имя *
              </label>
              <input
                id='name'
                type='text'
                className='w-full border border-[#E2E2E2] rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500'
              />
            </div>
            <div className='relative w-full'>
              <label
                htmlFor='email'
                className='absolute -top-1 left-5 bg-white px-1 text-sm text-gray-500'
              >
                E-mail *
              </label>
              <input
                id='email'
                type='email'
                className='w-full border border-[#E2E2E2] rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500'
              />
            </div>
            <div className='relative w-full'>
              <label
                htmlFor='phone'
                className='absolute -top-1 left-5 bg-white px-1 text-sm text-gray-500'
              >
                Номер телефона
              </label>
              <input
                id='phone'
                type='tel'
                className='w-full border border-[#E2E2E2] rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500'
              />
            </div>
            <div className='relative w-full'>
              <label
                htmlFor='message'
                className='absolute -top-1 left-5 bg-white px-1 text-sm text-gray-500'
              >
                Вопрос или сообщение
              </label>
              <textarea
                id='message'
                className='w-full border border-[#E2E2E2] rounded-md px-4 py-2 mt-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-500'
              ></textarea>
            </div>
            <ButtonWithCircleLink
              type="submit"
              buttonClassName='w-[90%]'
              buttonText={"Отправить"}
            />
          </form>

          {/* Contact Info */}
          <div className='order-2 md:order-1'>
            <h2 className='text-2xl  mb-1'>
              <span className='font-semibold'>Контактная</span> Форма
            </h2>
            <h3 className='text-xl mb-4'>Для Быстрого Общения</h3>
            <p className='text-[#848484] mb-6'>
              Мы открыты к диалогу. Заполните форму ниже, и мы свяжемся с вами.
            </p>

            <div className='space-y-4 text-sm'>
              <div className='flex gap-2 items-center'>
                <MapPin className='text-[#96B87D] mt-1' />
                <div>
                  <p className='font-sm text-[#848484]'>Адрес:</p>
                  <p>Район: Чиланзар, ул. Джавда Сахарова,11</p>
                </div>
              </div>
              <div className='flex t gap-2 items-center'>
                <Phone className='text-[#96B87D]' />
                <div>
                  <p className='font-sm text-[#848484]'>Номер тел.</p>
                  <p>tel: +998 55 5059944</p>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <Send className='text-[#96B87D]' />
                <div>
                  <p className='font-sm text-[#848484]'>TG/ WA / Viber</p>
                  <p>tel: +998 55 5779320</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className='max-w-6xl mx-auto mt-10 rounded-xl overflow-hidden shadow-lg'>
          <iframe
            title='Google Map with Marker'
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12089.738127725638!2d-73.9851304!3d40.758896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d2996c5f%3A0x3d6f8d6c917f9e4e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1717616158731!5m2!1sen!2sus'
            className='w-full h-[400px] border-0'
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>
    </>
  );
}
