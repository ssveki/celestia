// components/EventsSection/EventsSection.tsx
import Image from "next/image";

const events = [
  {
    img: "/images/event-1.png",
    age: "7+",
    type: "полнокупольная программа",
    title: "ПРОГУЛКА ПО ЗВЕЗДНОМУ НЕБУ",
    description:
      "Мы предлагаем вам прогуляться по самым ярким созвездиям северного полушария, насладиться петербургским звездным небом всех сезонов, полюбоваться Млечным Путем и, конечно, загадать заветное желание на «падающую» звезду",
    priceAdult: "400",
    priceChild: "600",
  },
  {
    img: "/images/event-2.png",
    age: "4+",
    type: "детская интерактивная программа",
    title: "ПУТЕШЕСТВИЕ ПО СОЛНЕЧНОЙ СИСТЕМЕ",
    description:
      "Программа для самых юных посетителей, где можно весело и увлекательно совершить экспедицию на космическом корабле к удивительным планетам. Узнаем какая из планет самая большая, а какая ближе всего находится к Солнцу.",
    priceAdult: "400",
    priceChild: "600",
  },
  {
    img: "/images/event-3.png",
    age: "10+",
    type: "полнокупольная программа",
    title: "ТЕМНАЯ АСТРОНОМИЯ",
    description:
      "До появления науки как таковой, мы обращались к мифам. На программе «Мифы и легенды звёздного неба» мы узнаем, как люди древности использовали мифологическое мышление в попытках понять, каково место человека во Вселенной...",
    priceAdult: "400",
    priceChild: "600",
  },
];

const tabs = ["Программы", "Мероприятия", "Лекции"];

export default function EventsSection() {
  return (
    <section className="w-full bg-dark-gray px-[15px] py-10 lg:px-[142px] lg:py-16 xl:px-[290px] xl:py-20">
      <div className="mx-auto w-full max-w-[1340px]">

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

        <div className="flex flex-col gap-[30px]">
          {events.map((e) => (
            <EventRow key={e.title} {...e} />
          ))}
        </div>

        <button className="mt-[30px] h-[52px] w-full cursor-pointer rounded-full bg-white font-benzin text-sm text-black transition-all duration-300 hover:bg-blue hover:text-white active:ring-2 active:ring-white active:ring-offset-2 active:ring-offset-dark-gray md:text-base xl:text-lg">
          Показать ещё
        </button>

      </div>
    </section>
  );
}

function EventRow({
  img,
  age,
  type,
  title,
  description,
  priceAdult,
  priceChild,
}: {
  img: string;
  age: string;
  type: string;
  title: string;
  description: string;
  priceAdult: string;
  priceChild: string;
}) {
  return (
    <article className="group rounded-[28px] p-5 transition-colors duration-500 hover:bg-blue lg:rounded-[40px] xl:rounded-[55px] xl:p-6">

      <div className="hidden xl:grid xl:grid-cols-[313px_minmax(90px,auto)_minmax(650px,1fr)] xl:gap-x-6">

        <div className="relative self-start">
          <Image
            src={img}
            alt={title}
            width={313}
            height={159}
            className="h-[159px] w-[313px] rounded-[55px] object-cover"
          />
          <span className="absolute -right-2 -top-2 z-10 inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white font-gilroy text-[12px] text-black">
            {age}
          </span>
        </div>

        <div className="min-w-0 self-start">
          <p className="font-gilroy text-xs uppercase tracking-wider text-white/60 xl:text-sm">
            {type}
          </p>
          <h3 className="mt-3 break-words font-benzin text-[32px] leading-[1.1] text-white">
            {title}
          </h3>
        </div>

        <div className="flex min-w-0 flex-col">
          <p className="font-gilroy text-base leading-[1.5] text-white">
            {description}
          </p>

          <div className="mt-auto flex items-center justify-between pt-6">
            <div className="flex items-center gap-[40px]">
              <Price icon="/icons/user.svg" value={priceAdult} />
              <Price icon="/icons/child.svg" value={priceChild} />
            </div>
            <div className="flex items-center gap-[10px]">
              <DateButton />
              <BuyButton />
            </div>
          </div>
        </div>

      </div>

      <div className="hidden md:block xl:hidden">
        <div className="flex items-start gap-20">
          <div className="relative shrink-0">
            <Image
              src={img}
              alt={title}
              width={313}
              height={159}
              className="h-[159px] w-[313px] rounded-[55px] object-cover"
            />
            <span className="absolute -right-2 -top-2 z-10 inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white font-gilroy text-[12px] text-black">
              {age}
            </span>
          </div>
          <div className="min-w-0 pt-2">
            <p className="font-gilroy text-xs uppercase tracking-wider text-white/60">
              {type}
            </p>
            <h3 className="mt-3 break-words font-benzin text-[28px] leading-[1.1] text-white">
              {title}
            </h3>
          </div>
        </div>

        <div className="mt-[30px]">
          <p className="font-gilroy text-sm leading-[1.5] text-white">
            {description}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-[40px]">
              <Price icon="/icons/user.svg" value={priceAdult} />
              <Price icon="/icons/child.svg" value={priceChild} />
            </div>
            <div className="flex items-center gap-[10px]">
              <DateButton />
              <BuyButton />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 md:hidden">
        <div className="relative w-full">
          <Image
            src={img}
            alt={title}
            width={313}
            height={159}
            className="h-[159px] w-full rounded-[55px] object-cover"
          />
          <span className="absolute -right-2 -top-2 z-10 inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white font-gilroy text-[12px] text-black">
            {age}
          </span>
        </div>

        <div>
          <p className="font-gilroy text-[10px] uppercase tracking-wider text-white/60">
            {type}
          </p>
          <h3 className="mt-2 break-words font-benzin text-xl leading-[1.1] text-white">
            {title}
          </h3>
        </div>

        <p className="font-gilroy text-sm leading-[1.5] text-white">
          {description}
        </p>

        <div className="flex items-center gap-[40px]">
          <Price icon="/icons/user.svg" value={priceAdult} />
          <Price icon="/icons/child.svg" value={priceChild} />
        </div>

        <div className="flex items-center gap-[10px]">
          <DateButton />
          <BuyButton />
        </div>
      </div>

    </article>
  );
}

function Price({ icon, value }: { icon: string; value: string }) {
  return (
    <div className="flex items-center gap-[5px] md:gap-[10px]">
      <span className="inline-flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full bg-white">
        <Image src={icon} alt="" width={12} height={12} className="h-3 w-3" />
      </span>
      <span className="font-gilroy text-sm text-white xl:text-base">
        {value} ₽
      </span>
    </div>
  );
}

function DateButton() {
  return (
    <button className="inline-flex h-[40px] cursor-pointer items-center gap-2 rounded-full border border-white/40 px-3 font-gilroy text-xs text-white/70 transition-colors duration-300 hover:border-white hover:text-white group-hover:border-white group-hover:text-white md:px-4 xl:text-sm">
      Выбрать дату
      <Image
        src="/icons/chevron-down.svg"
        alt=""
        width={12}
        height={12}
        className="h-3 w-3 opacity-70"
      />
    </button>
  );
}

function BuyButton() {
  return (
    <button className="inline-flex h-[40px] cursor-pointer items-center justify-center rounded-full bg-blue px-3 font-benzin text-xs text-white transition-colors duration-300 hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black active:ring-2 active:ring-white active:ring-offset-2 active:ring-offset-dark-gray md:px-4 xl:text-sm">
      Купить билет
    </button>
  );
}