"use client"

import HintNavigation from '../../shared/hint-navigation/HintNavigation';
import Title from '../../shared/ui/title/Title';
import { useState } from 'react';
import InstructorCard from './InstructorCard';
import Pagination from '../../shared/pagination/Pagination';
import { useSearchParams } from "next/navigation";
import { instructors } from '../../data/instructors'



export default function InstructorsPage() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 0;
  const perPage = 6;
  const pagedInstructors = instructors.slice(page * perPage, (page + 1) * perPage);

  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full">
      <HintNavigation
        links={[
          { label: 'Главная', href: '../' },
          { label: 'Инструкторы', href: '/instructors' },
        ]}
      />
      <Title color="green">Сертифицированные инструкторы KART</Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {pagedInstructors?.map((instructor, idx) => (
          <InstructorCard key={idx} instructor={instructor} />
        ))}
      </div>

      <Pagination totalPages={Math.ceil(instructors.length / perPage)} />
    </div>
  );
}