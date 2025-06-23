import Text from '../../shared/ui/text/Text';
import Title from '../../shared/ui/title/Title';
import Image from 'next/image';
import React from 'react';
import blogIMG from '../../public/assets/image/blog/blog-inst-boxes.png'
import blogFootIMG from '../../public/assets/image/blog/blog-inst-foot.png'
import blogMaterialsIMG from '../../public/assets/image/blog/blog-inst-materials.png'
import Swiper from '../../shared/swiper/Swiper';



const blogContent = [

  { text: 'Секреты ухода за ногами', imageSrc: blogFootIMG },
  { text: 'Доступ к полезным материалам:', imageSrc: blogIMG },
  { text: 'Какие инструменты требуются для работы?', imageSrc: blogMaterialsIMG },
  { text: 'Доступ к полезным материалам:', imageSrc: blogIMG },

]
function CardFooter({ text }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-3 text-white">
      <>
        <span className="text-sm  max-w-[15rem]">{text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </>
    </div>
  );
}
function Card({ imageSrc, text }) {
  return (
    <div className="relative bg-[#A9BD9B] w-[21.125rem] h-[25.75rem] p-6 rounded-[1.3rem] shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">


      <Image
        src={imageSrc}
        alt={'blog image'}
        fill
        className="object-cover z-0"
        priority
      />

      <CardFooter text={text}>

      </CardFooter>
    </div>
  );
}



function BlogList() {
  return (
    <div className='p-1'>
      <Swiper controlBlock={false} autoScroll={false} itemsLength={2} widthPercent={'21.375rem'} items={blogContent.map((item, i) => <Card key={i} {...item}></Card>)} />
    </div>
  );
}

export default BlogList;