"use client";

import { useState } from "react";

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
    <header className="w-full bg-[#131313]">
      <div className="mx-auto flex h-[72px] w-full max-w-[290px] items-center justify-between md:max-w-[740px] xl:max-w-[1340px]">

        {/* Лого */}
        <a href="/" aria-label="Celestia" className="flex items-center gap-2">
          <img
            src="/icons/logo.svg"
            alt="Celestia"
            className="h-8 w-8 object-contain md:h-[50px] xl:h-[70px]"
          />
          <span className="font-desktop-h3 text-xl text-white">Celestia</span>
        </a>

        {/* Навигация — только на xl+ */}
        <nav className="hidden items-center gap-8 xl:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-desktop-text text-sm text-white/80 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Правая часть */}
        <div className="flex items-center gap-3">

          {/* xl+: иконки + номер + фиолетовая кнопка */}
          <div className="hidden items-center gap-[30px] xl:flex">
            <a href="#" className="flex items-center gap-[14px]">
              <img src="/icons/whatsapp.svg" alt="" className="h-5 w-5" />
              <img src="/icons/tg.svg" alt="" className="h-5 w-5" />
            </a>
            <span className="font-desktop-text text-sm font-semibold text-white">
              (812) 336 36 36
            </span>
            <a
              href="#forms"
              className="rounded-full bg-blue px-6 py-3 font-desktop-button text-sm text-white transition hover:opacity-90"
            >
              Купить билет
            </a>
          </div>

          {/* md–xl: иконки + номер + белая кнопка */}
          <div className="hidden items-center gap-3 md:flex xl:hidden">
            <img src="/icons/whatsapp.svg" alt="" className="h-5 w-5" />
            <img src="/icons/tg.svg" alt="" className="h-5 w-5" />
            <a
              href="tel:+78123363636"
              className="font-desktop-text text-sm font-semibold text-white"
            >
              (812) 336 36 36
            </a>
            <a
              href="#forms"
              className="rounded-[55px] bg-white px-5 py-2.5 font-desktop-button text-xs text-black transition hover:opacity-90"
            >
              Купить билет
            </a>
          </div>

          {/* <md: только иконки */}
          <div className="flex items-center gap-2 md:hidden">
            <img src="/icons/whatsapp.svg" alt="" className="h-5 w-5" />
            <img src="/icons/tg.svg" alt="" className="h-5 w-5" />
          </div>

          {/* Бургер — всегда, когда навигация скрыта */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Меню"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue transition hover:opacity-90 xl:hidden"
          >
            <img src="/icons/burger.svg" alt="" className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {open && (
        <nav className="mx-auto flex w-full max-w-[290px] flex-col gap-4 py-6 md:max-w-[740px] xl:hidden">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-desktop-text text-sm text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+78123363636"
            className="font-desktop-text text-sm font-semibold text-white"
          >
            (812) 336 36 36
          </a>
          <a
            href="#forms"
            className="rounded-[55px] bg-blue px-6 py-3 text-center font-desktop-button text-sm text-white"
          >
            Купить билет
          </a>
        </nav>
      )}
    </header>
  );
}