// app/(home)/instructors/page.js
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Instructors = dynamic(() => import('./Instructors'), {
  ssr: false,
});

export default function InstructorsClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Instructors />
    </Suspense>
  );
}