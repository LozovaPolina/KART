// import video from "../public/assets/video/hero-vid.mp4";
import profeetsImg from "../../public/assets/image/profeets.png";
import magnifyingGlasImg from "../../public/assets/image/male_hand_holding_magnifying_glas.png";
import feetocareImg from "../../public/assets/image/feetocare.png";
import karttoolsImg from "../../public/assets/image/karttools.png";
import kartProfessionalImg from "../../public/assets/image/kart-professional.png";
import our_academyImg from "../../public/assets/image/our_academy.png";
import certificateImg from "../../public/assets/image/certificate.png";
import Swiper from "../../shared/swiper/Swiper";
import Image from "next/image";
import InstructorsList from "./InstructorsList";
import FlagList from "./FlagList";
import BlogList from "./BlogLst";
import OrderСonditionsList from "./OrderСonditionsList";
import { ButtonWithCircleLink } from "../../shared/ui/button/ButtonWithCircleLink";
import Title from "../../shared/ui/title/Title";
import Text from "../../shared/ui/text/Text";
import catalogListIcon from "../../public/assets/svg/catalogList.svg"
import listCardIcon from "../../public/assets/svg/listCard.svg"
import pdfIcon from "../../public/assets/svg/pdfIcon.svg"
import priceListIcon from "../../public/assets/svg/priceList.svg"
import videoIcon from "../../public/assets/svg/videoIcon.svg"
import protocolcon from "../../public/assets/svg/protocolcon.svg"
import { BadgePercent, FileText, ShoppingBag } from "lucide-react";
import Link from "next/link";
const items = [
  <video
    className="w-full h-full rounded-[1.25rem]"
    autoPlay
    muted
    loop
    playsInline
    key={1}
  >
    <source src="/assets/video/hero-vid.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>,
  <video
    className="w-full h-full rounded-[1.25rem]"
    autoPlay
    muted
    loop
    playsInline
    key={2}
  >
    <source src="/assets/video/hero-vid.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>,
  <video
    className="w-full h-full rounded-[1.25rem]"
    autoPlay
    muted
    loop
    playsInline
    key={3}
  >
    <source src="/assets/video/hero-vid.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>,
];
const feetolines = [
  <div key={1} className="feetolines__list-item  select-none " draggable={false}>
    <Image className="feetolines__item-img select-none" src={profeetsImg} alt="Feeto care" />
    <div className="feetolines__item-sticker">
      <h4 className='feetolines__item-title'>Professional Feet</h4>
      <p className='feetolines__item-category'>Педикюр</p>
    </div>
  </div>,
  <div key={2} className='feetolines__list-item select-none ' draggable={false}>
    <Image className='feetolines__item-img select-none' src={feetocareImg} alt='Feeto care' />
    <div className='feetolines__item-sticker'>
      <h4 className='feetolines__item-title'>Feeto Care</h4>
      <p className='feetolines__item-category'>Педикюр</p>
    </div>
  </div>,
  <div key={3} className='feetolines__list-item select-none ' draggable={false}>
    <Image className='feetolines__item-img select-none' src={karttoolsImg} alt='Feeto care' />
    <div className='feetolines__item-sticker'>
      <h4 className='feetolines__item-title'>Сопутствующие материалы</h4>
      <p className='feetolines__item-category'>KART</p>
    </div>
  </div>,
];
function HomePage() {

  return (
    <div className='page'>

      <section className="">
        <div className=" mb-7 relative">
          <Swiper
            items={items}
            className="hero__slider"
            itemsLength={items.length}
          />
        </div>
      </section>
      <section className='advantages'>
        <div className='wrap marquee-container container'>
          <h2 className='advantages__title'>
            Преимущества
            <span className='advantages__title--highlight'> препаратов KART</span>
          </h2>
          <div className='advantages__list marquee'>
            <div className='advantages__item'>
              <svg
                className='advantages__item-icon'
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
              >
                <path
                  d='M23.125 11.25H20.625M20.625 11.25H18.125M20.625 11.25V8.75M20.625 11.25V13.75'
                  stroke='#96B87D'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
                <path
                  d='M15 6.96755L14.315 7.60755C14.4027 7.70142 14.5088 7.77626 14.6266 7.82742C14.7444 7.87859 14.8715 7.90499 15 7.90499C15.1285 7.90499 15.2556 7.87859 15.3734 7.82742C15.4912 7.77626 15.5973 7.70142 15.685 7.60755L15 6.96755ZM3.315 17.1026C3.37685 17.2115 3.45991 17.307 3.55929 17.3833C3.65867 17.4597 3.77234 17.5153 3.89358 17.5469C4.01482 17.5786 4.14118 17.5856 4.26518 17.5676C4.38918 17.5496 4.50832 17.5069 4.61554 17.442C4.72275 17.3772 4.81589 17.2915 4.88942 17.19C4.96296 17.0886 5.01541 16.9734 5.04368 16.8513C5.07195 16.7292 5.07546 16.6027 5.054 16.4793C5.03254 16.3558 4.98655 16.2379 4.91875 16.1326L3.315 17.1026ZM8.17125 20.2138C8.08654 20.1209 7.98403 20.046 7.8698 19.9936C7.75557 19.9412 7.63196 19.9122 7.50632 19.9085C7.38068 19.9048 7.25557 19.9264 7.13844 19.972C7.02131 20.0176 6.91455 20.0863 6.8245 20.174C6.73446 20.2617 6.66296 20.3666 6.61428 20.4825C6.56559 20.5984 6.54071 20.7228 6.54111 20.8485C6.5415 20.9742 6.56717 21.0986 6.61659 21.2141C6.666 21.3297 6.73815 21.4342 6.82875 21.5213L8.17125 20.2138ZM3.4375 11.6476C3.4375 8.0163 5.0225 5.77255 6.9825 5.0038C8.93875 4.23755 11.675 4.78505 14.315 7.60755L15.685 6.32755C12.7 3.13505 9.18625 2.12755 6.29875 3.25755C3.415 4.38755 1.5625 7.49005 1.5625 11.6476H3.4375ZM19.3875 24.9501C21.2537 23.4363 23.4887 21.4076 25.2662 19.1413C27.025 16.8988 28.4375 14.2926 28.4375 11.6451H26.5625C26.5625 13.6601 25.4625 15.8501 23.79 17.9838C22.135 20.0951 20.02 22.0238 18.2075 23.4938L19.3875 24.9501ZM28.4375 11.6451C28.4375 7.4888 26.585 4.3863 23.7 3.25755C20.8125 2.1263 17.3 3.13255 14.315 6.3263L15.685 7.60755C18.325 4.78505 21.0612 4.2363 23.0175 5.00255C24.9775 5.77005 26.5625 8.01505 26.5625 11.6451H28.4375ZM10.6125 24.9513C12.2 26.2413 13.3025 27.1876 15 27.1876V25.3126C14.0962 25.3126 13.5337 24.9076 11.7925 23.4951L10.6125 24.9513ZM18.2075 23.4938C16.4663 24.9063 15.9038 25.3126 15 25.3126V27.1876C16.6975 27.1876 17.8013 26.2413 19.3888 24.9513L18.2075 23.4938ZM4.92 16.1326C3.98375 14.5876 3.4375 13.0688 3.4375 11.6476H1.5625C1.5625 13.5376 2.2825 15.3976 3.315 17.1026L4.92 16.1326ZM11.7925 23.4951C10.5235 22.4717 9.3144 21.3761 8.17125 20.2138L6.82875 21.5213C8.02173 22.7373 9.28596 23.8826 10.6125 24.9513L11.7925 23.4951Z'
                  fill='#96B87D'
                />
              </svg>
              <p className='advantages__text'>
                Решают многие проблемы
                <br />
                кожи рук, ног и ногтей
              </p>
            </div>
            <div className='advantages__item'>
              <svg
                className='advantages__item-icon'
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
              >
                <path
                  d='M20 16.7313C20.0024 18.2534 19.4114 19.7165 18.3525 20.81C17.7628 21.4155 17.0441 21.8804 16.25 22.17M23.75 17.115C23.75 8.89375 15 2.5 15 2.5C15 2.5 6.25 8.89375 6.25 17.115C6.25 19.5375 7.17125 21.8613 8.8125 23.575C10.4538 25.2888 12.68 26.25 15 26.25C17.32 26.25 19.5463 25.2875 21.1875 23.575C22.8288 21.8625 23.75 19.5375 23.75 17.1137'
                  stroke='#96B87D'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <p className='advantages__text'>
                Устраняют сухость
                <br />
                трещины и повреждения
              </p>
            </div>
            <div className='advantages__item'>
              <svg
                className='advantages__item-icon'
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
              >
                <path
                  d='M11.8748 5C12.9786 9.92438 13.6142 20.5231 8.31669 22.8863C8.01606 23.0838 6.97294 23.4181 4.80544 23.1819C3.55169 23.045 2.12794 24.5962 4.10356 26.7275C4.58856 27.2512 5.66856 27.7912 8.31669 27.3181H13.1323C14.3361 27.3181 16.3229 25.8413 18.2486 22.2956C18.9511 21.3106 20.9573 19.2819 23.3654 19.0456C24.8704 18.9469 27.6392 17.7456 26.6761 13.7269C24.9536 9.69125 20.9623 5.81 19.9998 2.5'
                  stroke='#96B87D'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <p className='advantages__text'>
                Обеспечивают удаление
                <br />и профилактику мозолей
              </p>
            </div>
            <div className='advantages__item'>
              <svg
                className='advantages__item-icon'
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
              >
                <path
                  d='M25 16.2501C25 22.5001 20.625 25.6251 15.425 27.4376C15.1527 27.5298 14.8569 27.5254 14.5875 27.4251C9.375 25.6251 5 22.5001 5 16.2501V7.50007C5 7.16855 5.1317 6.85061 5.36612 6.61619C5.60054 6.38177 5.91848 6.25007 6.25 6.25007C8.75 6.25007 11.875 4.75007 14.05 2.85007C14.3148 2.62382 14.6517 2.49951 15 2.49951C15.3483 2.49951 15.6852 2.62382 15.95 2.85007C18.1375 4.76257 21.25 6.25007 23.75 6.25007C24.0815 6.25007 24.3995 6.38177 24.6339 6.61619C24.8683 6.85061 25 7.16855 25 7.50007V16.2501Z'
                  stroke='#96B87D'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <p className='advantages__text'>
                Гарантируют полную
                <br />
                атравматичность
              </p>
            </div>
            <div className='advantages__item'>
              <svg
                className='advantages__item-icon'
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
              >
                <path
                  d='M15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5Z'
                  stroke='#96B87D'
                  strokeWidth='2'
                  strokeLinejoin='round'
                />
                <path
                  d='M15.0049 7.5V15.0063L20.3043 20.3063'
                  stroke='#96B87D'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <p className='advantages__text'>
                Экономят время мастера
                <br />
                при любом педикюре
              </p>
            </div>
            <div className='advantages__item'>
              <svg
                className='advantages__item-icon'
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
              >
                <g clipPath='url(#clip0_229_406)'>
                  <path
                    d='M27.5154 18.4251C27.5154 19.5867 27.0539 20.7008 26.2325 21.5222C25.4111 22.3436 24.297 22.8051 23.1354 22.8051C21.9737 22.8051 20.8596 22.3436 20.0382 21.5222C19.2168 20.7008 18.7554 19.5867 18.7554 18.4251C18.7554 15.1401 23.1304 9.66382 23.1304 9.66382C23.1304 9.66382 27.5154 15.1401 27.5154 18.4251ZM12.4979 11.5413H4.98785C4.65913 11.541 4.33356 11.6055 4.0298 11.7311C3.72603 11.8568 3.45003 12.0411 3.21758 12.2736C2.98514 12.506 2.80082 12.782 2.67517 13.0858C2.54953 13.3895 2.48502 13.7151 2.48535 14.0438V26.5601C2.48535 27.9426 3.60535 29.0626 4.98785 29.0626H12.4979C12.8266 29.0629 13.1521 28.9984 13.4559 28.8727C13.7597 28.7471 14.0357 28.5628 14.2681 28.3303C14.5006 28.0979 14.6849 27.8219 14.8105 27.5181C14.9362 27.2144 15.0007 26.8888 15.0004 26.5601V14.0438C15.0007 13.7151 14.9362 13.3895 14.8105 13.0858C14.6849 12.782 14.5006 12.506 14.2681 12.2736C14.0357 12.0411 13.7597 11.8568 13.4559 11.7311C13.1521 11.6055 12.8266 11.541 12.4979 11.5413Z'
                    stroke='#96B87D'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M17.5001 3.44L16.9413 2.32125C16.7339 1.90562 16.4148 1.556 16.0198 1.31158C15.6249 1.06717 15.1696 0.937632 14.7051 0.9375H3.73633M8.74258 17.7988V22.805M6.24008 20.3025H11.2451M8.74258 0.9375V7.7875M5.95758 7.7875H11.5276C11.6551 7.78717 11.7814 7.81198 11.8993 7.8605C12.0172 7.90902 12.1243 7.98031 12.2146 8.07028C12.305 8.16025 12.3767 8.26715 12.4256 8.38485C12.4746 8.50256 12.4999 8.62876 12.5001 8.75625V11.5412H4.98758V8.75625C4.98791 8.49921 5.09025 8.2528 5.27213 8.07116C5.454 7.88952 5.70053 7.7875 5.95758 7.7875Z'
                    stroke='#96B87D'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_229_406'>
                    <rect width='30' height='30' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              <p className='advantages__text'>
                Отсутствие
                <br />
                эпидермальной пыли
              </p>
            </div>
            <div className='advantages__item'>
              <svg
                className='advantages__item-icon'
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
              >
                <path
                  d='M11.9358 25.9376C13.1101 25.9376 14.0621 24.9856 14.0621 23.8113C14.0621 22.637 13.1101 21.6851 11.9358 21.6851C10.7615 21.6851 9.80957 22.637 9.80957 23.8113C9.80957 24.9856 10.7615 25.9376 11.9358 25.9376Z'
                  stroke='#96B87D'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M21.2005 25.9376C22.3748 25.9376 23.3267 24.9856 23.3267 23.8113C23.3267 22.637 22.3748 21.6851 21.2005 21.6851C20.0262 21.6851 19.0742 22.637 19.0742 23.8113C19.0742 24.9856 20.0262 25.9376 21.2005 25.9376Z'
                  stroke='#96B87D'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M7.0075 6.94375L9.52 14.8987C9.90625 16.1212 10.0988 16.7325 10.47 17.185C10.795 17.585 11.2187 17.8938 11.6975 18.085C12.2412 18.3013 12.8813 18.3012 14.1638 18.3012H18.9825C20.265 18.3012 20.905 18.3013 21.4475 18.085C21.9275 17.8938 22.35 17.585 22.6763 17.185C23.0463 16.7325 23.2387 16.1212 23.6262 14.8987L24.1375 13.2788L24.4375 12.3213L24.8513 11.0088C24.9989 10.5406 25.0342 10.0443 24.9543 9.56C24.8744 9.07569 24.6815 8.61702 24.3913 8.22114C24.1011 7.82527 23.7217 7.50332 23.2839 7.28139C22.846 7.05946 22.3621 6.94379 21.8712 6.94375H7.0075ZM7.0075 6.94375L6.99375 6.8975C6.94097 6.7207 6.8826 6.54561 6.81875 6.3725C6.56569 5.73193 6.13654 5.17603 5.58091 4.76903C5.02527 4.36204 4.36582 4.12056 3.67875 4.0725C3.55 4.0625 3.40875 4.0625 3.125 4.0625'
                  stroke='#96B87D'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <p className='advantages__text'>
                Широкий спектр препаратов
                <br />
                для домашнего ухода
              </p>
            </div>
            <div className='advantages__item'>
              <svg
                className='advantages__item-icon'
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
              >
                <path
                  d='M7.5 18.125V26.25C7.5 26.5815 7.3683 26.8995 7.13388 27.1339C6.89946 27.3683 6.58152 27.5 6.25 27.5H3.75C3.41848 27.5 3.10054 27.3683 2.86612 27.1339C2.6317 26.8995 2.5 26.5815 2.5 26.25V18.125C2.5 17.7935 2.6317 17.4755 2.86612 17.2411C3.10054 17.0067 3.41848 16.875 3.75 16.875H6.25C6.58152 16.875 6.89946 17.0067 7.13388 17.2411C7.3683 17.4755 7.5 17.7935 7.5 18.125ZM7.5 18.125H14.6875C15.1019 18.125 15.4993 18.2896 15.7924 18.5826C16.0854 18.8757 16.25 19.2731 16.25 19.6875C16.25 20.1019 16.0854 20.4993 15.7924 20.7924C15.4993 21.0854 15.1019 21.25 14.6875 21.25H11.875'
                  stroke='#96B87D'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M13.75 21.25H18.365C19.4272 21.2498 20.4618 20.9114 21.3188 20.2837L24.605 17.8775C24.9505 17.6101 25.3815 17.4775 25.8175 17.5044C26.2536 17.5313 26.665 17.7159 26.975 18.0237C27.1502 18.1987 27.2872 18.4081 27.3773 18.6387C27.4673 18.8693 27.5085 19.1162 27.4982 19.3635C27.4878 19.6109 27.4262 19.8535 27.3172 20.0758C27.2082 20.2981 27.0542 20.4953 26.865 20.655L21.3687 25.1275C20.477 25.8535 19.3624 26.2499 18.2125 26.25H7.5M23.75 8.75C23.75 10.4076 23.0915 11.9973 21.9194 13.1694C20.7473 14.3415 19.1576 15 17.5 15C15.8424 15 14.2527 14.3415 13.0806 13.1694C11.9085 11.9973 11.25 10.4076 11.25 8.75C11.25 7.0924 11.9085 5.50269 13.0806 4.33058C14.2527 3.15848 15.8424 2.5 17.5 2.5C19.1576 2.5 20.7473 3.15848 21.9194 4.33058C23.0915 5.50269 23.75 7.0924 23.75 8.75Z'
                  stroke='#96B87D'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <p className='advantages__text'>
                Препараты экономичны
                <br />в использовании
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='feetolines'>
        <div className='wrap container'>
          <Swiper
            items={feetolines}
            className={"feetolines__list"}
            itemsLength={1}
            widthPercent={"26.875rem"}
            controlBlock={false}
          ></Swiper>
          {/* <div className="wrap container">
          <ul className="feetolines__list">
     
          </ul>
        </div> */}
        </div>
      </section>
      <div className='line container'></div>
      <section className='post'>
        <div className='wrap container'>
          <div className='post__info'>
            <h2 className='post__info-title'>
              KART – профессиональная израильская косметика для педикюра и
              подологии.
            </h2>
            <p className='post__info-subtitle'>
              Более 30 лет компания KART сотрудничает с
              научно-исследовательскими центрами и пилотными институтами
              Израиля, поддерживает постоянную и тесную связь с практикующими
              специалистами, учитывает их замечания и пожелания, разрабатывает и
              усовершенствует уникальные формулы продуктов, с высокой
              концентрацией активных веществ, использует редкие и эксклюзивные
              ингредиенты растительного и морского происхождения.
            </p>
            <Link href="/about">
              <ButtonWithCircleLink buttonText='Больше о компании KART' circleBg='green'  > </ButtonWithCircleLink>
            </Link>


          </div>
          <Image
            src={kartProfessionalImg}
            alt='KART Professional'
            className='post__img'
          />
        </div>
      </section>
      <section className="flex-col md:flex-row flex gap-4 mb-24 justify-center items-center">

        <Image className="w-full md:w-[60%]" src={magnifyingGlasImg} alt="magnifyingGlasImg" />
        <div className="w-full md:w-[40%] flex flex-col gap-4 justify-between ">
          <Title>KART - БОЛЬШЕ ЧЕМ ПЕДИКЮР!</Title>
          <div className="p-6 bg-[#F5F5F5] min-h-[14.8125rem] shadow rounded-2xl">
            <Text>Педикюр KART представляет собой инновационную методику, основанную на научно обоснованных принципах косметологии
              и дерматологии.Ключевым аспектом является косметологический подход, который включает в себя систему методов и принципов, направленных на улучшение состояния кожи и ногтей с помощью специализированных косметических средств и процедур.</Text>
          </div>
          <Link href="/about">
            <ButtonWithCircleLink
              href={'/about'}
              arrowColor='#81D742'
              circleClassName='bg-gradient-to-b   bg-[#FFFFFF] from-black/10 to-[#FFFFFF]'
              buttonText='Детальнее'
              buttonClassName='w-[90%] text-[#81D742]! bg-[#FFFFFF] bg-gradient-to-b from-black/10 to-[#FFFFFF]'
            />
          </Link>

        </div>
      </section>
      <section className='academy'>
        <div className='wrap container'>
          <div className='academy__info'>
            <div className='academy__shadow-wrap'>
              <h2 className='academy__info-title'>
                НАША ОНЛАЙН АКАДЕМиЯ
                <br />
                <span className='academy__title-highlight'>обучение KART</span>
              </h2>
              <p className='academy__info-subtitle'>
                Академия KART PODOLOGY – это платформа для всех, кто стремится
                стать экспертом в сфере педикюра и подологии. Мы создали учебную
                среду, где мастера могут не только ознакомиться с продукцией
                торговой марки KART, но и глубоко овладеть авторскими
                протоколами, инновационными методиками и тонкостями ухода за
                кожей ног, рук и ногтями.
              </p>
              <p className='academy__info-subtitle'>
                С помощью наших курсов мы предлагаем всем опытным мастерам
                педикюра и подологам расширить свой спектр услуг,
                предоставляемый клиентам, что позволит повысить уровень своих
                знаний, возможностей и прибыли за счет высокоэффективных
                процедур от KART, основанных на косметологическом подходе
              </p>
            </div>
            <Link href="/about">
              <ButtonWithCircleLink href="/about" buttonClassName="w-[90%]" buttonText='Больше о компании KART' circleBg='green'  > </ButtonWithCircleLink>
            </Link>


          </div>
          <Image src={our_academyImg} alt='KART academy' className='w-full xl:max-w-[37.5rem] lg:max-w-[25rem] rounded-2xl object-cover' />

        </div>
      </section>

      <div className="flex flex-col gap-24">
        <section className='certificate'>
          <div className='flex gap-8 items-center justify-center flex-col md:flex-row'>
            <Image
              src={certificateImg}
              alt='KART certificate'
              className='object-fill w-full md:w-1/2 h-full'
            />
            <div className='w-full md:w-1/2 flex flex-col gap-4'>
              {/* <h2 className='certificate__info-title'>
              КАКИЕ ПРЕИМУЩЕСТВА ПРЕДОСТАВЛЯЕТ
              <br />
              <span className='certificate__title--highlight'>СЕРТИФИКАТ KART</span>
            </h2> */}
              <div className="flex flex-col gap-2">
                <Title > КАКИЕ ПРЕИМУЩЕСТВА ПРЕДОСТАВЛЯЕТ </Title>
                <Title color="green" > СЕРТИФИКАТ KART </Title>

              </div>
              <div className="flex  flex-col gap-4">

                <Text >Политикой нашей компании предусмотрена продажа профессиональных препаратов только мастерам, которые прошли обучение и овладели нашей методикой проведения процедур педикюра KART, так как мы должны быть уверены, что вы не навредите своему клиенту и правильно будете использовать нашу продукцию.</Text>
                <Text >После прохождения любого из наших курсов, вы получите сертификат KART который даст вам возможность приобрести продукты из любой категории, а также предоставит вам постоянную скидку 40%, чтобы вы могли получать стабильный и достойный доход от продажи средств для домашнего ухода своим клиентам.</Text>
              </div>


              <Text className="font-bold!">Основные преимущества:</Text>
              <ul className="flex justify-between">
                <li className="flex gap-2 items-center"><BadgePercent color='#96B87D' /><Text>Постоянная скидка 40%</Text></li>
                <li className="flex  gap-2 items-center"><ShoppingBag color='#96B87D' /><Text>Приобретение любых продуктов</Text></li>
              </ul>
              <Text className="font-bold!">Доступ к полезным материалам:</Text>
              <div className="flex gap-[26%]">

                <ul className="flex justify-between flex-col gap-2">
                  <li className="flex gap-2 items-center"><FileText color='#96B87D' /><Text>Постеры в формате PDF и JPEG</Text></li>
                  <li className="flex  gap-2 items-center"><Image className="w-[1.5625rem] h-[1.5625rem]" src={listCardIcon} width={25} height={25} alt=" list icon" /><Text>Карточки для анамнеза</Text></li>
                  <li className="flex gap-2 items-center"><Image className="w-[1.5625rem] h-[1.5625rem]" src={priceListIcon} width={25} height={25} alt="price list icon" /><Text>Прайс-листы для клиентов</Text></li>

                </ul>
                <ul className="flex justify-between flex-col gap-2">
                  <li className="flex gap-2 items-center"><Image className="w-[1.5625rem] h-[1.5625rem]" src={videoIcon} width={25} height={25} alt="video icon" /><Text>Видео для соцсетей</Text></li>
                  <li className="flex  gap-2 items-center"><Image className="w-[1.5625rem] h-[1.5625rem]" src={protocolcon} width={25} height={25} alt="protocol" /><Text>Протоколы</Text></li>
                  <li className="flex gap-2 items-center"><Image className="w-[1.5625rem] h-[1.5625rem]" src={catalogListIcon} width={25} height={25} alt="catalog List Icon" /><Text>Каталоги</Text></li>

                </ul>
              </div>

            </div>

          </div>
        </section>
        <InstructorsList />
        <FlagList />
        <BlogList />
        <OrderСonditionsList />
      </div>

    </div>
  );
}

export default HomePage;
