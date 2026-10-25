"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import Image from "next/image";

/* ──────────── ButtonPrimary ──────────── */

type PrimaryVariant = "blue" | "white";
type PrimarySize = "sm" | "md" | "lg";

type ButtonPrimaryProps = {
  children: ReactNode;
  variant?: PrimaryVariant;
  size?: PrimarySize;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const primarySize: Record<PrimarySize, string> = {
  sm: "px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm",
  md: "px-5 py-2.5 text-xs md:px-6 md:py-3 md:text-sm xl:px-8 xl:py-4 xl:text-base",
  lg: "h-[52px] w-full text-sm md:text-base xl:text-lg",
};

const primaryVariant: Record<PrimaryVariant, string> = {
  blue: "bg-blue text-white hover:bg-white hover:text-black",
  white: "bg-white text-black hover:bg-blue hover:text-white",
};

export function ButtonPrimary({
  children,
  variant = "blue",
  size = "md",
  fullWidth,
  className = "",
  ...rest
}: ButtonPrimaryProps) {
  return (
    <button
      {...rest}
      className={`inline-flex cursor-pointer items-center justify-center rounded-full font-benzin transition-colors duration-300 active:ring-2 active:ring-white active:ring-offset-2 active:ring-offset-dark-gray ${primaryVariant[variant]} ${primarySize[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </button>
  );
}

/* ──────────── ButtonOutline ──────────── */
// "Выбрать дату", "Подробнее" в main — прозрачная с рамкой

type ButtonOutlineProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonOutline({ children, className = "", ...rest }: ButtonOutlineProps) {
  return (
    <button
      {...rest}
      className={`inline-flex h-[40px] cursor-pointer items-center gap-2 rounded-full border border-white/40 px-3 font-gilroy text-xs text-white/70 transition-colors duration-300 hover:border-white hover:text-white group-hover:border-white group-hover:text-white md:px-4 xl:text-sm ${className}`}
    >
      {children}
    </button>
  );
}

/* ──────────── ButtonTab ──────────── */
// Табы «Программы / Мероприятия / Лекции»

type ButtonTabProps = {
  children: ReactNode;
  active?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonTab({ children, active, className = "", ...rest }: ButtonTabProps) {
  return (
    <button
      {...rest}
      className={`inline-flex h-[40px] cursor-pointer items-center justify-center rounded-full border px-4 font-gilroy text-xs transition-colors duration-300 md:px-6 md:text-sm xl:px-8 xl:text-base ${
        active
          ? "border-blue bg-blue text-white hover:border-white/80 active:border-white active:bg-blue/80"
          : "border-white/30 text-white hover:border-white/80 hover:text-white active:border-blue active:bg-blue active:text-white"
      } ${className}`}
    >
      {children}
    </button>
  );
}

/* ──────────── ButtonArrow ──────────── */
// Круглая кнопка со стрелкой (в карточках Main и Promo)
// стрелка: белая или чёрная иконка внутри
// Фон меняется по group-hover родительской карточки

type ButtonArrowProps = {
  iconSrc: string;
  bgColor?: "blue" | "white";
  invertOnHover?: boolean;
  rotateOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonArrow({
  iconSrc,
  bgColor = "blue",
  invertOnHover = true,
  rotateOnHover = true,
  ariaLabel = "Подробнее",
  className = "",
  ...rest
}: ButtonArrowProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      {...rest}
      className={`inline-flex h-[30px] w-[30px] shrink-0 cursor-pointer items-center justify-center rounded-full md:h-[36px] md:w-[36px] xl:h-[58px] xl:w-[58px] ${
        bgColor === "blue" ? "bg-blue" : "bg-white"
      } ${className}`}
    >
      <Image
        src={iconSrc}
        alt=""
        width={20}
        height={20}
        className={`h-3 w-3 md:h-4 md:w-4 xl:h-5 xl:w-5 ${
          rotateOnHover ? "rotate-0 transition-transform duration-300 group-hover:-rotate-90" : ""
        } ${invertOnHover ? "group-hover:invert" : ""}`}
      />
    </button>
  );
}

/* ──────────── ButtonCircle (слайдер) ──────────── */
// Круглая кнопка с иконкой btn-left
// direction="next" — та же иконка, но повёрнута

type ButtonCircleProps = {
  direction?: "prev" | "next";
  size?: "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonCircle({
  direction = "prev",
  size = "md",
  className = "",
  ...rest
}: ButtonCircleProps) {
  const dim = size === "lg" ? "h-11 w-11" : "h-10 w-10";
  const icon = size === "lg" ? "h-5 w-5" : "h-4 w-4";
  const rotate = direction === "next" ? "rotate-180" : "";

  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Назад" : "Вперёд"}
      {...rest}
      className={`group relative ${dim} inline-flex cursor-pointer items-center justify-center rounded-full border border-transparent bg-white transition-all duration-300 hover:bg-blue active:border-white active:bg-blue active:shadow-[0_4px_11px_0_rgba(50,78,234,0.8)] ${className}`}
    >
      <Image
        src="/icons/btn-left-black.svg"
        alt=""
        width={20}
        height={20}
        className={`${icon} ${rotate} transition-opacity duration-300 group-hover:opacity-0`}
      />
      <Image
        src="/icons/btn-left-white.svg"
        alt=""
        width={20}
        height={20}
        className={`pointer-events-none absolute ${icon} ${rotate} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
    </button>
  );
}