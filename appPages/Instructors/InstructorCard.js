import CircleLink from "../../shared/ui/button/CircleLink";
import Image from "next/image";
import { Link } from "../../i18n/navigation";
import React from "react";
import womenImg from "../../public/assets/image/womenImg.png";
import instagram from "../../public/assets/svg/insta.svg";
import gmail from "../../public/assets/svg/gmail-icon.svg";
import website from "../../public/assets/svg/website-icon.svg";
const socialIcons = {
  mail: <Image src={gmail} alt="gmail" className="w-5 h-5" />,
  instagram: <Image src={instagram} alt="instagram" className="w-5 h-5" />,
  other: <Image src={website} alt="website" className="w-5 h-5" />,
};

export default function InstructorCard({
  firstName,
  lastName,
  position,
  country,
  contacts,
}) {
  return (
    <div className="flex flex-col p-[15px] bg-[#F5F5F5] shadow rounded-xl hover:shadow-md transition-all">
      <div className="flex gap-4 items-start">
        <Image
          src={womenImg}
          alt="instructor image"
          className="object-cover rounded-xl w-[5.625rem] h-[5.625rem] sm:w-[6.25rem] sm:h-[6.25rem]"
        />

        <div className="flex-1 flex flex-col gap-2 justify-between text-[#666666] min-h-[100px]">
          <div>
            <p className="font-semibold text-[#666666]">
              {firstName + " " + lastName}
            </p>
            <p className="text-sm text-[#666666]">{position}</p>
            <p className="text-xs text-[#666666]">{country}</p>
          </div>

          <div className="flex gap-2 justify-between items-center">
            <div className="flex gap-2">
              {contacts.map((item, i) => (
                <Link
                  key={i}
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[2rem] h-[2rem] bg-gray-100 rounded-xl shadow flex justify-center items-center hover:bg-gray-200 transition"
                >
                  {socialIcons[item.contact_type]}
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
