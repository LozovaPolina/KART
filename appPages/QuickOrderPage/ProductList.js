"use client";

import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import ProductSection from "./ProductSection";
import { API_URL } from "../../data/url";

export default function ProductThemeList() {
  const locale = useLocale();
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(API_URL + "/products/categories/", {
          headers: {
            "Accept-Language": locale,
          },
        });

        if (!res.ok) throw new Error("Ошибка загрузки категорий");

        const data = await res.json();
        setCategories(data);
      } catch (err) {
        setError(err.message || "Неизвестная ошибка");
        setCategories(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [locale]);

  if (loading)
    return <p className="text-center text-gray-500">Загрузка категорий...</p>;
  if (error) return <p className="text-center text-red-500">Ошибка: {error}</p>;
  if (!categories || categories.length === 0)
    return <p>Категории не найдены</p>;

  return (
    <div className="space-y-12">
      {categories.map((category, i) => (
        <ProductSection
          key={category.id}
          theme={category.name}
          slug={category.slug}
          id={category.id}
        />
      ))}
    </div>
  );
}
