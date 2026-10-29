"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const nav = [
  { label: "Главная", href: "/" },
  { label: "События", href: "#events" },
  { label: "Акции", href: "#promo" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-dark-gray px-[15px] md:px-[30px] xl:px-[50px]">
      <div className="mx-auto flex h-[60px] w-full md:max-w-[740px] xl:max-w-[1340px] items-center justify-between md:h-[72px] xl:h-[80px]">
        
        <Link href="/" aria-label="Celestia" className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-60">
          <Image src="/icons/logo.svg" alt="Celestia" width={56} height={56} className="h-[30px] w-[30px] object-contain md:h-[36px] md:w-[36px] xl:h-[44px] xl:w-[44px]" />
          <span className="font-benzin text-base text-white md:text-lg xl:text-[22px]">Celestia</span>
        </Link>

        {/* Навигация появляется только с 1440px (xl) */}
        <nav className="hidden items-center gap-6 xl:flex xl:gap-8">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="font-gilroy text-sm text-white/80 transition-colors duration-300 hover:text-white xl:text-base">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5 xl:gap-6">
          
          {/* Правая часть с телефоном и кнопкой (появляется с 768px) */}
          <div className="hidden items-center gap-5 md:flex xl:gap-6">
            <div className="flex items-center gap-3">
              <div className="cursor-pointer transition-opacity duration-300 hover:opacity-60">
                <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} className="h-5 w-5 xl:h-5 xl:w-5" />
              </div>
              <div className="cursor-pointer transition-opacity duration-300 hover:opacity-60">
                <Image src="/icons/tg.svg" alt="Telegram" width={24} height={24} className="h-5 w-5 xl:h-5 xl:w-5" />
              </div>
            </div>
            <span className="cursor-pointer font-gilroy text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-60 xl:text-base">
              (812) 336 36 36
            </span>
            <Link href="#forms" className="cursor-pointer rounded-full bg-blue px-5 py-2 font-benzin text-xs text-white transition-all duration-300 hover:bg-white hover:text-black active:ring-2 active:ring-white active:ring-offset-2 active:ring-offset-dark-gray xl:px-5 xl:py-2.5 xl:text-sm xl:text-black">
              Купить билет
            </Link>
          </div>

          {/* Соцсети для мобилки (только до 768px) */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="cursor-pointer transition-opacity duration-300 hover:opacity-60">
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="h-5 w-5" />
            </div>
            <div className="cursor-pointer transition-opacity duration-300 hover:opacity-60">
              <Image src="/icons/tg.svg" alt="Telegram" width={20} height={20} className="h-5 w-5" />
            </div>
          </div>

          {/* Бургер (скрывается только на 1440px) */}
          <button onClick={() => setOpen(!open)} aria-label="Меню" className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-blue transition-colors duration-300 hover:bg-white xl:hidden md:h-10 md:w-10">
            <Image src="/icons/burger.svg" alt="Меню" width={20} height={20} className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>

      {/* Выпадающее меню (ТЕПЕРЬ ТОЖЕ xl:hidden) */}
      <div className={`grid transition-all duration-300 ease-in-out xl:hidden ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <nav className="mx-auto flex w-full max-w-[740px] flex-col gap-4 py-6 xl:max-w-[1340px]">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} className="font-gilroy text-sm text-white/80 transition-colors duration-300 hover:text-white" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            
            {/* Телефон и кнопка в бургере (появляются только до 768px, чтобы не дублироваться) */}
            <div className="mt-2 flex flex-col gap-4 md:hidden">
              <span className="cursor-pointer font-gilroy text-sm font-semibold text-white">(812) 336 36 36</span>
              <Link href="#forms" onClick={() => setOpen(false)} className="inline-flex w-fit items-center justify-center rounded-full bg-blue px-5 py-2.5 font-benzin text-xs text-white hover:bg-white hover:text-black">
                Купить билет
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}