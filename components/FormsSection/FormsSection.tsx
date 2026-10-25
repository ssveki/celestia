"use client"; // <-- ДОБАВЛЕНА ЭТА СТРОКА

import Image from "next/image";

export default function FormsSection() {
  return (
    <section className="w-full bg-dark-gray px-[15px] py-10 md:px-[30px] md:py-16 xl:px-[50px] xl:py-20">
      <div className="mx-auto flex w-full max-w-[1340px] flex-col items-center">
        
        <h2 className="mb-[40px] max-w-[1160px] text-center font-benzin text-[24px] leading-[1.1] text-white md:text-[40px] xl:mb-[60px] xl:text-[57px]">
          Ваш билет в космос — быстрая запись на экскурсию
        </h2>

        <div className="flex w-full flex-col-reverse items-start gap-10 lg:flex-row lg:justify-between xl:gap-[60px]">
          
          <div className="flex w-full flex-col gap-6 lg:w-[50%] xl:gap-8">
            <p className="font-gilroy text-sm leading-[1.45] text-white md:text-base">
              Запишитесь на экскурсию в планетарий. Просто укажите ваше имя,
              электронную почту и дату, и мы свяжемся с вами для подтверждения
            </p>

            <form className="flex w-full flex-col gap-[15px] xl:gap-[20px]" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Введите ваше имя"
                className="w-full rounded-[40px] border border-white bg-transparent px-6 py-4 font-gilroy text-sm text-white placeholder:text-white/60 focus:border-blue focus:outline-none md:px-8 md:py-5 md:text-base"
              />
              <input
                type="tel"
                placeholder="Номер телефона"
                className="w-full rounded-[40px] border border-white bg-transparent px-6 py-4 font-gilroy text-sm text-white placeholder:text-white/60 focus:border-blue focus:outline-none md:px-8 md:py-5 md:text-base"
              />
              
              {/* Поле с настоящим календарем */}
              <div 
                className="relative flex w-full cursor-pointer items-center justify-between rounded-[40px] border border-white px-6 py-4 md:px-8 md:py-5"
                onClick={(e) => {
                  const input = e.currentTarget.querySelector('input[type="date"]') as HTMLInputElement;
                  if (input) {
                    try {
                      input.showPicker(); 
                    } catch (err) {
                      input.focus(); 
                    }
                  }
                }}
              >
                <span className="pointer-events-none font-gilroy text-sm text-white/60 md:text-base">
                  Дата посещения
                </span>
                <Image 
                  src="/icons/btn-left-black.svg" 
                  alt="" 
                  width={20} 
                  height={20} 
                  className="pointer-events-none h-4 w-4 shrink-0 -rotate-90 opacity-60 invert md:h-5 md:w-5" 
                />
                <input 
                  type="date" 
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0" 
                />
              </div>

              <button
                type="submit"
                className="mt-2 h-[56px] w-full cursor-pointer rounded-[55px] bg-blue font-benzin text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black md:text-base xl:mt-4 xl:h-[64px]"
              >
                Отправить
              </button>
              
              <p className="mt-2 font-gilroy text-[10px] text-white/60 md:text-xs xl:text-sm">
                *Нажимая на кнопку, вы соглашаетесь с{" "}
                <a href="#" className="underline transition-colors hover:text-white">
                  политикой конфиденциальности
                </a>.
              </p>
            </form>
          </div>

          <div className="w-full lg:w-[45%] xl:w-[48%]">
            <Image
              src="/images/FAQ-banner.png" 
              alt="Экскурсия в планетарий"
              width={700}
              height={500}
              className="h-auto w-full rounded-[20px] object-cover md:rounded-[30px] xl:rounded-[55px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}