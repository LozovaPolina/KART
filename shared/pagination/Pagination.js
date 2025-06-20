'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Pagination({ totalPages }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get('page')) || 0;

  const setNewPage = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  };


  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setNewPage(i)}
          className={`w-8 h-8 rounded-md hover:shadow hover:bg-[#A0C287] hover:text-white text-sm font-medium ${currentPage === i
            ? 'bg-[#A0C287] text-white'
            : 'border border-[#A0C287] text-[#A0C287]'
            }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}