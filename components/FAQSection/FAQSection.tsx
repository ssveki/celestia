"use client";

import { useState } from "react";
import Image from "next/image";

const faq = [
  {
    q: "Какие выставки и события, посвященные космосу, проходят в планетарии?",
    a: "Выставка фотографий и изображений космических объектов, интерактивные демонстрации о нашей Солнечной системе, путешествиях по галактикам и другим небесным телам. Также проводятся лекции и семинары о космической науке и астрономии, а иногда даже организуются ночные наблюдения за звездами.",
  },
  {
    q: "Какие возможности есть для детей на выставках в планетарии?",
    a: "Для детей организованы интерактивные зоны, викторины, мастер-классы и специальные экскурсии с астрономами.",
  },
  {
    q: "Какова стоимость посещения выставок и событий в планетарии?",
    a: "Стоимость зависит от типа события. Взрослый билет — от 500 ₽, детский — от 300 ₽. Для пенсионеров и студентов действуют скидки.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full bg-dark-gray px-[15px] py-10 lg:px-[142px] lg:py-16 xl:px-[290px] xl:py-20">
      <div className="mx-auto w-full max-w-[1340px]">
        
        <h2 className="mb-[30px] text-center font-benzin text-[24px] leading-[1.1] text-white md:text-[40px] xl:mb-[60px] xl:text-[57px]">
          Часто задаваемые<br />вопросы
        </h2>

        <div className="flex flex-col gap-[10px] xl:gap-[15px]">
          {faq.map((item, i) => {
            const isOpen = i === openIndex;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-[30px] transition-colors duration-300 md:rounded-[40px] xl:rounded-[55px] ${
                  isOpen ? "bg-[#1E1E1E]" : "bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left md:px-8 md:py-6 xl:px-10 xl:py-8"
                >
                  {/* Добавил flex-1 и min-w-0, чтобы текст правильно переносился и не вылезал */}
                  <span
                    className={`flex-1 min-w-0 font-benzin text-sm leading-[1.2] md:text-lg xl:text-[22px] ${
                      isOpen ? "text-white" : "text-blue"
                    }`}
                  >
                    {item.q}
                  </span>
                  
                  {/* Кнопка с иконкой */}
                  <div
                    className={`flex shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen ? "bg-black" : "bg-blue"
                    } h-[30px] w-[30px] md:h-[40px] md:w-[40px] xl:h-[58px] xl:w-[58px]`}
                  >
                    <Image
                      src={isOpen ? "/icons/minus.svg" : "/icons/plus.svg"}
                      alt=""
                      width={20}
                      height={20}
                      className="h-3 w-3 md:h-4 md:w-4 xl:h-5 xl:w-5"
                    />
                  </div>
                </button>

                {/* Плавное раскрытие */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 font-gilroy text-sm leading-[1.45] text-white/80 md:px-8 md:pb-8 md:text-base xl:px-10 xl:pb-10">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="mt-[30px] h-[52px] w-full cursor-pointer rounded-full bg-blue font-benzin text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black xl:mt-[40px] xl:text-base">
          Показать еще
        </button>
      </div>
    </section>
  );
}