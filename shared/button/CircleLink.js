
import React from 'react';
import { ArrowUpRight } from 'lucide-react'; // Use the top-right arrow icon

function CircleLink({ href = '#', bgColor = 'white', className = '', border = false }) {
  const isWhite = bgColor === 'white';

  const circleStyle = `rounded-full w-10 h-10 hover:opacity-70 flex items-center justify-center transition-colors duration-200 ${isWhite ? 'bg-white' : 'bg-[#A0C287]'
    }`;

  const arrowStyle = isWhite ? 'text-black' : 'text-white';

  return (
    <a href={href} className={`${circleStyle} ${className} ${border ? 'border border-[#CBCBCB]' : ''}`}>
      <ArrowUpRight size={20} className={arrowStyle} />
    </a>
  );
}

export default CircleLink;