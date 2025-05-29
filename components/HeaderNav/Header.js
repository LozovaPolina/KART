import HeaderNav from "./HeaderNav";
import logotype from "../../public/assets/svg/logotype.svg"; // Adjust the path as needed
import ProductLinks from "./ProductsLinks";
import Link from "next/link";
import Image from "next/image";



  export default function Header({ logotype }) {
    return (
        <header >
          <div className=" mx-auto flex justify-between pt-[25px] pb-[15px] px-[15px] max-w-full">
            {/* Left header item */}
            <div className=" flex items-center gap-[30px]">
              <Image
                  className=" w-[88px] h-[30px]"
                  src={logotype}
                  alt="KART Podology"
                  priority
              />
              {/* HeaderNav component */}
              <HeaderNav className=" hidden xl:flex items-center gap-[40px]" />
            </div>

            {/* Search form */}
            <div className="search hidden xl:block">
              <form className="search__form" method="GET" action="/">
                <div className="search__form-wrap flex items-center border border-gray-300 rounded-md px-3 py-2">
                  <input
                      className="search__form-input flex-grow outline-none placeholder-gray-400"
                      type="text"
                      placeholder="Ищите то, что вас интересует"
                  />
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                  >
                    <path
                        d="M19.0439 19L16.3217 16.2778M15.9328 10.4444C15.9328 11.1594..."
                        stroke="#49454F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                  </svg>
                </div>
              </form>
            </div>

            {/* Right header item */}
            <div className="flex items-center gap-[15px]">
              <div className="header__lang-switch flex items-center gap-[5px] cursor-pointer">
                <p className="header__lang-current">UA</p>
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

              <Link
                  href="#"
                  className="header__education hidden xl:flex items-center px-[11px] py-[10px] rounded-full bg-[#a0c287] shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              >
                <p className="header__education-title text-white font-normal">
                  Онлайн навчання
                </p>
              </Link>

              <svg
                  className="header__lang-icon w-[31px] h-[30px] hidden xl:block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="30"
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

              {/* Navigation toggler - shown only below xl */}
              <svg
                  className="navigation-toggler header__lang-icon w-[25px] h-[25px] cursor-pointer block xl:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
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

          <div className="container mx-auto">
            {/* ProductLinks component */}
            <ProductLinks />
          </div>
        </header>
    );
  }
