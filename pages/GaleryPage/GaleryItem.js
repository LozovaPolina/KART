
import { ButtonWithCircleLink } from '../../shared/ui/button/ButtonWithCircleLink';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import galeryImage from "../../public/assets/image/galery.png"
function GaleryItem({ src, text, href = '', btnText = "", type = 'photo' }) {
  return (
    <div className='flex flex-col items-center gap-2 max-w-[312px]'>
      {type === 'photo' ? (
        <Image src={galeryImage} alt={text} className="rounded-xl" width={312} height={200} />
      ) : (
        <div className="relative w-full rounded-xl overflow-hidden" style={{ maxWidth: 312, height: 200 }}>
          <video
            src={src}
            controls
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}
      <p className='text-center'>{text}</p>
      <Link href={href} className="w-full ">
        <ButtonWithCircleLink buttonText={btnText} buttonClassName='w-[80%]' href={href} />
      </Link>
    </div>
  );
}

export default GaleryItem;