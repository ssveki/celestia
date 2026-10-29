"use client";

import { useState } from "react";
import Image from "next/image";

export default function EventGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="w-full">
      <div className="relative aspect-[4/3] max-h-[340px] w-full overflow-hidden rounded-[20px] bg-dark-gray md:aspect-[16/9] md:rounded-[24px] xl:rounded-[32px]">
        {images.map((img, i) => (
          <Image
            key={img}
            src={img}
            alt={`Фото события ${i + 1}`}
            fill
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 670px"
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              index === i ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          />
        ))}
      </div>
      
      {/* Кнопки листания */}
      <div className="mt-3 flex justify-center gap-2 md:mt-4 md:gap-3">
        <button
          onClick={prev}
          aria-label="Предыдущее фото"
          className="group flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-blue md:h-[36px] md:w-[36px] xl:h-[40px] xl:w-[40px]"
        >
          <Image 
            src="/icons/btn-left-black.svg" 
            alt="" 
            width={16} 
            height={16} 
            className="h-3 w-3 transition-all duration-300 group-hover:invert md:h-3.5 md:w-3.5 xl:h-4 xl:w-4" 
          />
        </button>
        <button
          onClick={next}
          aria-label="Следующее фото"
          className="group flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-blue md:h-[36px] md:w-[36px] xl:h-[40px] xl:w-[40px]"
        >
          <Image 
            src="/icons/btn-left-black.svg" 
            alt="" 
            width={16} 
            height={16} 
            className="h-3 w-3 rotate-180 transition-all duration-300 group-hover:invert md:h-3.5 md:w-3.5 xl:h-4 xl:w-4" 
          />
        </button>
      </div>
    </div>
  );
}