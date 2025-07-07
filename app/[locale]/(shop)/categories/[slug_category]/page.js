"use client";

import { fetchProductsByCategory } from "../../../../../redux/reducer/cartSlice";
import ShopItem from "../../../../../shared/shop/ProductItem";
import ShopCardName from "../../../../../shared/shop/ShopCardName";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Page() {
  const { slug_category } = useParams();
  const locale = useLocale();
  const dispatch = useDispatch();

  const { byCategory, loading, error } = useSelector((state) => ({
    byCategory: state.cart.byCategory,
    loading: state.cart.loading,
    error: state.cart.error,
  }));
  const categoryData = byCategory ? byCategory[slug_category] : undefined;
  const products = categoryData?.products || [];

  useEffect(() => {
    if (slug_category && locale) {
      dispatch(fetchProductsByCategory({ categoryId: slug_category, locale }));
    }
  }, [slug_category, locale]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!products.length) return <div>No products found.</div>;

  return (
    <section className="flex flex-col gap-4">
      <ShopCardName name={products[0]?.category?.name || "Category"} />

      <div className="flex flex-wrap justify-center lg:justify-between gap-8">
        {products.map((product) => (
          <div key={product.id} className="sm:w-[48%] lg:w-[30%] xl:w-[23%]">
            <ShopItem product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Page;
