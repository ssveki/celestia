// components/ReviewsSection/ReviewsSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type TextReview = {
  kind: "text";
  name: string;
  role: string;
  avatar: string;
  paragraphs: string[];
};

type PhotoReview = {
  kind: "photo";
  img: string;
  avatar: string;
};

type Review = TextReview | PhotoReview;

const reviews: Review[] = [
  {
    kind: "photo",
    img: "/images/reviews-1.png",
    avatar: "/images/reviews-person-1.png",
  },
  {
    kind: "text",
    name: "Михаил П.",
    role: "Фрилансер",
    avatar: "/images/reviews-person-2.png",
    paragraphs: [
      "Виды из телескопа были невероятными, а викторины для детей были веселыми и интересными.",
      "Я настоятельно рекомендую планетарий всем, кто хочет почувствовать незабываемое впечатление и познать немного про нашу вселенную!",
    ],
  },
  {
    kind: "photo",
    img: "/images/reviews-2.png",
    avatar: "/images/reviews-person-3.png",
  },
  {
    kind: "text",
    name: "Елена П.",
    role: "Домохозяйка",
    avatar: "/images/reviews-person-4.png",
    paragraphs: [
      "Мы пришли с детьми разного возраста, и все они были в восторге от того, что увидели.",
      "Малыши с удовольствием изучали планеты и звезды, а также задавали вопросы астрономам, которые с радостью отвечали на них.",
    ],
  },
];

export default function ReviewsSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % reviews.length);
  const prev = () => setActive((p) => (p - 1 + reviews.length) % reviews.length);

  return (
    <section className="w-full bg-dark-gray px-[15px] py-10 lg:px-[142px] lg:py-16 xl:px-[290px] xl:py-20">
      <div className="mx-auto w-full max-w-[1340px]">

        {/* заголовок + стрелки */}
        <header className="relative mb-[30px] flex items-center justify-center lg:mb-[40px] xl:mb-[60px]">
          <h2 className="font-benzin text-center text-[24px] font-normal text-white md:text-[40px] xl:text-[57px]">
            Отзывы и отметки
          </h2>

          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center gap-3 md:flex">
            <NavButton direction="prev" onClick={prev} />
            <NavButton direction="next" onClick={next} />
          </div>
        </header>

        {/* md–lg — 3 карточки; xl — 4 карточки */}
        <div className="hidden gap-4 md:grid md:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>

        {/* мобилка — слайдер по одной */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          <div className="w-full">
            <ReviewCard review={reviews[active]} />
          </div>

          <div className="flex items-center justify-center gap-3">
            <NavButton direction="prev" onClick={prev} size="lg" />
            <NavButton direction="next" onClick={next} size="lg" />
          </div>
        </div>

      </div>
    </section>
  );
}

function NavButton({
  direction,
  onClick,
  size = "md",
}: {
  direction: "prev" | "next";
  onClick: () => void;
  size?: "md" | "lg";
}) {
  const dim = size === "lg" ? "h-11 w-11" : "h-10 w-10";
  const icon = size === "lg" ? "h-5 w-5" : "h-4 w-4";

  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Назад" : "Вперёд"}
      onClick={onClick}
      className={`group ${dim} inline-flex cursor-pointer items-center justify-center rounded-full border border-transparent bg-white transition-all duration-300 hover:bg-blue active:border-white active:bg-blue active:shadow-[0_4px_11px_0_rgba(50,78,234,0.8)]`}
    >
      {/* чёрная иконка — по умолчанию */}
      <Image
        src="/icons/btn-left-black.svg"
        alt=""
        width={20}
        height={20}
        className={`${icon} ${
          direction === "next" ? "rotate-180" : ""
        } transition-opacity duration-300 group-hover:opacity-0`}
      />
      {/* белая иконка — при наведении (лежит поверх чёрной) */}
      <Image
        src="/icons/btn-left-white.svg"
        alt=""
        width={20}
        height={20}
        className={`pointer-events-none absolute ${icon} ${
          direction === "next" ? "rotate-180" : ""
        } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
    </button>
  );
}

function ReviewCard({ review }: { review: Review }) {
  if (review.kind === "text") return <TextCard {...review} />;
  return <PhotoCard {...review} />;
}

function TextCard({ name, role, avatar, paragraphs }: TextReview) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex h-full flex-col gap-5 rounded-[28px] bg-white p-6 lg:rounded-[40px] xl:rounded-[55px] xl:p-8">
      <header className="flex items-center gap-4">
        <Image
          src={avatar}
          alt=""
          width={84}
          height={84}
          className="h-16 w-16 shrink-0 rounded-full object-cover xl:h-[84px] xl:w-[84px]"
        />
        <div className="min-w-0">
          <h3 className="font-benzin text-lg leading-tight text-blue xl:text-[22px]">
            {name}
          </h3>
          <p className="mt-1 font-gilroy text-sm text-black/70 xl:text-base">
            {role}
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-3">
        {(expanded ? paragraphs : paragraphs.slice(0, 1)).map((t, i) => (
          <p
            key={i}
            className="font-gilroy text-sm leading-[1.45] text-black xl:text-base"
          >
            {t}
          </p>
        ))}
      </div>

      {paragraphs.length > 1 && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-auto flex w-fit cursor-pointer items-center gap-1 font-gilroy text-sm text-blue transition-opacity duration-300 hover:opacity-70 xl:text-base"
        >
          Ещё
          <Image
            src="/icons/arrow-down-blue.svg"
            alt=""
            width={14}
            height={14}
            className={`h-3.5 w-3.5 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </article>
  );
}

function PhotoCard({ img, avatar }: PhotoReview) {
  return (
    <article className="relative aspect-[312/427] w-full overflow-hidden rounded-[28px] lg:rounded-[40px] xl:rounded-[55px]">

      <Image
        src={img}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1920px) 312px, 312px"
        className="object-cover object-center"
      />

      <div className="absolute left-6 right-6 top-5 border-t-2 border-dashed border-white/40 xl:top-6" />

      <div className="absolute left-5 top-8 xl:left-6 xl:top-10">
        <Image
          src={avatar}
          alt=""
          width={60}
          height={60}
          className="h-[50px] w-[50px] rounded-full border-2 border-white object-cover xl:h-[60px] xl:w-[60px]"
        />
      </div>

      <div className="pointer-events-none absolute bottom-24 right-10 xl:bottom-28 xl:right-12">
        <Image
          src="/icons/star.svg"
          alt=""
          width={20}
          height={20}
          className="absolute -left-4 -top-3 h-5 w-5"
        />
        <Image
          src="/icons/star-white.svg"
          alt=""
          width={14}
          height={14}
          className="h-3.5 w-3.5"
        />
      </div>

    </article>
  );
}