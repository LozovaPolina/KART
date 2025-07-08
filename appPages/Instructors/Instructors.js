"use client";

import HintNavigation from "../../shared/hint-navigation/HintNavigation";
import Title from "../../shared/ui/title/Title";

import InstructorCard from "./InstructorCard";
import Pagination from "../../shared/pagination/Pagination";
import { useSearchParams } from "next/navigation";
import Button from "../../shared/ui/button/Button";
import { Link } from "../../i18n/navigation";
import { useState, useEffect } from "react";
import { API_URL } from "../../data/url";

import { useLocale } from "next-intl";

export default function InstructorsPage() {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const page = Number(searchParams.get("page")) || 0;
  const perPage = 6;
  const [loading, setLoading] = useState(true);
  const [instructors, setIsntructors] = useState([]);
  const pagedInstructors = instructors.slice(
    page * perPage,
    (page + 1) * perPage
  );

  useEffect(() => {
    const fetchIntructors = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${API_URL}/users/filter/?is_instructor=true`, {
          headers: {
            "Accept-Language": locale,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setIsntructors(data);
      } catch (error) {
        console.error(error);
        setIsntructors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchIntructors();
  }, [locale]);

  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full">
      <HintNavigation
        links={[
          { label: "Главная", href: "../" },
          { label: "Инструкторы", href: "/instructors" },
        ]}
      />
      <Title color="green">Сертифицированные инструкторы KART</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {instructors?.map((instructor) => (
          <InstructorCard
            key={instructor.id}
            firstName={instructor.first_name}
            lastName={instructor.last_name}
            position={instructor.position}
            country={instructor.country}
            contacts={instructor.contacts}
          />
        ))}
      </div>

      <Pagination totalPages={Math.ceil(instructors.length / perPage)} />

      <Link href="/criteria-instructor">
        <Button>Стать инструктором</Button>
      </Link>
    </div>
  );
}
