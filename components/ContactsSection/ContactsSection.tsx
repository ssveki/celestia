// components/ContactsSection/ContactsSection.tsx
import Image from "next/image";

export default function ContactsSection() {
  return (
    <section id="contacts" className="w-full bg-dark-gray px-[15px] py-10 lg:px-[142px] lg:py-16 xl:px-[290px] xl:py-20">
      <div className="mx-auto flex w-full max-w-[1340px] flex-col">
        
        <h2 className="mb-8 text-center font-benzin text-[24px] font-normal text-white md:mb-12 md:text-[40px] xl:mb-16 xl:text-[57px]">
          Как нас найти?
        </h2>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] md:aspect-[16/9] md:rounded-[40px] xl:aspect-[1340/500] xl:rounded-[55px]">
          <Image
            src="/images/contacts-map.png"
            alt="Карта проезда"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1920px) 1340px, 1340px"
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}