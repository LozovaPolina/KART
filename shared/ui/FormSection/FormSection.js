import React from 'react';

function FormSection({ children }) {
  return (
    <section className="bg-[#F5F5F5] rounded-xl p-6 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] w-full flex flex-col gap-4 sm:gap-6">
      {children}
    </section>
  );
}

export default FormSection;