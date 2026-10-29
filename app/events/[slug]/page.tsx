"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { events } from "@/lib/data";
import EventGallery from "@/components/EventGallery/EventGallery";

export default function EventDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const event = events.find((e) => e.slug === slug);

  const [date, setDate] = useState("");
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleDateClick = () => {
    if (dateInputRef.current) {
      try {
        dateInputRef.current.showPicker();
      } catch (err) {
        dateInputRef.current.focus();
      }
    }
  };

  if (!event) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-dark-gray px-[15px] py-10 md:px-[30px] md:py-16 xl:px-[50px] xl:py-20">
      <div className="mx-auto w-full max-w-[1340px] md:max-w-[740px] xl:max-w-[1340px]">
        
        <Link 
          href="/" 
          className="mb-6 inline-flex items-center gap-2 font-gilroy text-sm text-white/60 transition-colors hover:text-white md:mb-8 md:text-base"
        >
          <span className="text-lg">←</span> Вернуться на главную
        </Link>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:items-start xl:gap-16">
          
          <div className="w-full">
            <EventGallery images={event.gallery} />
          </div>

          <div className="flex flex-col justify-center">
            
            <p className="font-gilroy text-[10px] uppercase tracking-wider text-white/80 md:text-xs xl:text-xs">
              {event.type}
            </p>
            
            {/* Заголовок как в карточке событий */}
            <h1 className="mt-2 break-words font-benzin text-[24px] leading-[1.1] text-white md:mt-3 md:text-[28px] xl:text-[32px]">
              {event.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6 md:gap-6 xl:gap-8">
              
              {/* Кружок возраста как в карточке */}
              <span className="inline-flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-white font-gilroy text-[11px] text-black md:h-[28px] md:w-[28px] xl:h-[30px] xl:w-[30px] xl:text-xs">
                {event.age}
              </span>
              
              <div className="flex items-center gap-4 md:gap-6 xl:gap-8">
                <Price icon="/icons/user.svg" value={event.priceAdult} />
                <Price icon="/icons/child.svg" value={event.priceChild} />
              </div>
            </div>

            {/* Описание как в карточке */}
            <p className="mt-6 font-gilroy text-sm leading-[1.5] text-white md:mt-6 md:text-[15px] xl:text-base">
              {event.description}
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row md:mt-10 xl:gap-4">
              <div 
                onClick={handleDateClick}
                className="relative inline-flex h-[40px] w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/40 px-5 font-gilroy text-sm text-white/70 transition-colors hover:border-white hover:text-white sm:w-auto md:h-[44px] xl:px-6"
              >
                <span>{date ? new Date(date).toLocaleDateString("ru-RU") : "Выбрать дату"}</span>
                <Image 
                  src="/icons/btn-left-black.svg" 
                  alt="" 
                  width={12} 
                  height={12} 
                  className="h-3 w-3 -rotate-90 opacity-70 invert" 
                />
                <input 
                  type="date" 
                  ref={dateInputRef}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0" 
                />
              </div>

              <button className="inline-flex h-[40px] w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-blue px-6 font-benzin text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black sm:w-auto md:h-[44px] xl:px-8">
                Купить билет
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

function Price({ icon, value }: { icon: string; value: string }) {
  return (
    <div className="flex items-center gap-[6px] xl:gap-[8px]">
      {/* Иконки и текст как в карточке */}
      <span className="inline-flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-white md:h-[26px] md:w-[26px] xl:h-[28px] xl:w-[28px]">
        <Image 
          src={icon} 
          alt="" 
          width={12} 
          height={12} 
          className="h-3 w-3 md:h-[14px] md:w-[14px]" 
        />
      </span>
      <span className="font-gilroy text-sm text-white xl:text-[15px]">
        {value} ₽
      </span>
    </div>
  );
}