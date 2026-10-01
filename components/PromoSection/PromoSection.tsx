// components/PromoSection/PromoSection.tsx
import Image from "next/image";

const promos = [
  {
    bg: "/images/discounts-1.png",
    title: <>Скидка<br />для пенсионеров</>,
    description: "Все пенсионеры получат 20% скидку на билет при посещении планетария",
  },
  {
    bg: "/images/discounts-2.png",
    title: <>Пакет ко дню<br />рождения</>,
    description: "В свой день рождения посетители получат экскурсию по планетарию",
  },
  {
    bg: "/images/discounts-3.png",
    title: <>Акция<br />«День семьи»</>,
    description: "В воскресенье семьи с двумя детьми получают карту звездного неба",
  },
];

export default function PromoSection() {
  return (
    <section className="w-full bg-dark-gray px-[15px] py-10 lg:px-[142px] lg:py-16 xl:px-[290px] xl:py-20">
      <div className="mx-auto w-full max-w-[1340px]">

        <div className="mb-6 flex items-center justify-center md:mb-10 xl:mb-14">
          <Image
            src="/icons/star.svg"
            alt=""
            width={56}
            height={56}
            className="mr-2 h-6 w-6 md:h-8 md:w-8 xl:mr-5 xl:h-12 xl:w-12"
          />
          <h2 className="font-benzin text-[24px] font-normal text-white md:text-[40px] xl:text-[57px]">
            Акции и скидки
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4 xl:gap-6">
            {promos.map((p, i) => (
              <PromoCard key={i} bg={p.bg} title={p.title} description={p.description} />
            ))}
          </div>

          <Image
            src="/icons/star.svg"
            alt=""
            width={40}
            height={40}
            className="pointer-events-none absolute -top-8 right-24 hidden h-10 w-10 lg:block"
          />
          <Image
            src="/icons/star.svg"
            alt=""
            width={80}
            height={80}
            className="pointer-events-none absolute -top-14 right-4 hidden h-20 w-20 lg:block"
          />
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
          <button
            aria-label="Назад"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white transition-transform duration-300 hover:scale-110"
          >
            <Image src="/icons/arrow-black.svg" alt="" width={20} height={20} className="h-5 w-5 -rotate-90" />
          </button>
          <button
            aria-label="Вперёд"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-blue transition-transform duration-300 hover:scale-110"
          >
            <Image src="/icons/arrow-white.svg" alt="" width={20} height={20} className="h-5 w-5 rotate-90" />
          </button>
        </div>

      </div>
    </section>
  );
}

function PromoCard({
  bg,
  title,
  description,
}: {
  bg: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <article className="group relative flex w-full flex-col overflow-hidden rounded-[28px] transition-all duration-500 hover:-translate-y-1 md:rounded-[32px] xl:rounded-[40px]">

      <Image
        src={bg}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1920px) 240px, 426px"
        className="object-cover object-center"
      />

      <div className="aspect-[426/280] w-full" />

      <div className="relative z-10 flex-1 rounded-tr-[60px] bg-blue p-5 transition-colors duration-500 group-hover:bg-white md:rounded-tr-[70px] md:p-5 xl:rounded-tr-[95px] xl:p-8">
        <div className="flex flex-row items-end justify-between gap-4 lg:flex-col lg:items-stretch xl:flex-row xl:items-end xl:justify-between">

          <div className="flex-1">
            <h3 className="font-benzin text-base leading-[1.1] text-white transition-colors duration-500 group-hover:text-black md:text-base xl:text-[24px]">
              {title}
            </h3>
            <p className="mt-3 max-w-[280px] font-gilroy text-xs leading-[1.45] text-white/90 transition-colors duration-500 group-hover:text-black/80 md:text-[11px] xl:mt-4 xl:max-w-[320px] xl:text-sm">
              {description}
            </p>
          </div>

          <button
            type="button"
            aria-label="Подробнее"
            className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center self-end rounded-full bg-white transition-colors duration-300 group-hover:bg-blue md:h-8 md:w-8 xl:h-11 xl:w-11"
          >
            <Image
              src="/icons/arrow-black.svg"
              alt=""
              width={20}
              height={20}
              className="h-4 w-4 rotate-0 transition-transform duration-300 group-hover:-rotate-90 group-hover:invert xl:h-5 xl:w-5"
            />
          </button>

        </div>
      </div>

    </article>
  );
}