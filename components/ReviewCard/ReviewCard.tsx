// components/ReviewCard/ReviewCard.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ReviewItem } from "@/lib/data";

export default function ReviewCard({ review }: { review: ReviewItem }) {
  if (review.kind === "text") {
    return <TextCard {...review} />;
  }
  return <PhotoCard {...review} />;
}

function TextCard({ name, role, avatar, paragraphs }: Extract<ReviewItem, { kind: "text" }>) {
  return (
    <div className="flex h-full w-full flex-col rounded-[30px] bg-white p-6 xl:rounded-[40px] xl:p-8">
      <header className="flex items-center gap-4">
        <Image
          src={avatar}
          alt=""
          width={84}
          height={84}
          className="h-[60px] w-[60px] shrink-0 rounded-full object-cover xl:h-[84px] xl:w-[84px]"
        />
        <div className="min-w-0">
          <h3 className="font-benzin text-lg leading-tight text-blue xl:text-[22px]">
            {name}
          </h3>
          <p className="mt-1 font-gilroy text-sm text-black/60 xl:text-base">
            {role}
          </p>
        </div>
      </header>

      <div className="mt-6 flex flex-col gap-4">
        {paragraphs.map((t, i) => (
          <p key={i} className="font-gilroy text-sm leading-[1.45] text-black xl:text-base">
            {t}
          </p>
        ))}
      </div>
    </div>
  );
}

function PhotoCard({ images, avatar }: Extract<ReviewItem, { kind: "photo" }>) {
  const [index, setIndex] = useState(0);

  // Автопереключение картинок внутри карточки
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  // Клики для переключения картинок (левая и правая половина)
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[30px] xl:rounded-[40px]">
      
      {/* Слайдер картинок */}
      {images.map((img, i) => (
        <Image
          key={img}
          src={img}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 25vw"
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        />
      ))}

      {/* Невидимые зоны для кликов влево/вправо */}
      <div className="absolute inset-0 z-20 flex">
        <div className="h-full w-1/2 cursor-pointer" onClick={handlePrev} />
        <div className="h-full w-1/2 cursor-pointer" onClick={handleNext} />
      </div>

      {/* Полоски-индикаторы сверху */}
      <div className="absolute left-6 right-6 top-5 z-30 flex gap-1.5">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-[2px] flex-1 rounded-full transition-colors duration-500 ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Аватарка */}
      <div className="absolute left-6 top-10 z-30">
        <Image
          src={avatar}
          alt=""
          width={64}
          height={64}
          className="h-[50px] w-[50px] rounded-full border-2 border-white object-cover xl:h-[64px] xl:w-[64px]"
        />
      </div>
    </div>
  );
}