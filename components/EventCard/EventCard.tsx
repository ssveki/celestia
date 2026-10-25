import Image from "next/image";
import Link from "next/link";
import { EventItem } from "@/lib/data";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="group rounded-[28px] p-5 transition-colors duration-500 hover:bg-blue lg:rounded-[40px] xl:rounded-[55px] xl:p-6">

      {/* 1440px+ (xl) */}
      <div className="hidden xl:grid xl:grid-cols-[313px_minmax(90px,auto)_minmax(650px,1fr)] xl:gap-x-6">
        <div className="relative self-start">
          <Image
            src={event.img}
            alt={event.title}
            width={313}
            height={159}
            className="h-[159px] w-[313px] rounded-[55px] object-cover"
          />
          <span className="absolute -right-2 -top-2 z-10 inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white font-gilroy text-[12px] text-black">
            {event.age}
          </span>
        </div>

        <div className="min-w-0 self-start">
          <p className="font-gilroy text-xs uppercase tracking-wider text-white/60 xl:text-sm">
            {event.type}
          </p>
          <Link href={`/events/${event.slug}`} className="hover:underline">
            <h3 className="mt-3 break-words font-benzin text-[32px] leading-[1.1] text-white">
              {event.title}
            </h3>
          </Link>
        </div>

        <div className="flex min-w-0 flex-col">
          <p className="font-gilroy text-base leading-[1.5] text-white">
            {event.description}
          </p>
          <div className="mt-auto flex items-center justify-between pt-6">
            <div className="flex items-center gap-[40px]">
              <Price icon="/icons/user.svg" value={event.priceAdult} />
              <Price icon="/icons/child.svg" value={event.priceChild} />
            </div>
            <div className="flex items-center gap-[10px]">
              <Link 
                href={`/events/${event.slug}`} 
                className="inline-flex h-[40px] cursor-pointer items-center gap-2 rounded-full border border-white/40 px-4 font-gilroy text-xs text-white/70 transition-colors hover:border-white hover:text-white"
              >
                Выбрать дату
                <Image src="/icons/btn-left-black.svg" alt="" width={12} height={12} className="h-3 w-3 -rotate-90 opacity-70 invert" />
              </Link>
              <Link href={`/events/${event.slug}`} className="inline-flex h-[40px] items-center justify-center rounded-full bg-blue px-4 font-benzin text-xs text-white transition-colors hover:bg-white hover:text-black">
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 768px–1439px (md-lg) */}
      <div className="hidden md:block xl:hidden">
        <div className="flex items-start gap-10 lg:gap-20">
          <div className="relative shrink-0">
            <Image
              src={event.img}
              alt={event.title}
              width={313}
              height={159}
              className="h-[159px] w-[313px] rounded-[40px] object-cover lg:rounded-[55px]"
            />
            <span className="absolute -right-2 -top-2 z-10 inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white font-gilroy text-[12px] text-black">
              {event.age}
            </span>
          </div>
          <div className="min-w-0 pt-2">
            <p className="font-gilroy text-xs uppercase tracking-wider text-white/60">
              {event.type}
            </p>
            <Link href={`/events/${event.slug}`} className="hover:underline">
              <h3 className="mt-3 break-words font-benzin text-[28px] leading-[1.1] text-white">
                {event.title}
              </h3>
            </Link>
          </div>
        </div>

        <div className="mt-[30px]">
          <p className="font-gilroy text-sm leading-[1.5] text-white">
            {event.description}
          </p>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-[40px]">
              <Price icon="/icons/user.svg" value={event.priceAdult} />
              <Price icon="/icons/child.svg" value={event.priceChild} />
            </div>
            <div className="flex items-center gap-[10px]">
              <Link 
                href={`/events/${event.slug}`} 
                className="inline-flex h-[40px] cursor-pointer items-center gap-2 rounded-full border border-white/40 px-4 font-gilroy text-xs text-white/70 transition-colors hover:border-white hover:text-white"
              >
                Выбрать дату
                <Image src="/icons/btn-left-black.svg" alt="" width={12} height={12} className="h-3 w-3 -rotate-90 opacity-70 invert" />
              </Link>
              <Link href={`/events/${event.slug}`} className="inline-flex h-[40px] items-center justify-center rounded-full bg-blue px-4 font-benzin text-xs text-white transition-colors hover:bg-white hover:text-black">
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* до 768px (base) */}
      <div className="flex flex-col gap-5 md:hidden">
        <div className="relative w-full">
          <Image
            src={event.img}
            alt={event.title}
            width={313}
            height={159}
            className="h-[159px] w-full rounded-[24px] object-cover"
          />
          <span className="absolute -right-2 -top-2 z-10 inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white font-gilroy text-[12px] text-black">
            {event.age}
          </span>
        </div>

        <div>
          <p className="font-gilroy text-[10px] uppercase tracking-wider text-white/60">
            {event.type}
          </p>
          <Link href={`/events/${event.slug}`} className="hover:underline">
            <h3 className="mt-2 break-words font-benzin text-xl leading-[1.1] text-white">
              {event.title}
            </h3>
          </Link>
        </div>

        <p className="font-gilroy text-sm leading-[1.5] text-white">
          {event.description}
        </p>

        <div className="flex items-center gap-[40px]">
          <Price icon="/icons/user.svg" value={event.priceAdult} />
          <Price icon="/icons/child.svg" value={event.priceChild} />
        </div>

        <div className="flex items-center gap-[10px]">
          <Link 
            href={`/events/${event.slug}`} 
            className="inline-flex h-[40px] cursor-pointer items-center gap-2 rounded-full border border-white/40 px-4 font-gilroy text-xs text-white/70 transition-colors hover:border-white hover:text-white"
          >
            Выбрать дату
            <Image src="/icons/btn-left-black.svg" alt="" width={12} height={12} className="h-3 w-3 -rotate-90 opacity-70 invert" />
          </Link>
          <Link href={`/events/${event.slug}`} className="inline-flex h-[40px] items-center justify-center rounded-full bg-blue px-4 font-benzin text-xs text-white transition-colors hover:bg-white hover:text-black">
            Подробнее
          </Link>
        </div>
      </div>

    </article>
  );
}

function Price({ icon, value }: { icon: string; value: string }) {
  return (
    <div className="flex items-center gap-[10px]">
      <span className="inline-flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full bg-white">
        <Image src={icon} alt="" width={12} height={12} className="h-3 w-3" />
      </span>
      <span className="font-gilroy text-sm text-white xl:text-base">
        {value} ₽
      </span>
    </div>
  );
}