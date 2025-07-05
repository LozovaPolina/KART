"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Title from "../../shared/ui/title/Title";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const t = useTranslations("FAQPage");

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: t("q1.question"), answer: t("q1.answer") },
    { question: t("q2.question"), answer: t("q2.answer") },
    { question: t("q3.question"), answer: t("q3.answer") },
    { question: t("q4.question"), answer: t("q4.answer") },
    { question: t("q5.question"), answer: t("q5.answer") },
    { question: t("q6.question"), answer: t("q6.answer") },
    { question: t("q7.question"), answer: t("q7.answer") },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-center items-center rounded-t-[100px] bg-[#F5F5F5] mb-2 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] py-6">
        <Title color="green">{t("title")}</Title>
      </div>

      <div className="flex flex-col gap-[5px]">
        {faqData.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center justify-between hover:shadow-sm shadow-[0px_2px_10px_rgba(0,0,0,0.1)] flex-col gap-1 sm:gap-0 sm:flex-row">
              <button
                onClick={() => toggle(index)}
                className={`w-full text-left p-4 flex justify-between items-center text-[#848484] ${openIndex === index ? "font-medium" : ""}`}
              >
                <span>{item.question}</span>
                <span>
                  {openIndex === index ? (
                    <Minus color="#848484" size={18} />
                  ) : (
                    <Plus color="#848484" size={18} />
                  )}
                </span>
              </button>
            </div>

            <div className="">
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 p-3" : "max-h-0 p-0"
                  } w-full text-left flex justify-between pl-10 items-center text-[#848484]`}
              >
                <span
                  className={`${openIndex === index ? "opacity-100 block" : "opacity-0 hidden"
                    } transition-opacity duration-500`}
                >
                  {item.answer}
                </span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}