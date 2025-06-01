import { ChevronRight } from 'lucide-react';
import React from 'react';

function HintNavigation({ nameFirst, nameSecond }) {
  return (
    <div className="flex justify-center gap-4 text-[#404040] text-[16px]!"><p>{nameFirst}</p><ChevronRight className='w-[20px]' color='#E3E3E3' /> <p>{nameSecond}</p></div>
  );
}

export default HintNavigation;