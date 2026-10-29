"use client";

import { useState, CSSProperties } from "react";
import Link from "next/link";

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
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail(""); // Очищаем поле после успешной отправки
  };

  return (
    <footer className="w-full bg-dark-gray px-[15px] pb-10 pt-0 md:px-[30px] md:pb-16 md:pt-0 xl:px-[50px] xl:pb-16">
      <div className="mx-auto flex w-full md:max-w-[740px] xl:max-w-[1340px] flex-col">
        
        {/* Верхняя часть подвала */}
        <div className="flex flex-col items-center gap-6 border-b border-none pb-8 md:flex-row md:justify-between lg:pb-8">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Icon name="location" className="h-5 w-5 text-blue xl:h-6 xl:w-6" />
            <p className="font-gilroy text-xs text-center max-w-[200px] text-white md:text-sm md:text-left md:max-w-none xl:text-base">
              Екатеринбург, ул. Маршала Жукова, дом 12
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="#" className="group flex h-9 w-9 items-center justify-center rounded-full bg-blue transition-colors hover:bg-white xl:h-10 xl:w-10">
              <Icon name="facebook-blue" className="h-4 w-4 text-white transition-colors group-hover:text-blue xl:h-5 xl:w-5" />
            </a>
            <a href="#" className="group flex h-9 w-9 items-center justify-center rounded-full bg-blue transition-colors hover:bg-white xl:h-10 xl:w-10">
              <Icon name="inst-blue" className="h-4 w-4 text-white transition-colors group-hover:text-blue xl:h-5 xl:w-5" />
            </a>
            <a href="#" className="group flex h-9 w-9 items-center justify-center rounded-full bg-blue transition-colors hover:bg-white xl:h-10 xl:w-10">
              <Icon name="youtube-blue" className="h-4 w-4 text-white transition-colors group-hover:text-blue xl:h-5 xl:w-5" />
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Icon name="whatsapp" className="h-5 w-5 text-white xl:h-6 xl:w-6" />
              <Icon name="tg" className="h-5 w-5 text-white xl:h-6 xl:w-6" />
            </div>
            <a href="#" className="font-gilroy text-xs text-white transition-colors hover:text-blue md:text-sm xl:text-base">
              +7 (812) 336 36 36
            </a>
          </div>
        </div>

        {/* Нижняя часть: форма подписки и политика */}
        <div className="mt-8 flex flex-col items-center gap-6 xl:flex-row xl:items-center xl:justify-between xl:gap-4">
          
          {/* 1. Форма */}
          <form 
            onSubmit={handleSubscribe} 
            className="flex w-full flex-col items-start gap-4 rounded-[24px] bg-white p-5 md:gap-5 md:rounded-[32px] xl:order-2 xl:w-auto xl:flex-row xl:items-center xl:justify-between xl:gap-8 xl:rounded-[70px] xl:px-10 xl:py-6"
          >
            {/* Заголовок формы: перенос строки включается только на ПК (xl) */}
            <h3 className="shrink-0 text-left font-benzin text-lg leading-[1.1] text-blue md:text-xl xl:text-[22px]">
              Подписаться <br className="hidden xl:block" /> на рассылку
            </h3>
            
            {/* Контейнер для инпута и кнопки */}
            <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-4 xl:w-auto">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Электронная почта" 
                className="w-full rounded-full border border-gray-500 px-4 py-3 text-center font-gilroy text-xs text-black placeholder:text-gray-400 focus:border-blue focus:outline-none md:flex-1 md:py-2.5 xl:w-[280px] xl:flex-none xl:text-sm" 
              />
              
              <button 
                type="submit" 
                className="h-[44px] w-full shrink-0 cursor-pointer rounded-full bg-blue font-benzin text-xs text-white transition-colors duration-300 hover:bg-white hover:text-black hover:ring-2 hover:ring-inset hover:ring-blue md:w-auto md:px-8 xl:h-[44px] xl:px-8 xl:text-sm"
              >
                Подписаться
              </button>
            </div>
          </form>

          {/* 2. Политика */}
          <Link 
            href="#" 
            className="w-full text-center shrink-0 font-gilroy text-[10px] text-white transition-colors hover:text-white xl:order-1 xl:w-auto xl:text-left md:text-xs xl:text-sm"
          >
            Политика конфиденциальности
          </Link>

        </div>

      </div>
    </footer>
  );
}