"use client";

import { useState } from "react";
import Image from "next/image";

export default function EventGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="w-full">
      {/* Контейнер с картинками */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[30px] bg-dark-gray md:rounded-[40px] lg:aspect-[16/10] xl:rounded-[55px]">
        {images.map((img, i) => (
          <Image
            key={img}
            src={img}
            alt={`Фото события ${i + 1}`}
            fill
            priority={i === 0} // первую картинку грузим сразу
            sizes="(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 670px"
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              index === i ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          />
        ))}
      </div>
      
      {/* Кнопки навигации */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Предыдущее фото"
          className="group flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-blue"
        >
          <Image 
            src="/icons/btn-left-black.svg" 
            alt="" 
            width={20} 
            height={20} 
            className="h-5 w-5 transition-all duration-300 group-hover:invert" 
          />
        </button>
        <button
          onClick={next}
          aria-label="Следующее фото"
          className="group flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-blue"
        >
          <Image 
            src="/icons/btn-left-black.svg" 
            alt="" 
            width={20} 
            height={20} 
            className="h-5 w-5 rotate-180 transition-all duration-300 group-hover:invert" 
          />
        </button>
      </div>
    </div>
  );
}