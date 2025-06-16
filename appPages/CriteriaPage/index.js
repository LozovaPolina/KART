import { ButtonWithCircleLink } from '../../shared/ui/button/ButtonWithCircleLink';
import Link from 'next/link';
import React from 'react';



const items = [
  {
    number: 1,
    title: "Профиль деятельности",
    content:
      "Опыт работы в сфере педикюра/подологии. Наличие лицензии (если требуется) и соответствующих разрешений для ведения обучающей и торговой деятельности.",
  },
  {
    number: 2,
    title: "Образовательная деятельность",
    content:
      "Готовность организовывать и проводить обучающие мероприятия (онлайн/оффлайн курсы, семинары, мастер-классы) по методике педикюра KART. Опыт работы в педикюре/подологии. Наличие лицензии (при необходимости) и разрешений для обучения и торговли.",
  },
  {
    number: 3,
    title: "Инфраструктура",
    content:
      "Оборудованный офис с шоурумом и учебный класс. Возможность хранения и логистики продукции на закреплённой территории.",
  },
  {
    number: 4,
    title: "Коммерческий потенциал",
    content:
      "Наличие наработанной клиентской базы (салоны, специалисты, учебные центры). Готовность выполнять план по закупкам и развитию продаж.",
  },
  {
    number: 5,
    title: "Маркетинг и продвижение",
    content:
      "Активное участие в продвижении бренда в своём регионе (социальные сети, участие в выставках, сотрудничество с профильными организациями). Следование корпоративным стандартам бренда в маркетинговых материалах.",
  },
  {
    number: 6,
    title: "Репутация и надёжность",
    content:
      "Положительная деловая репутация. Гарантия соблюдения договорных обязательств и политики бренда.",
  },
  {
    number: 7,
    title: "Региональная эксклюзивность",
    content:
      "Готовность развивать бренд на закреплённой территории с учётом условий эксклюзивного или полуэксклюзивного представительства.",
  },
];
// </div >
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100">
//     {items.map((item) => (
//       <div
//         key={item.number}
//         className="bg-white rounded-xl shadow-md p-4 flex flex-col h-full"
//       >
//         <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mb-2">
//           {item.number}
//         </div>
//         <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
//         <p className="text-gray-600 text-sm flex-grow">{item.content}</p>
//       </div>
//     ))}
//   </div>
function CriteriaPage() {

  return <section className='flex flex-col gap-10 items-center'>
    <div className="flex flex-wrap justify-center sm:gap-x-6 gap-y-12 sm:gap-y-18 h-fit p-8 rounded-xl">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
        >
          <div className="flex flex-col  justify-between rounded-lg space-y-2 shadow-[0_2px_10px_rgba(0,0,0,0.1)] relative">
            <div className="flex justify-between rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.1)] p-3 w-full bg-[#FFFFFF] relative text-center">
              <div className="flex items-center gap-2 w-full">
                <div className="flex flex-col w-full">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                </div>
              </div>
              <div className="w-8 h-8 bg-[#43B549] text-white rounded-full flex items-center justify-center font-bold absolute -top-4 left-1/2 -translate-x-1/2 ">
                {item.number}
              </div>
            </div>
          </div>

          <div className="shadow-[0_2px_10px_rgba(0,0,0,0.1)] text-center p-4 rounded-lg bg-[#F5F5F580] flex flex-col justify-between gap-1  flex-grow h-full">
            <p className="text-[#404040] text-sm flex-grow">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
    <ButtonWithCircleLink href='/' buttonText='Отправить запрос' buttonClassName='bg-[#81D742]' />

  </section>
};

export default CriteriaPage;
