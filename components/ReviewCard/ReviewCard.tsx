"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ReviewItem } from "@/lib/data";

export default function ReviewCard({ review }: { review: ReviewItem }) {
  if (review.kind === "text") return <TextCard {...review} />;
  return <PhotoCard {...review} />;
}

function TextCard({ name, role, avatar, paragraphs }: Extract<ReviewItem, { kind: "text" }>) {
  return (
    <div className="flex h-full w-full flex-col rounded-[24px] bg-white p-5 xl:rounded-[32px] xl:p-6">
      <header className="flex items-center gap-3">
        <Image src={avatar} alt="" width={84} height={84} className="h-[50px] w-[50px] shrink-0 rounded-full object-cover xl:h-[60px] xl:w-[60px]" />
        <div className="min-w-0">
          <h3 className="font-benzin text-base leading-tight text-blue xl:text-lg">{name}</h3>
          <p className="mt-1 font-gilroy text-xs text-black/60 xl:text-sm">{role}</p>
        </div>
      </header>
      <div className="mt-4 flex flex-col gap-3">
        {paragraphs.map((t, i) => <p key={i} className="font-gilroy text-xs leading-[1.45] text-black xl:text-sm">{t}</p>)}
      </div>
    </div>
  );
}

function PhotoCard({ images, avatar }: Extract<ReviewItem, { kind: "photo" }>) {
  const [index, setIndex] = useState(0);
  useEffect(() => { const timer = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 4000); return () => clearInterval(timer); }, [images.length]);
  const handlePrev = (e: React.MouseEvent) => { e.stopPropagation(); setIndex((prev) => (prev - 1 + images.length) % images.length); };
  const handleNext = (e: React.MouseEvent) => { e.stopPropagation(); setIndex((prev) => (prev + 1) % images.length); };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[24px] xl:rounded-[32px]">
      {images.map((img, i) => (
        <Image key={img} src={img} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 25vw" className={`object-cover transition-opacity duration-700 ease-in-out ${i === index ? "z-10 opacity-100" : "z-0 opacity-0"}`} />
      ))}
      <div className="absolute inset-0 z-20 flex">
        <div className="h-full w-1/2 cursor-pointer" onClick={handlePrev} />
        <div className="h-full w-1/2 cursor-pointer" onClick={handleNext} />
      </div>
      <div className="absolute left-4 right-4 top-4 z-30 flex gap-1.5">
        {images.map((_, i) => <div key={i} className={`h-[2px] flex-1 rounded-full transition-colors duration-500 ${i === index ? "bg-white" : "bg-white/30"}`} />)}
      </div>
      <div className="absolute left-4 top-8 z-30">
        <Image src={avatar} alt="" width={64} height={64} className="h-[40px] w-[40px] rounded-full border-2 border-white object-cover xl:h-[48px] xl:w-[48px]" />
      </div>
    </div>
  );
}