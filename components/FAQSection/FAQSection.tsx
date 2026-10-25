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
    <section id="faq" className="w-full bg-dark-gray px-[15px] py-10 md:px-[30px] md:py-16 xl:px-[50px] xl:py-20">
      <div className="mx-auto w-full max-w-[1340px]">
        
        <h2 className="mb-[30px] text-center font-benzin text-[24px] leading-[1.1] text-white md:text-[40px] xl:mb-[60px] xl:text-[57px]">
          Часто задаваемые<br />вопросы
        </h2>

        <div className="flex flex-col gap-[15px] xl:gap-[20px]">
          {faq.map((item, i) => {
            const isOpen = i === openIndex;
            return (
              <div key={i} className="flex flex-col">
                
                {/* Вопрос (белая капсула) */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-[35px] bg-white px-6 py-5 text-left md:rounded-[50px] md:px-10 md:py-6 xl:rounded-[80px] xl:px-[50px] xl:py-8"
                >
                  <span
                    className={`flex-1 min-w-0 font-benzin text-sm leading-[1.3] md:text-lg xl:text-[24px] ${
                      isOpen ? "text-black" : "text-blue"
                    }`}
                  >
                    {item.q}
                  </span>
                  
                  {/* Круглая кнопка с иконкой, прижатая вправо */}
                  <div
                    className={`flex shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen ? "bg-black" : "bg-blue"
                    } h-[40px] w-[40px] md:h-[50px] md:w-[50px] xl:h-[64px] xl:w-[64px]`}
                  >
                    <Image
                      src={isOpen ? "/icons/minus.svg" : "/icons/plus.svg"}
                      alt=""
                      width={24}
                      height={24}
                      className="h-5 w-5 md:h-6 md:w-6 xl:h-8 xl:w-8"
                    />
                  </div>
                </button>

                {/* Ответ (на темном фоне) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pt-6 pb-4 md:pt-8" : "grid-rows-[0fr] opacity-0 pt-0 pb-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* Отступы слева/справа такие же, как у текста в белой кнопке */}
                    <p className="px-6 font-gilroy text-sm leading-[1.5] text-white/90 md:px-10 md:text-base xl:px-[50px] xl:text-lg">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="mt-[40px] h-[56px] w-full cursor-pointer rounded-full bg-blue font-benzin text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black xl:h-[64px] xl:text-lg">
          Показать еще
        </button>
      </div>
    </section>
  );
}