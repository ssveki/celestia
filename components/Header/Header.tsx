// components/Header/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

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
    <header className="w-full bg-dark-gray px-[15px] lg:px-[142px] xl:px-[290px]">
      <div className="mx-auto flex h-[60px] w-full max-w-[1340px] items-center justify-between md:h-[80px] xl:h-[100px]">

        <a href="/" aria-label="Celestia" className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80">
          <Image
            src="/icons/logo.svg"
            alt="Celestia"
            width={56}
            height={56}
            className="h-[30px] w-[30px] object-contain md:h-[40px] md:w-[40px] xl:h-[56px] xl:w-[56px]"
          />
          <span className="font-benzin text-base text-white md:text-xl xl:text-[28px]">
            Celestia
          </span>
        </a>

        <nav className="hidden items-center gap-8 xl:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-gilroy text-sm text-white/80 transition-colors duration-300 hover:text-white xl:text-base"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">

          <div className="hidden items-center gap-6 xl:flex xl:gap-[30px]">
            <a href="#" className="flex items-center gap-3">
              <Image src="/icons/whatsapp.svg" alt="" width={24} height={24} className="h-5 w-5 xl:h-6 xl:w-6" />
              <Image src="/icons/tg.svg" alt="" width={24} height={24} className="h-5 w-5 xl:h-6 xl:w-6" />
            </a>
            <span className="font-gilroy text-sm font-semibold text-white xl:text-base">
              (812) 336 36 36
            </span>
            <a
              href="#forms"
              className="cursor-pointer rounded-full bg-blue px-5 py-2.5 font-benzin text-xs text-white transition-all duration-300 hover:bg-white hover:text-black active:ring-2 active:ring-white active:ring-offset-2 active:ring-offset-dark-gray xl:px-6 xl:py-3 xl:text-sm"
            >
              Купить билет
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex xl:hidden">
            <Image src="/icons/whatsapp.svg" alt="" width={20} height={20} className="h-5 w-5" />
            <Image src="/icons/tg.svg" alt="" width={20} height={20} className="h-5 w-5" />
            <a href="tel:+78123363636" className="font-gilroy text-sm font-semibold text-white">
              (812) 336 36 36
            </a>
            <a
              href="#forms"
              className="cursor-pointer rounded-full bg-white px-4 py-2 font-benzin text-xs text-black transition-all duration-300 hover:bg-blue hover:text-white active:ring-2 active:ring-white active:ring-offset-2 active:ring-offset-dark-gray"
            >
              Купить билет
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Image src="/icons/whatsapp.svg" alt="" width={20} height={20} className="h-5 w-5" />
            <Image src="/icons/tg.svg" alt="" width={20} height={20} className="h-5 w-5" />
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Меню"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-blue transition-colors duration-300 hover:bg-white md:h-10 md:w-10 xl:hidden"
          >
            <Image
              src="/icons/burger.svg"
              alt=""
              width={20}
              height={20}
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto flex w-full max-w-[1340px] flex-col gap-4 py-6 xl:hidden">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-gilroy text-sm text-white transition-colors duration-300 hover:text-blue"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="tel:+78123363636" className="font-gilroy text-sm font-semibold text-white transition-colors duration-300 hover:text-blue">
            (812) 336 36 36
          </a>
          <a
            href="#forms"
            className="cursor-pointer rounded-full bg-blue px-5 py-3 text-center font-benzin text-xs text-white transition-all duration-300 hover:bg-white hover:text-black active:ring-2 active:ring-white active:ring-offset-2 active:ring-offset-dark-gray"
          >
            Купить билет
          </a>
        </nav>
      )}
    </header>
  );
}