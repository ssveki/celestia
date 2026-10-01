// components/MainSection/MainSection.tsx
import Image from "next/image";

export default function MainSection() {
  return (
    <section className="w-full bg-dark-gray px-[15px] pb-6 pt-2 lg:px-[142px] xl:px-[290px]">
      <div className="mx-auto flex w-full max-w-[1340px] flex-col gap-3 md:gap-4">

        <div className="group relative overflow-hidden rounded-[20px] bg-white p-5 md:p-6 xl:h-[493px] xl:rounded-[55px] xl:px-[40px] xl:pb-[125px] xl:pt-[40px]">
          <Image
            src="/images/main-banner.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1920px) 740px, 1340px"
            className="pointer-events-none !left-auto right-0 top-0 hidden !w-auto select-none object-contain object-right md:block"
            priority
          />

          <div className="relative z-10 flex h-full flex-col">
            <h1 className="font-benzin text-[26px] leading-[1.05] text-black md:text-[40px] xl:text-[64px]">
              Раскройте тайны звезд
              <br />
              с помощью <span className="text-blue">Celestia</span>
            </h1>

            <p className="mt-4 max-w-[520px] font-gilroy text-xs leading-[1.4] text-black/70 md:text-sm xl:mt-6 xl:text-base">
              Мы проводим специальные мероприятия, такие как ночи
              наблюдения за звездами, лекции и многое другое
            </p>

            <a
              href="#forms"
              className="mt-6 inline-flex w-fit cursor-pointer items-center justify-center rounded-full bg-blue px-5 py-2.5 font-benzin text-xs text-white transition-all duration-300 hover:bg-transparent hover:text-blue hover:ring-2 hover:ring-inset hover:ring-blue active:bg-white active:text-black active:ring-0 active:shadow-[0_4px_11px_0_rgba(50,78,234,0.8)] md:px-6 md:py-3 md:text-sm xl:mt-[74px] xl:px-8 xl:py-4 xl:text-base"
            >
              Подробнее
            </a>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-[427fr_899fr] md:gap-4">
          <div className="flex flex-col gap-4">
            <CouplesCard />
            <DiscountCard />
          </div>
          <OnlineWalkCard />
        </div>

        <div className="flex flex-col gap-3 md:hidden">
          <DiscountCard />
          <CouplesCard />
          <StatsRowMobile />
        </div>

      </div>
    </section>
  );
}

function CouplesCard() {
  return (
    <div className="group relative flex min-h-[130px] flex-col rounded-[20px] bg-white p-5 md:min-h-[200px] md:p-6 xl:h-[282px] xl:min-h-0 xl:rounded-[55px] xl:p-10">
      <div>
        <h3 className="font-benzin text-[20px] leading-[1.05] text-black md:text-[28px] xl:text-[40px]">
          для
          <br />
          парочек
        </h3>
        <p className="mt-3 font-gilroy text-xs leading-[1.4] text-black/70 md:text-sm xl:text-base">
          ночи наблюдения
          <br />
          за звездами
        </p>
      </div>
      <button
        type="button"
        aria-label="Подробнее"
        className="absolute bottom-5 right-5 inline-flex h-[30px] w-[30px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue md:h-[36px] md:w-[36px] xl:bottom-10 xl:right-10 xl:h-[58px] xl:w-[58px]"
      >
        <Image
          src="/icons/arrow-white.svg"
          alt=""
          width={20}
          height={20}
          className="h-3 w-3 rotate-0 transition-transform duration-300 group-hover:-rotate-90 md:h-4 md:w-4 xl:h-5 xl:w-5"
        />
      </button>
    </div>
  );
}

function DiscountCard() {
  return (
    <div className="group relative flex min-h-[110px] flex-col rounded-[20px] bg-blue p-5 md:min-h-[140px] md:p-6 xl:h-[189px] xl:min-h-0 xl:rounded-[55px] xl:p-10">
      <div>
        <span className="font-benzin text-[20px] leading-none text-white md:text-[28px] xl:text-[40px]">
          20%
        </span>
        <p className="mt-2 font-gilroy text-xs leading-[1.4] text-white md:text-sm xl:text-base">
          скидка пенсионерам
        </p>
      </div>
      <button
        type="button"
        aria-label="Подробнее"
        className="absolute bottom-5 right-5 inline-flex h-[30px] w-[30px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-white md:h-[36px] md:w-[36px] xl:bottom-10 xl:right-10 xl:h-[58px] xl:w-[58px]"
      >
        <Image
          src="/icons/arrow-black.svg"
          alt=""
          width={20}
          height={20}
          className="h-3 w-3 rotate-0 transition-transform duration-300 group-hover:-rotate-90 md:h-4 md:w-4 xl:h-5 xl:w-5"
        />
      </button>
    </div>
  );
}

function OnlineWalkCard() {
  return (
    <div className="group relative flex flex-col items-center justify-center gap-10 overflow-hidden rounded-[20px] bg-black p-5 md:gap-12 md:p-8 xl:gap-10 xl:rounded-[55px] xl:py-[77.5px]">
      <Image
        src="/images/main-background.png"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1920px) 740px, 899px"
        className="object-cover object-center"
      />

      <div className="relative z-10 flex items-center gap-4">
        <Image
          src="/icons/logo.svg"
          alt=""
          width={56}
          height={56}
          className="h-[40px] w-[40px] object-contain md:h-[48px] md:w-[48px] xl:h-[56px] xl:w-[56px]"
        />
        <h3 className="font-benzin text-lg leading-tight text-white md:text-2xl xl:text-[32px]">
          ОНЛАЙН-<br />ПРОГУЛКА
        </h3>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-5">
        <StatCircle value=">50" label="залов" />
        <StatCircle
          value=">100"
          label={
            <>
              программ про
              <br />
              Вселенную
            </>
          }
          accent
        />
        <StatCircle value=">20" label="телескопов" />
      </div>
    </div>
  );
}

function StatCircle({
  value,
  label,
  accent = false,
}: {
  value: string;
  label: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-full text-center ${
        accent
          ? "h-[110px] w-[110px] bg-blue text-white md:h-[150px] md:w-[150px] xl:h-[220px] xl:w-[220px]"
          : "h-[90px] w-[90px] bg-white text-black md:h-[120px] md:w-[120px] xl:h-[150px] xl:w-[150px]"
      }`}
    >
      <span className="font-benzin text-sm leading-none md:text-lg xl:text-[24px]">
        {value}
      </span>
      <span
        className={`mt-1 px-2 font-gilroy text-xs leading-tight md:text-sm xl:text-base ${
          accent ? "text-white/90" : "text-black/70"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function StatsRowMobile() {
  return (
    <div className="flex items-center justify-around pt-4">
      <div className="flex flex-col items-center">
        <span className="font-benzin text-base text-white">&gt;20</span>
        <span className="font-gilroy text-[10px] text-white/60">телескопов</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-benzin text-base text-white">&gt;100</span>
        <span className="font-gilroy text-[10px] text-white/60">программ</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-benzin text-base text-white">&gt;50</span>
        <span className="font-gilroy text-[10px] text-white/60">залов</span>
      </div>
    </div>
  );
}