// components/EventsSection/EventsSection.tsx
import Image from "next/image";
import EventCard from "@/components/EventCard/EventCard";
import { events } from "@/lib/data";

const tabs = ["Программы", "Мероприятия", "Лекции"];

export default function EventsSection() {
  return (
    <section className="w-full bg-dark-gray px-[15px] py-10 lg:px-[142px] lg:py-16 xl:px-[290px] xl:py-20">
      <div className="mx-auto w-full max-w-[1340px]">

        {/* Заголовок */}
        <div className="mb-[30px] flex items-center justify-center gap-[10px] lg:gap-[20px] xl:gap-[30px]">
          <Image
            src="/icons/star.svg"
            alt=""
            width={57}
            height={57}
            className="h-6 w-6 md:h-9 md:w-9 xl:h-[57px] xl:w-[57px]"
          />
          <h2 className="font-benzin text-[24px] font-normal text-white md:text-[40px] xl:text-[57px]">
            События
          </h2>
          <Image
            src="/icons/star.svg"
            alt=""
            width={57}
            height={57}
            className="h-6 w-6 md:h-9 md:w-9 xl:h-[57px] xl:w-[57px]"
          />
        </div>

        {/* Табы */}
        <div className="mb-[30px] flex flex-wrap items-center justify-center gap-[10px] lg:mb-[40px] xl:mb-[60px]">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`inline-flex h-[40px] cursor-pointer items-center justify-center rounded-full border px-4 font-gilroy text-xs transition-colors duration-300 md:px-6 md:text-sm xl:px-8 xl:text-base ${
                i === 0
                  ? "border-blue bg-blue text-white hover:border-white/80 active:border-white active:bg-blue/80"
                  : "border-white/30 text-white hover:border-white/80 hover:text-white active:border-blue active:bg-blue active:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Список карточек из data.ts */}
        <div className="flex flex-col gap-[30px]">
          {events.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>

        {/* Кнопка "Показать ещё" */}
        <button className="mt-[30px] h-[52px] w-full cursor-pointer rounded-full bg-white font-benzin text-sm text-black transition-all duration-300 hover:bg-blue hover:text-white active:ring-2 active:ring-white active:ring-offset-2 active:ring-offset-dark-gray md:text-base xl:text-lg">
          Показать ещё
        </button>

      </div>
    </section>
  );
}