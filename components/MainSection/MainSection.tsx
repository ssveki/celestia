export default function MainSection() {
  return (
    <section className="w-full bg-[#131313] px-3 pb-6 pt-2 md:px-6">
      <div className="mx-auto flex w-full max-w-[290px] flex-col gap-3 md:max-w-[740px] md:gap-4 xl:max-w-[1340px]">

        {/* ── Баннер ── */}
        <div className="relative overflow-hidden rounded-[32px] bg-white p-6 md:rounded-[40px] md:p-8 xl:h-[493px] xl:rounded-[55px] xl:px-[40px] xl:pb-[125px] xl:pt-[40px]">
          <img
            src="/images/main-banner.png"
            alt=""
            className="pointer-events-none absolute right-0 top-0 hidden h-full w-auto select-none object-contain object-right md:block"
          />

          <div className="relative z-10 flex h-full flex-col">
            <h1 className="font-desktop-h2 text-2xl leading-[1.05] text-black md:text-4xl xl:text-[64px]">
              Раскройте тайны звезд
              <br />
              с помощью <span className="text-blue">Celestia</span>
            </h1>

            <p className="mt-4 max-w-[520px] font-desktop-text text-xs leading-relaxed text-black/70 md:mt-5 md:text-sm xl:mt-6 xl:text-base">
              Мы проводим специальные мероприятия, такие как ночи
              наблюдения за звездами, лекции и многое другое
            </p>

            <a
              href="#forms"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-[55px] bg-blue px-6 py-3 font-desktop-button text-xs text-white transition hover:opacity-90 md:px-7 md:py-3.5 md:text-sm xl:mt-[74px] xl:px-8 xl:py-4 xl:text-base"
            >
              Подробнее
            </a>
          </div>
        </div>

        {/* ── md+ : двухколоночный блок ── */}
        <div className="hidden md:grid md:grid-cols-[427fr_899fr] md:gap-4">
          <div className="flex flex-col gap-4">
            <CouplesCard />
            <DiscountCard />
          </div>
          <OnlineWalkCard />
        </div>

        {/* ── <md : стопка ── */}
        <div className="flex flex-col gap-3 md:hidden">
          <DiscountCard />
          <CouplesCard />
          <StatsRowMobile />
        </div>

      </div>
    </section>
  );
}

/* ────────────────── Подкомпоненты ────────────────── */

function CouplesCard() {
  return (
    <div className="flex min-h-[140px] flex-col justify-between rounded-[32px] bg-white p-6 md:min-h-[210px] md:rounded-[40px] md:p-8 xl:rounded-[55px]">
      <div>
        <h3 className="font-desktop-h2 text-xl leading-[1.05] text-black md:text-3xl">
          для
          <br />
          парочек
        </h3>
        <p className="mt-2 font-desktop-text text-xs text-black/70 md:mt-3 md:text-sm">
          ночи наблюдения
          <br />
          за звездами
        </p>
      </div>
      <button
        type="button"
        aria-label="Подробнее"
        className="mt-4 inline-flex h-10 w-10 items-center justify-center self-end rounded-full bg-blue transition hover:opacity-90 md:h-12 md:w-12"
      >
        <img src="/icons/arrow-white.svg" alt="" className="h-4 w-4 md:h-5 md:w-5" />
      </button>
    </div>
  );
}

function DiscountCard() {
  return (
    <div className="flex min-h-[110px] flex-col justify-between rounded-[32px] bg-blue p-6 md:min-h-[140px] md:rounded-[40px] md:p-8 xl:rounded-[55px]">
      <div>
        <span className="font-desktop-h2 text-2xl text-white md:text-3xl">20%</span>
        <p className="mt-2 font-desktop-text text-xs text-white md:mt-2 md:text-sm">
          скидка пенсионерам
        </p>
      </div>
      <button
        type="button"
        aria-label="Подробнее"
        className="mt-4 inline-flex h-10 w-10 items-center justify-center self-end rounded-full bg-white transition hover:opacity-90 md:h-12 md:w-12"
      >
        <img src="/icons/arrow-black.svg" alt="" className="h-4 w-4 md:h-5 md:w-5" />
      </button>
    </div>
  );
}

function OnlineWalkCard() {
  return (
    <div
      className="relative flex flex-col items-center justify-center gap-10 overflow-hidden rounded-[40px] bg-black bg-cover bg-center px-6 py-[77.5px] md:px-8 lg:py-[26px] xl:rounded-[55px] xl:py-[77.5px]"
      style={{
        backgroundImage: "url(/images/main-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center gap-4">
        <img
          src="/icons/logo.svg"
          alt=""
          className="h-[40px] w-auto object-contain md:h-[56px] xl:h-[70px]"
        />
        <h3 className="font-desktop-h2 text-2xl leading-tight text-white md:text-3xl lg:text-[16px] xl:text-[32px]">
          ОНЛАЙН-<br />ПРОГУЛКА
        </h3>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <StatCircle value=">50" label="залов" />
        <StatCircle value=">100" label={<>программ про<br/>Вселенную</>} accent />
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
          ? "h-[130px] w-[130px] bg-blue text-white md:h-[160px] md:w-[160px] xl:h-[180px] xl:w-[180px]"
          : "h-[100px] w-[100px] bg-white text-black md:h-[130px] md:w-[130px] xl:h-[150px] xl:w-[150px]"
      }`}
    >
      <span className="font-desktop-h2 text-[24px] leading-none lg:text-[16px] xl:text-[24px]">
        {value}
      </span>
      <span
        className={`mt-1 px-2 font-desktop-text text-[16px] leading-tight lg:text-[14px] xl:text-[16px] ${
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
        <span className="font-desktop-h2 text-base text-white">&gt;20</span>
        <span className="font-desktop-text text-[10px] text-white/60">
          телескопов
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-desktop-h2 text-base text-white">&gt;100</span>
        <span className="font-desktop-text text-[10px] text-white/60">
          программ
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-desktop-h2 text-base text-white">&gt;50</span>
        <span className="font-desktop-text text-[10px] text-white/60">
          залов
        </span>
      </div>
    </div>
  );
}