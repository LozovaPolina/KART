import HeaderNav from "./HeaderNav";
import logotype from "../../public/assets/svg/logotype.svg"; // Adjust the path as needed
import ProductLinks from "./ProductsLinks";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";



export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="max-w-[1450px] mx-auto px-[15px]">
        <div className="flex justify-between items-start flex-wrap gap-y-4 pt-[25px] pb-[15px]">
          {/* Left header item */}
          <div className="flex items-center flex-wrap gap-[30px]">
            <Image
              className="w-[88px] h-[30px] min-w-[88px]"
              src={logotype}
              alt="KART Podology"
              priority
            />
            <HeaderNav className="hidden xl:flex items-center gap-[40px]" />
          </div>

          {/* Search form */}
          <div className="hidden xl:block max-w-[328px] w-full">
            <form method="GET" action="/" className="w-full">
              <div
                className="flex items-center gap-5 px-[10px] py-[10px] bg-[#f5f5f5] rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.15)] "
              >
                <input
                  type="text"
                  placeholder="Ищите то, что вас интересует"
                  className="flex-grow border-none text-base bg-transparent placeholder-gray-400 focus:outline-none"
                />
                <Search color="#49454F" />
              </div>
            </form>
          </div>

          {/* Right header item */}
          <div className="flex items-center gap-[15px] flex-wrap">
            {/* Language Switcher */}
            <div className="hidden xl:flex items-center gap-[5px] cursor-pointer">
              <p className="text-[#262626]">UA</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.3374 7.625L9.5874 12.375L4.8374 7.625"
                  stroke="#262626"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Education button */}
            <Link
              href="#"
              className="hidden xl:flex items-center px-[11px] py-[10px] rounded-full bg-[#a0c287] shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            >
              <p className="text-white font-normal">Онлайн навчання</p>
            </Link>

            {/* Profile icon */}
            <svg
              className="w-[31px] h-[30px] hidden xl:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31 30"
              fill="none"
            >
              <path
                d="M5.0874 22.5C5.0874 21.1739..."
                stroke="#262626"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M15.0874 12.5C17.1585 12.5..."
                stroke="#262626"
                strokeWidth="2"
              />
            </svg>

            {/* Mobile Menu Toggler */}
            <svg
              className="w-[25px] h-[25px] cursor-pointer block xl:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M7.2915 6.25H17.7082..."
                stroke="#262626"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Product Links Section */}
      <div className="max-w-[1450px] mx-auto px-[15px]">
        <ProductLinks />
      </div>
    </header>

  );
}
