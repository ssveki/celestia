import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { events } from "@/lib/data";
import EventGallery from "@/components/EventGallery/EventGallery";
import DatePickerButton from "@/components/ui/DatePickerButton/DatePickerButton";

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="w-full bg-dark-gray px-[15px] py-10 lg:px-[142px] lg:py-16 xl:px-[290px] xl:py-20 min-h-screen">
      <div className="mx-auto w-full max-w-[1340px]">
        
        <Link 
          href="/" 
          className="mb-8 inline-flex items-center gap-2 font-gilroy text-sm text-white/60 transition-colors hover:text-white"
        >
          <span className="text-lg">←</span> Вернуться на главную
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          
          <div>
            <EventGallery images={event.gallery} />
          </div>

          <div className="flex flex-col justify-center">
            
            <p className="font-gilroy text-xs uppercase tracking-wider text-blue xl:text-sm">
              {event.type}
            </p>
            
            <h1 className="mt-4 break-words font-benzin text-[32px] leading-[1.1] text-white md:text-[48px] xl:text-[57px]">
              {event.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-6 xl:mt-8 xl:gap-10">
              
              <span className="inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-white font-gilroy text-[12px] text-black xl:h-[40px] xl:w-[40px] xl:text-[16px]">
                {event.age}
              </span>
              
              <div className="flex items-center gap-[30px] xl:gap-[40px]">
                <Price icon="/icons/user.svg" value={event.priceAdult} />
                <Price icon="/icons/child.svg" value={event.priceChild} />
              </div>
            </div>

            <p className="mt-8 font-gilroy text-base leading-[1.5] text-white xl:text-lg">
              {event.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-[10px]">
              <DatePickerButton className="h-[52px] px-6 text-sm xl:px-8 xl:text-base" />
              <button className="inline-flex h-[52px] cursor-pointer items-center justify-center rounded-full bg-blue px-8 font-benzin text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black xl:text-base">
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
    <div className="flex items-center gap-[10px]">
      <span className="inline-flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full bg-white xl:h-[30px] xl:w-[30px]">
        <Image 
          src={icon} 
          alt="" 
          width={14} 
          height={14} 
          className="h-3.5 w-3.5 xl:h-4 xl:w-4" 
        />
      </span>
      <span className="font-gilroy text-sm text-white xl:text-base">
        {value} ₽
      </span>
    </div>
  );
}