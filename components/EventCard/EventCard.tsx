import Image from "next/image";
import Link from "next/link";
import { EventItem } from "@/lib/data";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="group py-3 transition-colors duration-500 hover:bg-blue">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-[280px_1fr] md:gap-x-6 md:gap-y-4 xl:grid-cols-[280px_1fr_1.8fr] xl:gap-x-8">
        
        <div className="relative w-full shrink-0 md:col-span-1 xl:row-span-2 xl:self-start">
          <Image 
            src={event.img} 
            alt={event.title} 
            width={313} 
            height={159} 
            className="aspect-[16/9] w-full rounded-[58px] object-cover md:rounded-[58px] xl:h-[160px] xl:w-[280px] xl:rounded-[58px]" 
          />
          <span className="absolute -right-2 -top-2 z-10 inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white font-gilroy text-[11px] text-black xl:h-[28px] xl:w-[28px] xl:text-xs">{event.age}</span>
        </div>

        <div className="md:col-span-1 xl:row-span-2 xl:self-start xl:pt-1">
          <p className="font-gilroy text-[10px] uppercase tracking-wider text-white md:text-xs xl:text-xs">{event.type}</p>
          <Link href={`/events/${event.slug}`} className="hover:underline">
            <h3 className="mt-2 break-words font-benzin text-xl leading-[1.1] text-white md:text-[24px] xl:mt-3 xl:text-[28px]">{event.title}</h3>
          </Link>
        </div>

        <div className="flex flex-col md:col-span-2 xl:col-span-1 xl:mt-0 xl:h-full xl:justify-between">
          <p className="font-gilroy text-sm leading-[1.5] text-white xl:text-[15px]">{event.description}</p>
          
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between xl:mt-6">
            
            <div className="flex items-center gap-4 xl:gap-6">
              <Price icon="/icons/user.svg" value={event.priceAdult} />
              <Price icon="/icons/child.svg" value={event.priceChild} />
            </div>

            <div className="flex items-center gap-2 xl:gap-3">
              <Link 
                href={`/events/${event.slug}`} 
                className="inline-flex h-[40px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/40 px-4 font-gilroy text-xs text-white/70 transition-colors duration-300 hover:border-white hover:text-white xl:h-[44px] xl:px-5 xl:gap-[36px] md:gap-[30px] xl:text-sm"
              >
                Выбрать дату
                <Image src="/icons/btn-left-black.svg" alt="" width={12} height={12} className="h-3 w-3 -rotate-90 opacity-70 invert" />
              </Link>
              <Link 
                href={`/events/${event.slug}`} 
                className="inline-flex h-[40px] items-center justify-center whitespace-nowrap rounded-full bg-blue px-5 font-benzin text-xs text-white transition-colors duration-300 hover:bg-white hover:text-black xl:h-[44px] xl:px-6 xl:text-sm"
              >
                Купить билет
              </Link>
            </div>

          </div>
        </div>

      </div>
    </article>
  );
}

function Price({ icon, value }: { icon: string; value: string }) {
  return (
    <div className="flex items-center gap-[8px] xl:gap-[10px]">
      {/* Иконки и текст увеличены */}
      <span className="inline-flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-white xl:h-[30px] xl:w-[30px]">
        <Image src={icon} alt="" width={16} height={16} className="h-[14px] w-[14px] xl:h-[16px] xl:w-[16px]" />
      </span>
      <span className="font-gilroy text-base text-white xl:text-[18px]">{value} ₽</span>
    </div>
  );
}