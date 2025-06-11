"use client"

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import Title from "../../shared/ui/title/Title";

const faqData = [
  { question: "Что такое очень желтый ноготь, который не похож на грибок?", answer: "Ответ на этот вопрос..." },
  { question: "Что такое вросший ноготь? Почему развивается вросший ноготь? Как он возникает?", answer: "Ответ на этот вопрос..." },
  { question: "Можно ли пользоваться лаком клиентке, которая страдает от ногтевого грибка?", answer: "Ответ на этот вопрос..." },
  { question: "Можно ли пользоваться лаком клиентке, которая страдает от ногтевого грибка?", answer: "Ответ на этот вопрос..." },
  { question: "Можно ли пользоваться лаком клиентке, которая страдает от ногтевого грибка?", answer: "Ответ на этот вопрос..." },
  { question: "Можно ли пользоваться лаком клиентке, которая страдает от ногтевого грибка?", answer: "Ответ на этот вопрос..." },
  { question: "Можно ли пользоваться лаком клиентке, которая страдает от ногтевого грибка?", answer: "Ответ на этот вопрос..." },
  // Повтори или разнообразь при необходимости
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-center items-center rounded-t-[100px] bg-[#F5F5F5] mb-2 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] py-6">
        <Title color="green">Часто задаваемые вопросы</Title>
      </div>


      <div className="flex flex-col gap-[5px]">

        {faqData.map((item, index) => (

          <>
            <div
              key={index}
              className="flex items-center justify-between  hover:shadow-sm  shadow-[0px_2px_10px_rgba(0,0,0,0.1)] flex-col gap-1 sm:gap-0 sm:flex-row"
            >

              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-4  flex justify-between items-center text-[#848484]"
              >
                <span>{item.question}</span>
                <span>{openIndex === index ? <Minus color="#848484" size={18} /> : <Plus color="#848484" size={18} />}</span>
              </button>

            </div>

            <div className="">
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 p-3" : "max-h-0 p-0"
                  } w-full text-left flex justify-between shadow-[0px_2px_10px_rgba(0,0,0,0.1)] items-center text-[#848484]`}
              >
                <span className={`${openIndex === index ? "opacity-100 block" : "opacity-0 hidden"} transition-opacity duration-500`}>
                  {item.answer}
                </span>
              </div>
            </div>
          </>


        ))}

      </div>

    </div>
  );
}
