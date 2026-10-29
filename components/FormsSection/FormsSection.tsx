"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function FormsSection() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleDateClick = () => {
    if (dateInputRef.current) {
      try { dateInputRef.current.showPicker(); } 
      catch (err) { dateInputRef.current.focus(); }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName(""); setPhone(""); setDate("");
  };

  return (
    <section id="forms" className="w-full bg-dark-gray px-[15px] py-10 md:px-[30px] md:py-16 xl:px-[50px] xl:py-20">
      <div className="mx-auto flex w-full md:max-w-[740px] xl:max-w-[1340px] flex-col items-center">
        
        <h2 className="mb-[30px] max-w-[1160px] text-center font-benzin text-[24px] leading-[1.1] text-white md:text-[32px] xl:mb-[40px] xl:text-[36px]">
          Ваш билет в космос — быстрая запись на экскурсию
        </h2>

        {/* ИЗМЕНЕНО: lg:flex-row и lg:justify-between заменены на xl: */}
        <div className="flex w-full flex-col-reverse items-start gap-8 xl:flex-row xl:justify-between xl:gap-[50px]">
          
          {/* ИЗМЕНЕНО: lg:w-[50%] заменено на xl:w-[50%] */}
          <div className="flex w-full flex-col gap-5 xl:w-[50%] xl:gap-6">
            {/* Текст по центру */}
            <p className="text-center font-gilroy text-sm leading-[1.45] text-white md:text-sm xl:text-base xl:text-left">
              Запишитесь на экскурсию в планетарий. Просто укажите ваше имя, электронную почту и дату, и мы свяжемся с вами для подтверждения
            </p>

            <form className="flex w-full flex-col gap-[12px] xl:gap-[16px]" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Введите ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-[36px] border border-white bg-transparent px-5 py-3 font-gilroy text-sm text-white placeholder:text-white/60 hover:bg-blue focus:bg-blue-50 duration-300 focus:outline-none md:px-7 md:py-3.5 md:text-base"
              />
              
              <input
                type="tel"
                placeholder="Номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full rounded-[36px] border border-white bg-transparent px-5 py-3 font-gilroy text-sm text-white placeholder:text-white/60 hover:bg-blue focus:bg-blue-50 duration-300 focus:outline-none md:px-7 md:py-3.5 md:text-base"
              />
              
              <div onClick={handleDateClick} className="relative flex w-full cursor-pointer items-center justify-between rounded-[36px] border border-white bg-transparent px-5 py-3 hover:bg-blue duration-300 md:px-7 md:py-3.5">
                <span className={`pointer-events-none font-gilroy text-sm md:text-base ${date ? "text-white" : "text-white/60"}`}>
                  {date ? new Date(date).toLocaleDateString("ru-RU") : "Дата посещения"}
                </span>
                <Image src="/icons/btn-left-black.svg" alt="" width={20} height={20} className="pointer-events-none h-4 w-4 shrink-0 -rotate-90 opacity-60 invert md:h-5 md:w-5" />
                <input type="date" ref={dateInputRef} value={date} onChange={(e) => setDate(e.target.value)} required className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
              </div>

              <button type="submit" className="mt-2 h-[48px] w-full cursor-pointer rounded-[55px] bg-blue font-benzin text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black md:text-base xl:mt-4 xl:h-[52px]">
                Отправить
              </button>
              
              <p className="mt-2 text-left font-gilroy text-[10px] text-white/60 md:text-xs xl:text-sm">
                *нажимая на кнопку, вы соглашаетесь с <a href="#" className="underline transition-colors hover:text-white">политикой конфиденциальности</a>.
              </p>
            </form>
          </div>

          {/* ИЗМЕНЕНО: lg:w-[45%] заменено на xl:w-[48%] */}
          <div className="w-full xl:w-[48%]">
            <Image src="/images/FAQ-banner.png" alt="Экскурсия" width={700} height={500} className="h-auto w-full rounded-[20px] object-cover md:rounded-[30px] xl:rounded-[40px]" />
          </div>

        </div>
      </div>
    </section>
  );
}