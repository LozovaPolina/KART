"use client";

import { useLocale } from "next-intl";
import NavLink from "./NavLink";
import { useProductCategories } from "../../hooks/useProductCategories";

export default function ProductLinks() {
  const locale = useLocale();
  const { categories, loading, error } = useProductCategories(locale);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;
  if (categories.length === 0) return <p>No categories found.</p>;

  return (
    <div className="hidden [@media(min-width:1280px)]:flex justify-center gap-[40px]">
      {categories.map((category) => (
        <NavLink
          key={category.id}
          href={`/categories/${category.id}`}
          label={category.name}
        />
      ))}
    </div>
  );
}
export function ProductLinksMobile({ onClose }) {
  const locale = useLocale();
  const { categories, loading, error } = useProductCategories(locale);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;
  if (categories.length === 0) return <p>No categories found.</p>;

  return (
    <nav className="flex flex-col">
      {!loading &&
        categories.map((category) => (
          <NavLink
            key={category.id}
            href={`/products/categories/${category.id}`}
            label={category.name}
            onClick={onClose}
            styles="border-b border-[#EDEDED] pb-4 text-sm!"
          />
        ))}
    </nav>
  );
}
