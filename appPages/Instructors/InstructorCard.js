
import CircleLink from '../../shared/ui/button/CircleLink';
import Image from 'next/image';
import { Link } from "../../i18n/navigation";
import React from 'react';
import womenImg from '../../public/assets/image/womenImg.png';
import instagram from '../../public/assets/svg/insta.svg';
import gmail from '../../public/assets/svg/gmail-icon.svg';
import website from '../../public/assets/svg/website-icon.svg';
const socialIcons = {
  mail: <Image src={gmail} alt='gmail' className="w-4 h-4" />,
  instagram: <Image src={instagram} alt='instagram' className="w-4 h-4" />,
  globe: <Image src={website} alt='website' className="w-4 h-4" />,
};

export default function InstructorCard({ instructor }) {
  return (
    <div className="flex flex-col p-[15px] bg-[#F5F5F5] shadow rounded-xl hover:shadow-md transition-all">
      <div className="flex gap-4 items-start">
        <Image
          src={womenImg}
          alt={instructor?.name}
          width={100}
          height={100}
          className="object-cover rounded-xl"
        />

        <div className="flex-1 flex flex-col gap-2 justify-between text-[#000000] min-h-[100px]">
          <div>
            <p className="font-semibold">{instructor?.name}</p>
            {instructor?.role && (
              <p className="text-sm text-gray-500">{instructor?.role}</p>
            )}
            <p className="text-xs text-gray-600">{instructor?.location}</p>
          </div>

          {/* Social icons at the bottom of text section */}
          <div className="flex  gap-2 justify-between items-center">
            <div className="flex gap-2">
              {instructor?.socials.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[2rem] h-[2rem] bg-gray-100 rounded-full shadow flex justify-center items-center hover:bg-gray-200 transition"
                >
                  {socialIcons[item.type]}
                </Link>
              ))}
            </div>
            <CircleLink />
          </div>
        </div>
      </div>
    </div>
  );
}

