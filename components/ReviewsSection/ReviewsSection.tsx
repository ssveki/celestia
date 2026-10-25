"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { reviews } from "@/lib/data";
import ReviewCard from "@/components/ReviewCard/ReviewCard";

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(reviews.length);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // На ПК (1440px) - 4 карточки, на планшете (768px) - 3 карточки, на телефоне - 1.
      if (width >= 1440) setItemsPerPage(4);
      else if (width >= 768) setItemsPerPage(3);
      else setItemsPerPage(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (currentIndex >= reviews.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prev) => prev - reviews.length);
      }, 500);
      return () => clearTimeout(timer);
    } else if (currentIndex < reviews.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prev) => prev + reviews.length);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className="w-full bg-dark-gray px-[15px] py-10 md:px-[30px] md:py-16 xl:px-[50px] xl:py-20">
      <div className="mx-auto w-full max-w-[1340px]">
        
        <div className="relative mb-8 flex items-center justify-center md:mb-12">
          <h2 className="text-center font-benzin text-[24px] font-normal text-white md:text-[40px] xl:text-[57px]">
            Отзывы и отметки
          </h2>
          
          <div className="absolute right-0 hidden items-center gap-2 md:flex">
            <button 
              onClick={prev}
              className="group flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-white transition-colors hover:bg-blue xl:h-[48px] xl:w-[48px]"
            >
              <Image src="/icons/btn-left-black.svg" alt="" width={16} height={16} className="h-4 w-4 transition-all group-hover:invert xl:h-5 xl:w-5" />
            </button>
            <button 
              onClick={next}
              className="group flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-white transition-colors hover:bg-blue xl:h-[48px] xl:w-[48px]"
            >
              <Image src="/icons/btn-left-black.svg" alt="" width={16} height={16} className="h-4 w-4 rotate-180 transition-all group-hover:invert xl:h-5 xl:w-5" />
            </button>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div 
            className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {extendedReviews.map((review, i) => (
              // ДОБАВЛЕНО min-w-0, чтобы текст не распирал карточку, и md:w-1/3 для 3 колонок на планшете
              <div 
                key={i} 
                className="min-w-0 w-full shrink-0 px-2 md:w-1/3 xl:w-1/4"
              >
                <div className="h-[420px] w-full xl:h-[500px]">
                  <ReviewCard review={review} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
          <button onClick={prev} className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full bg-white">
            <Image src="/icons/btn-left-black.svg" alt="" width={20} height={20} className="h-5 w-5" />
          </button>
          <button onClick={next} className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full bg-blue">
            <Image src="/icons/btn-left-black.svg" alt="" width={20} height={20} className="h-5 w-5 rotate-180 invert" />
          </button>
        </div>

      </div>
    </section>
  );
}