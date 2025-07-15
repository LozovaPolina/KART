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
import catalogListIcon from "../../public/assets/svg/catalogList.svg";
import listCardIcon from "../../public/assets/svg/listCard.svg";
import pdfIcon from "../../public/assets/svg/pdfIcon.svg";
import priceListIcon from "../../public/assets/svg/priceList.svg";
import videoIcon from "../../public/assets/svg/videoIcon.svg";
import protocolcon from "../../public/assets/svg/protocolcon.svg";
import { BadgePercent, FileText, ShoppingBag } from "lucide-react";
import { useTranslations } from "next-intl";
import AdvantagesList from "./AdvantagesList";
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
const feetoItems = [
  {
    key: 1,
    imgSrc: profeetsImg,
    imgAltKey: "feetolines.altProfessionalFeet",
    titleKey: "feetolines.titleProfessionalFeet",
    categoryKey: "feetolines.categoryPedicure",
  },
  {
    key: 2,
    imgSrc: feetocareImg,
    imgAltKey: "feetolines.altFeetoCare",
    titleKey: "feetolines.titleFeetoCare",
    categoryKey: "feetolines.categoryPedicure",
  },
  {
    key: 3,
    imgSrc: karttoolsImg,
    imgAltKey: "feetolines.altKartTools",
    titleKey: "feetolines.titleKartTools",
    categoryKey: "feetolines.categoryKart",
  },
];
function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="">
      <section className="">
        <div className=" mb-7 relative">
          <Swiper
            items={items}
            className="hero__slider"
            itemsLength={items.length}
          />
        </div>
      </section>
      <AdvantagesList />

      <section className="feetolines">
        <div className="wrap container">
          {/* {feetoItems.map(({ key, imgSrc, imgAltKey, titleKey, categoryKey }) => (
            <div
              key={key}
              className="feetolines__list-item select-none"
              draggable={false}
            >
              <Image
                className="feetolines__item-img select-none"
                src={imgSrc}
                alt={t(imgAltKey)}
              />
              <div className="feetolines__item-sticker">
                <h4 className="feetolines__item-title">{t(titleKey)}</h4>
                <p className="feetolines__item-category">{t(categoryKey)}</p>
              </div>
            </div>
          ))} */}
          <Swiper
            items={feetoItems.map(
              ({ key, imgSrc, imgAltKey, titleKey, categoryKey }) => (
                <div
                  key={key}
                  className="feetolines__list-item select-none"
                  draggable={false}
                >
                  <Image
                    className="feetolines__item-img select-none"
                    src={imgSrc}
                    alt={t(imgAltKey)}
                  />
                  <div className="feetolines__item-sticker">
                    <Title className="feetolines__item-title">
                      {t(titleKey)}
                    </Title>
                    <p className="feetolines__item-category">
                      {t(categoryKey)}
                    </p>
                  </div>
                </div>
              )
            )}
            className={"feetolines__list"}
            itemsLength={1}
            widthPercent={30}
            controlBlock={false}
          ></Swiper>
        </div>
      </section>
      <div className="line container"></div>
      <section className="post">
        <div className="wrap container">
          <div className="post__info">
            <Title className="post__info-title text-center">
              {t("postInfoTitle")}
            </Title>
            <p className="post__info-subtitle  text-center">
              {t("postInfoSubtitle")}
            </p>
            <ButtonWithCircleLink
              href="/about"
              buttonText={t("postButtonText")}
              circleBg="green"
            />
          </div>
          <Image
            src={kartProfessionalImg}
            alt={t("postInfoTitle")}
            className="post__img"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-4 mb-24 justify-center items-center">
        <Image
          className="w-full md:w-[60%] h-[353px]"
          src={magnifyingGlasImg}
          alt={t("kartMoreThanPedicureTitle")}
        />
        <div className="w-full md:w-[40%] flex flex-col gap-4 justify-between">
          <Title className="leading-normal pl-6 text-center">
            {t("kartMoreThanPedicureTitle")}
          </Title>
          <div className="p-6 bg-[#F5F5F5] min-h-[14.8125rem] shadow rounded-2xl">
            <Text className="leading-normal text-[1rem]! text-center">
              {t("kartMoreThanPedicureText")}
            </Text>
          </div>
          <ButtonWithCircleLink
            href="/about"
            circleClassName="bg-[#5EAC41] "
            buttonText={t("kartMoreThanPedicureButtonText")}
            buttonClassName="w-[90%]  bg-[#5EAC41] "
          />
        </div>
      </section>
      <section className="academy">
        <div className="wrap container">
          <div className="academy__info">
            <Title className="academy__info-title text-center ">
              {t("academyTitle")}
              <br />

              <span className="academy__title-highlight mt-2 leading-normal">
                {t("academyTitleHighlight")}
              </span>
            </Title>
            <div className="academy__shadow-wrap">
              <p className="academy__info-subtitle text-center">
                {t("academyText1")}
              </p>
              <p className="academy__info-subtitle text-center">
                {t("academyText2")}
              </p>
            </div>
            <ButtonWithCircleLink
              href="/about"
              buttonClassName="w-[90%]"
              buttonText={t("academyButtonText")}
              circleBg="green"
            />
          </div>
          <Image
            src={our_academyImg}
            alt={t("academyTitle")}
            className="w-full xl:max-w-[37.5rem] lg:max-w-[25rem] rounded-2xl object-cover"
          />
        </div>
      </section>

      <div className="flex flex-col gap-24">
        <section className="certificate">
          <div className="flex gap-8 items-center justify-between flex-col lg:flex-row">
            <Image
              src={certificateImg}
              alt={t("certificateTitlePart2")}
              className="object-fill w-full max-w-[800px]  md:max-w-[760px] max-h-[504px] h-full"
            />
            <div className="w-full shrink-0  lg:w-1/2 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Title>{t("certificateTitlePart1")}</Title>
                <Title color="green">{t("certificateTitlePart2")}</Title>
              </div>

              <div className="flex flex-col gap-4">
                <Text>{t("certificateText1")}</Text>
                <Text>{t("certificateText2")}</Text>
              </div>

              <Text className="font-bold">
                {t("certificateMainAdvantages")}
              </Text>
              <ul className="flex gap-2 flex-col sm:gap-8   items-start sm:flex-row  md:gap-12 lg:gap-14 xl:gap-16 w-full">
                <li className="flex gap-2 items-center max-w-[248px] w-full">
                  <BadgePercent
                    color="#96B87D"
                    className="w-[1.5625rem] h-[1.5625rem]"
                  />
                  <Text>{t("certificateAdvantageDiscount")}</Text>
                </li>
                <li className="flex gap-2 items-center">
                  <ShoppingBag
                    color="#96B87D"
                    className="w-[1.5625rem] h-[1.5625rem] shrink-0"
                  />
                  <Text>{t("certificateAdvantageProducts")}</Text>
                </li>
              </ul>

              <Text className="font-bold">
                {t("certificateAccessToMaterials")}
              </Text>
              <div className="flex flex-col  gap-2 sm:gap-8  sm:flex-row md:gap-12 lg:gap-14  xl:gap-16 w-full items-start">
                <ul className="flex flex-col gap-2">
                  <li className="flex gap-2 items-center">
                    <FileText color="#96B87D" />
                    <Text>{t("certificateMaterialPosters")}</Text>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image
                      className="w-[1.5625rem] h-[1.5625rem]"
                      src={listCardIcon}
                      width={25}
                      height={25}
                      alt="list icon"
                    />
                    <Text>{t("certificateMaterialCards")}</Text>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image
                      className="w-[1.5625rem] h-[1.5625rem]"
                      src={priceListIcon}
                      width={25}
                      height={25}
                      alt="price list icon"
                    />
                    <Text>{t("certificateMaterialPriceLists")}</Text>
                  </li>
                </ul>

                <ul className="flex flex-col gap-2">
                  <li className="flex gap-2 items-center">
                    <Image
                      className="w-[1.5625rem] h-[1.5625rem]"
                      src={videoIcon}
                      width={25}
                      height={25}
                      alt="video icon"
                    />
                    <Text>{t("certificateMaterialVideos")}</Text>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image
                      className="w-[1.5625rem] h-[1.5625rem]"
                      src={protocolcon}
                      width={25}
                      height={25}
                      alt="protocol icon"
                    />
                    <Text>{t("certificateMaterialProtocols")}</Text>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image
                      className="w-[1.5625rem] h-[1.5625rem]"
                      src={catalogListIcon}
                      width={25}
                      height={25}
                      alt="catalog icon"
                    />
                    <Text>{t("certificateMaterialCatalogs")}</Text>
                  </li>
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
