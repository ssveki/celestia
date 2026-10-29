"use client";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map/Map"), { ssr: false, loading: () => <div className="flex h-full w-full items-center justify-center bg-[#1E1E1E] text-white/50">Загрузка карты...</div> });

export default function ContactsSection() {
  const position: [number, number] = [56.841, 60.587];
  return (
    <section id="contacts" className="w-full bg-dark-gray px-[15px] pb-6 pt-10 md:px-[30px] md:pb-8 md:pt-16 xl:px-[50px] xl:pb-10 xl:pt-20">
      <div className="mx-auto flex w-full xl:max-w-[1340px] md:max-w-[740px] flex-col">
        <h2 className="mb-6 text-center font-benzin text-[24px] font-normal text-white md:mb-10 md:text-[32px] xl:mb-12 xl:text-[36px]">Как нас найти?</h2>
        <div className="relative h-[180px] w-full overflow-hidden rounded-[24px] md:h-[350px] md:rounded-[32px] xl:h-[380px] xl:rounded-[45px]">
          <Map center={position} /></div>
      </div>
    </section>
  );
}