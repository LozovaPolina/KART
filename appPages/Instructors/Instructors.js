"use client"

import HintNavigation from '../../shared/hint-navigation/HintNavigation';
import Title from '../../shared/ui/title/Title';
import { useState } from 'react';
import InstructorCard from './InstructorCard';
import Pagination from '../../shared/pagination/Pagination';
import { useSearchParams } from "next/navigation";


const instructors = [
  {
    name: "Алена Шутова",
    role: "Ведущий инструктор КЯП",
    location: "Россия, Москва",
    image: "/images/instructors/shutova.jpg",
    socials: [
      { type: 'instagram', url: 'https://instagram.com/...' },
      { type: 'mail', url: 'mailto:someone@mail.com' },
      { type: 'globe', url: 'https://website.com' }
    ],
  },
  {
    name: "Лидия Пушко",
    role: "",
    location: "Румыния, Бухарест",
    image: "/images/instructors/pushko.jpg",
    socials: [
      { type: 'instagram', url: 'https://instagram.com/...' },
      { type: 'mail', url: 'mailto:someone@mail.com' },
    ],
  },
  {
    name: "Olga Clapcott",
    role: "",
    location: "United Kingdom, Bournemouth",
    image: "/images/instructors/clapcott.jpg",
    socials: [
      { type: 'instagram', url: 'https://instagram.com/...' },
      { type: 'mail', url: 'mailto:someone@mail.com' },
    ],
  },
  {
    name: "Lyudmyla Nevmyvako",
    role: "",
    location: "Italia, San Giovanni",
    image: "/images/instructors/nevmyvako.jpg",
    socials: [
      { type: 'instagram', url: 'https://instagram.com/...' },
      { type: 'mail', url: 'mailto:someone@mail.com' },
      { type: 'globe', url: 'https://website.com' }
    ],
  },
  {
    name: "Гумеля Юлия",
    role: "",
    location: "Украина, Днепр",
    image: "/images/instructors/gumelya.jpg",
    socials: [
      { type: 'instagram', url: 'https://instagram.com/...' },
      { type: 'mail', url: 'mailto:someone@mail.com' },
    ],
  },
  {
    name: "Svetlana Raykhman",
    role: "",
    location: "Чехия, Прага",
    image: "/images/instructors/raykhman.jpg",
    socials: [
      { type: 'instagram', url: 'https://instagram.com/...' },
      { type: 'mail', url: 'mailto:someone@mail.com' },
    ],
  },
  {
    name: "Oksana Levadskaia",
    role: "",
    location: "Italia, Taranto",
    image: "/images/instructors/levadskaia.jpg",
    socials: [
      { type: 'instagram', url: 'https://instagram.com/...' },
      { type: 'mail', url: 'mailto:someone@mail.com' },
      { type: 'globe', url: 'https://website.com' }
    ],
  },
  {
    name: "Шаравьева Анна",
    role: "",
    location: "Россия, Пермь",
    image: "/images/instructors/sharavieva.jpg",
    socials: [
      { type: 'instagram', url: 'https://instagram.com/...' },
      { type: 'mail', url: 'mailto:someone@mail.com' },
    ],
  },
  {
    name: "Aurelija Illingworth",
    role: "",
    location: "United Kingdom, Manchester",
    image: "/images/instructors/illingworth.jpg",
    socials: [
      { type: 'instagram', url: 'https://instagram.com/...' },
      { type: 'mail', url: 'mailto:someone@mail.com' },
      { type: 'globe', url: 'https://website.com' }
    ],
  },
  {
    name: "Лидия Пушко",
    role: "",
    location: "Румыния, Бухарест",
    image: "/images/instructors/pushko.jpg",
    socials: [
      { type: 'instagram', url: 'https://instagram.com/...' },
      { type: 'mail', url: 'mailto:someone@mail.com' },
    ],
  },
  {
    name: "Лидия Пушко",
    role: "",
    location: "Румыния, Бухарест",
    image: "/images/instructors/pushko.jpg",
    socials: [
      { type: 'instagram', url: 'https://instagram.com/...' },
      { type: 'mail', url: 'mailto:someone@mail.com' },
    ],
  },
  {
    name: "Лидия Пушко",
    role: "",
    location: "Румыния, Бухарест",
    image: "/images/instructors/pushko.jpg",
    socials: [
      { type: 'instagram', url: 'https://instagram.com/...' },
      { type: 'mail', url: 'mailto:someone@mail.com' },
    ],
  },
  {
    name: "Лидия Пушко",
    role: "",
    location: "Румыния, Бухарест",
    image: "/images/instructors/pushko.jpg",
    socials: [
      { type: 'instagram', url: 'https://instagram.com/...' },
      { type: 'mail', url: 'mailto:someone@mail.com' },
    ],
  },
];

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