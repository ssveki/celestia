import Link from "next/link";
import Image from "next/image";
import { CSSProperties } from "react";

function Icon({ name, className }: { name: string; className?: string }) {
  const style: CSSProperties = {
    maskImage: `url(/icons/${name}.svg)`,
    WebkitMaskImage: `url(/icons/${name}.svg)`,
    maskSize: "contain",
    WebkitMaskSize: "contain",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    backgroundColor: "currentColor",
  };
  return <div style={style} className={className} aria-hidden="true" />;
}

export default function Footer() {
  return (
    <footer className="w-full bg-dark-gray px-[15px] pb-10 pt-0 md:px-[30px] md:pb-16 md:pt-0 xl:px-[50px] xl:pb-20">
      <div className="mx-auto flex w-full max-w-[1340px] flex-col">
        
        {/* Верхняя строка */}
        <div className="flex flex-col items-center gap-6 border-b border-white/10 pb-8 md:flex-row md:justify-between lg:pb-10">
          
          <div className="flex items-center gap-3">
            <Icon name="location" className="h-6 w-6 text-blue" />
            <p className="font-gilroy text-sm text-white md:text-base">
              Екатеринбург, ул. Маршала Жукова, дом 12
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="group flex h-10 w-10 items-center justify-center rounded-full bg-blue transition-colors hover:bg-white">
              <Icon name="facebook-blue" className="h-5 w-5 text-white transition-colors group-hover:text-blue" />
            </a>
            <a href="#" aria-label="Instagram" className="group flex h-10 w-10 items-center justify-center rounded-full bg-blue transition-colors hover:bg-white">
              <Icon name="inst-blue" className="h-5 w-5 text-white transition-colors group-hover:text-blue" />
            </a>
            <a href="#" aria-label="YouTube" className="group flex h-10 w-10 items-center justify-center rounded-full bg-blue transition-colors hover:bg-white">
              <Icon name="youtube-blue" className="h-5 w-5 text-white transition-colors group-hover:text-blue" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Icon name="whatsapp" className="h-6 w-6 text-white" />
              <Icon name="tg" className="h-6 w-6 text-white" />
            </div>
            <a href="tel:+78123363636" className="font-gilroy text-sm font-semibold text-white transition-colors hover:text-blue md:text-base">
              +7 (812) 336 36 36
            </a>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
          
          <Link href="#" className="order-2 shrink-0 font-gilroy text-xs text-white/60 transition-colors hover:text-white lg:order-1 md:text-sm">
            Политика конфиденциальности
          </Link>

          <div className="order-1 flex w-full flex-col items-center gap-4 rounded-[30px] bg-white p-5 md:flex-row md:justify-between md:rounded-[40px] md:p-6 lg:order-2 lg:w-auto lg:gap-6 xl:rounded-[100px] xl:px-10 xl:py-6">
            <h3 className="shrink-0 font-benzin text-xl leading-[1.1] text-blue md:text-2xl xl:text-[28px]">
              Подписаться<br />на рассылку
            </h3>
            
            <input
              type="email"
              placeholder="Электронная почта"
              className="w-full rounded-full border border-gray-300 px-5 py-3 font-gilroy text-sm text-black placeholder:text-gray-400 focus:border-blue focus:outline-none md:w-[260px] md:py-3 xl:w-[300px]"
            />
            
            <button className="h-[48px] w-full shrink-0 cursor-pointer rounded-full bg-blue font-benzin text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black hover:ring-2 hover:ring-inset hover:ring-blue md:w-auto md:px-8 xl:h-[52px] xl:text-base">
              Подписаться
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}