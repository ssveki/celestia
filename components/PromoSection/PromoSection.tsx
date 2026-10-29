"use client";

import { useRef } from "react";
import Image from "next/image";

const promos = [
  { bg: "/images/discounts-1.png", title: <>Скидка<br />для пенсионеров</>, description: "Все пенсионеры получат 20% скидку на билет при посещении планетария" },
  { bg: "/images/discounts-2.png", title: <>Пакет ко дню<br />рождения</>, description: "В свой день рождения посетители получат экскурсию по планетарию" },
  { bg: "/images/discounts-3.png", title: <>Акция<br />«День семьи»</>, description: "В воскресенье семьи с двумя детьми получают карту звездного неба" },
];

export default function PromoSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="promo" className="w-full bg-dark-gray px-[15px] py-10 md:px-[30px] md:py-16 xl:px-[50px] xl:py-20">
      <div className="mx-auto w-full md:max-w-[740px] xl:max-w-[1340px]">
        
        <div className="mb-6 flex items-center justify-center md:mb-10 xl:mb-14">
          <Image src="/icons/star.svg" alt="" width={56} height={56} className="mr-2 h-6 w-6 md:h-8 md:w-8 xl:mr-4 xl:h-9 xl:w-9" />
          <h2 className="font-benzin text-[24px] font-normal text-white md:text-[32px] xl:text-[36px]">Акции и скидки</h2>
        </div>

        <div className="relative">
          {/* Звездочки справа сверху (только на планшете и ПК) */}
          <Image src="/icons/star.svg" alt="" width={40} height={40} className="pointer-events-none absolute z-20 -top-8 right-2 hidden h-4 w-4 md:block xl:-top-20 xl:right-4 xl:h-10 xl:w-10" />
          <Image src="/icons/star.svg" alt="" width={80} height={80} className="pointer-events-none absolute z-20 -top-7 -right-7 hidden h-12 w-12 md:block xl:-top-18 xl:-right-18 xl:h-28 xl:w-28" />

          {/* Мобилка: слайдер. md+: сетка 3 колонки */}
          <div 
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0 xl:gap-6"
          >
            {promos.map((p, i) => (
              <div key={i} className="w-full shrink-0 snap-center md:w-auto">
                <PromoCard bg={p.bg} title={p.title} description={p.description} />
              </div>
            ))}
          </div>
        </div>

        {/* Кнопки навигации (видны только на мобилке) */}
        <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
          <button onClick={() => scroll("left")} className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-white">
            <Image src="/icons/btn-left-black.svg" alt="" width={20} height={20} className="h-4 w-4" />
          </button>
          <button onClick={() => scroll("right")} className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-blue">
            <Image src="/icons/btn-left-black.svg" alt="" width={20} height={20} className="h-4 w-4 rotate-180 invert" />
          </button>
        </div>

      </div>
    </section>
  );
}

function PromoCard({ bg, title, description }: { bg: string; title: React.ReactNode; description: string; }) {
  return (
      <article className="group relative flex w-full flex-col justify-end overflow-hidden rounded-[24px] border-2 border-transparent transition-all duration-500 active:border-white active:shadow-lg active:shadow-blue md:rounded-[28px] md:justify-between md:h-full xl:justify-end xl:rounded-[32px]">
      
      <div className="relative aspect-[426/380] w-full shrink-0 md:aspect-[224/240] xl:aspect-[426/380]">
        <Image 
          src={bg} 
          alt="" 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 33vw, 426px" 
          className="object-cover object-center" 
        />
      </div>

      <div className="relative z-10 -mt-10 flex flex-1 flex-row items-end justify-between gap-4 rounded-tr-[55px] bg-blue p-4 transition-colors duration-500 group-hover:bg-white group-active:bg-blue md:-mt-10 md:flex-col md:items-start md:justify-between md:p-5 md:pb-6 xl:-mt-20 xl:flex-row xl:items-center xl:rounded-tr-[95px] xl:p-6">
        <div className="w-full flex-1">
          <h3 className="font-benzin text-base leading-[1.1] text-white transition-colors duration-500 group-hover:text-black group-active:text-white md:text-lg xl:text-xl">{title}</h3>
          <p className="mt-2 font-gilroy text-[11px] leading-[1.45] text-white/90 transition-colors duration-500 group-hover:text-black/80 group-active:text-white/90 md:text-xs xl:text-[13px]">{description}</p>
        </div>
        
        <button className="inline-flex shrink-0 cursor-pointer items-center justify-center self-end rounded-full bg-white transition-colors duration-300 group-hover:bg-blue group-active:bg-white h-8 w-8 md:mt-auto md:h-9 md:w-9 xl:mt-0 xl:h-10 xl:w-10">
          <Image 
            src="/icons/arrow-black.svg" 
            alt="" 
            width={20} 
            height={20} 
            className="h-3 w-3 rotate-0 transition-transform duration-300 group-hover:-rotate-90 group-hover:invert group-active:-rotate-90 group-active:invert-0 md:h-4 md:w-4" 
          />
        </button>
      </div>
    </article>
  );
}