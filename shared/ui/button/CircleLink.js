
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from "../../../i18n/navigation";



function CircleLink({ href, bgColor = 'white', className = '', border = false, arrowColor }) {
  const isWhite = bgColor === 'white';
  const circleStyle = `rounded-full hover:shadow w-10 h-10 hover:opacity-70 flex items-center justify-center transition-colors duration-200 ${isWhite ? 'bg-white' : 'bg-[#A0C287]'} ${className} ${border ? 'border border-[#CBCBCB]' : ''}`;
  const arrowStyle = isWhite ? 'text-black' : 'text-white';

  const content = (
    <div className={circleStyle}>
      <ArrowUpRight size={20} color={arrowColor} className={arrowStyle} />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block" >
        {content}
      </Link>
    );
  }

  return content;
}

export default CircleLink;
