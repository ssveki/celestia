"use client";

import { useState } from "react";
import Image from "next/image";

const faq = [
  { q: "Какие выставки и события, посвященные космосу, проходят в планетарии?", 
    a: "Выставка фотографий и изображений космических объектов, интерактивные демонстрации о нашей Солнечной системе, путешествиях по галактикам и другим небесным телам. Также проводятся лекции и семинары о космической науке и астрономии, а иногда даже организуются ночные наблюдения за звездами." 
  },
  { q: "Какие возможности есть для детей на выставках в планетарии?", 
    a: "Для детей организованы интерактивные зоны, викторины, мастер-классы и специальные экскурсии с астрономами." 
  },
  { q: "Какова стоимость посещения выставок и событий в планетарии?", 
    a: "Стоимость зависит от типа события. Взрослый билет — от 500 ₽, детский — от 300 ₽. Для пенсионеров и студентов действуют скидки." 
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  return (
    <section className="w-full bg-dark-gray px-[15px] py-10 md:px-[30px] md:py-16 xl:px-[50px] xl:py-20">
      <div className="mx-auto w-full xl:max-w-[1340px] md:max-w-[740px]">
        <h2 className="mb-[30px] text-center font-benzin text-[24px] leading-[1.1] text-white md:text-[32px] xl:mb-[40px] xl:text-[36px]">Часто задаваемые<br />вопросы</h2>
        <div className="flex flex-col gap-[20px] xl:gap-[12px]">
          {faq.map((item, i) => {
            const isOpen = i === openIndex;
            return (
              <div key={i} className="flex flex-col">
                <button onClick={() => setOpenIndex(isOpen ? -1 : i)} className="flex w-full cursor-pointer items-center justify-between gap-5 rounded-[36px] bg-white px-5 py-4 text-left md:rounded-[36px] md:px-6 md:py-3 xl:rounded-[45px] xl:px-8 xl:py-4">
                  <span className={`flex-1 min-w-0 font-benzin text-sm leading-[1.3] md:text-base xl:text-[18px] ${isOpen ? "text-black" : "text-blue"}`}>{item.q}</span>
                  <div className={`flex shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? "bg-black" : "bg-blue"} h-[38px] w-[38px] md:h-[36px] md:w-[36px] xl:h-[44px] xl:w-[44px]`}>
                    <Image src={isOpen ? "/icons/minus.svg" : "/icons/plus.svg"} alt="" width={30} height={30} className="h-3 w-3 md:h-4 md:w-4 xl:h-5 xl:w-5" />
                  </div>
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pt-4 pb-2 md:pt-6" : "grid-rows-[0fr] opacity-0 pt-0 pb-0"}`}>
                  <div className="overflow-hidden"><p className="px-5 font-gilroy text-xs leading-[1.5] text-white/90 md:px-8 md:text-sm xl:px-10 xl:text-base">{item.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="mt-[30px] h-[48px] w-full cursor-pointer rounded-full bg-blue font-benzin text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black xl:mt-[40px] xl:h-[52px] xl:text-base">Показать еще</button>
      </div>
    </section>
  );
}