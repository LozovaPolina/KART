import HeaderNav from "./HeaderNav";
import logotype from "../../public/assets/svg/logotype.svg"; // Adjust the path as needed
import ProductLinks from "./ProductsLinks";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag } from "lucide-react";
import ProfileIcon from "./ProfIleIcon";



export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="max-w-[90.625rem] mx-auto px-[.9375rem]">
        <div className="flex justify-between items-center flex-wrap gap-y-4 pt-[1.5625rem] pb-[.9375rem]">
          {/* Left header item */}
          <Link href={'/'} className="flex items-center flex-wrap gap-[1.875rem]">
            <Image
              className="w-[5.5rem] h-[1.875rem] min-w-[5.5rem]"
              src={logotype}
              alt="KART Podology"
              priority
            />
          </Link>
          <HeaderNav className="hidden xl:flex items-center gap-[2.5rem]" />


          {/* Search form */}
          <div className="hidden xl:block max-w-[20.5rem] w-full">
            <form method="GET" action="/" className="w-full">
              <div
                className="flex items-center gap-5 px-[.625rem] py-[.625rem] bg-[#f5f5f5] rounded-full shadow-[0_.125rem_.625rem_rgba(0,0,0,0.15)] "
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
          <div className="flex items-center gap-[.9375rem] flex-wrap">
            {/* Language Switcher */}
            <div className="hidden xl:flex items-center gap-[.3125rem] cursor-pointer">
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
            <Link href={'/cart'}><ShoppingBag /></Link>
            {/* Education button */}
            <Link
              href="#"
              className="hidden xl:flex items-center px-[.6875rem] py-[.625rem] rounded-full bg-[#a0c287] shadow-[0_.25rem_1.25rem_rgba(0,0,0,0.05)]"
            >
              <p className="text-white font-normal">Онлайн навчання</p>
            </Link>

            {/* Profile icon */}

            <ProfileIcon />
            {/* Mobile Menu Toggler */}
            <svg
              className="w-[1.5625rem] h-[1.5625rem] cursor-pointer block xl:hidden"
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
      <div className="max-w-[90.625rem] mx-auto px-[.9375rem]">
        <ProductLinks />
      </div>
    </header>

  );
}
