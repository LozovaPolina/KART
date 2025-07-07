// hooks/useProductCategories.ts
"use client";

import { API_URL } from "../data/url";
import { useEffect, useState } from "react";

export function useProductCategories(locale) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(API_URL + "/products/categories/", {
          headers: { "Accept-Language": locale },
        });
        if (!res.ok) throw new Error("Failed to fetch categories");

        const data = await res.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, [locale]);

  return { categories, loading, error };
}
