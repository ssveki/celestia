"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import EventCard from "@/components/EventCard/EventCard";
import { events } from "@/lib/data";

const tabs = ["Программы", "Мероприятия", "Лекции"];

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => { if (window.innerWidth >= 768) setVisibleCount(events.length); };
    if (window.innerWidth >= 768) setVisibleCount(events.length);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowMore = () => { if (visibleCount < events.length) setVisibleCount((prev) => prev + 1); };
  const displayedEvents = events.slice(0, visibleCount);
  const hasMore = visibleCount < events.length;

  if (!isMounted) return null;

  return (
    <section className="w-full bg-dark-gray px-[15px] py-10 md:px-[30px] md:py-16 xl:px-[50px] xl:py-20">
      <div className="mx-auto w-full md:max-w-[740px] xl:max-w-[1340px]">
        
        <div className="mb-[30px] flex items-center justify-center gap-[10px] lg:gap-[20px] xl:gap-[20px]">
          <Image src="/icons/star.svg" alt="" width={57} height={57} className="h-5 w-5 md:h-10 md:w-10 xl:h-18 xl:w-18" />
          <h2 className="font-benzin text-[24px] font-normal text-white md:text-[32px] xl:text-[36px]">События</h2>
          <Image src="/icons/star.svg" alt="" width={57} height={57} className="h-5 w-5 md:h-10 md:w-10 xl:h-18 xl:w-18" />
        </div>

        <div className="mb-[30px] flex flex-wrap items-center justify-center gap-[10px] lg:mb-[40px]">
          {tabs.map((tab, i) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(i)} 
              className={`inline-flex h-[36px] cursor-pointer items-center justify-center rounded-full border px-3 font-gilroy text-xs transition-colors duration-300 md:px-10 md:text-sm xl:text-sm ${activeTab === i ? "border-blue bg-blue text-white" : "border-white/30 bg-transparent text-white hover:border-white/80 hover:text-white"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-[30px]">
          {displayedEvents.map((e) => <EventCard key={e.slug} event={e} />)}
        </div>
        
        <button 
          onClick={handleShowMore} 
          className={`mt-[30px] h-[48px] w-full rounded-full bg-white font-benzin text-sm text-black transition-all duration-300 md:text-base xl:text-base cursor-pointer hover:bg-blue hover:text-white`}
        >
          Показать ещё
        </button>
      </div>
    </section>
  );
}