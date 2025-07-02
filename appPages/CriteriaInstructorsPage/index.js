import { ButtonWithCircleLink } from '../../shared/ui/button/ButtonWithCircleLink';
import React from 'react';
import { criterisInstructors } from "../../data/criteriaInstructors"
import { useTranslations } from 'next-intl';
import Title from '../../shared/ui/title/Title';
import Text from '../../shared/ui/text/Text';
import HintNavigation from '../../shared/hint-navigation/HintNavigation';
export default function CriteriaInstructorsPage() {
  const t = useTranslations('InstructorCriteriaPage');

  return (
    <section className='flex flex-col gap-10 items-center'>
      <div className="flex flex-col items-center gap-4 max-w-[603px] ">
        <HintNavigation
          links={[
            { label: 'Главная', href: '../' },
            { label: 'Критерии', href: '/criteria-instructors' },
          ]}
        />
        <Title color='green'>{t("title")}</Title>
        <Text className='text-[#404040]! text-center'>{t("text")}</Text>
      </div>

      <div className='flex flex-wrap justify-center sm:gap-x-6 gap-y-12 sm:gap-y-18 h-fit p-6 rounded-2xl '>
        {criterisInstructors(t).map((item, index) => (
          <div
            key={index}
            className='flex flex-col gap-2 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]'
          >
            <div className='flex flex-col justify-between rounded-2xl space-y-2 shadow-[0_2px_10px_rgba(0,0,0,0.1)] relative'>
              <div className='flex flex-col flex-1 justify-between rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.1)] px-4 py-6 w-full bg-white relative text-center'>
                <div className='flex items-center gap-2 w-full text-center h-[72px]'> {/* <— Add fixed or min height */}
                  <h3 className='text-2xl w-full'>{item.title}</h3>
                </div>
                <div className='w-8 h-8 bg-[#43B549] text-white rounded-full flex items-center justify-center font-bold absolute -top-4 left-1/2 -translate-x-1/2'>
                  {item.number}
                </div>
              </div>
            </div>

            <div className='shadow-[0_2px_10px_rgba(0,0,0,0.1)] text-center p-4  rounded-2xl bg-[#F5F5F580] h-full'>
              <p className='text-[#404040] text-sm h-full flex items-center'>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <ButtonWithCircleLink
        href='/instructors-form'
        buttonText={t('sendRequest')}
      />
    </section>
  );
}
