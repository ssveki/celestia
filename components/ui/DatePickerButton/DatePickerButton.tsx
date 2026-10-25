// components/ui/DatePickerButton/DatePickerButton.tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface DatePickerButtonProps {
  className?: string;
}

export default function DatePickerButton({ className = "" }: DatePickerButtonProps) {
  const [date, setDate] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      try {
        inputRef.current.showPicker();
      } catch (err) {
        inputRef.current.focus();
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative inline-flex h-[40px] cursor-pointer items-center gap-2 rounded-full border border-white/40 px-4 font-gilroy text-xs text-white/70 transition-colors hover:border-white hover:text-white ${className}`}
    >
      <span>
        {date ? new Date(date).toLocaleDateString("ru-RU") : "Выбрать дату"}
      </span>
      <Image
        src="/icons/btn-left-black.svg"
        alt=""
        width={12}
        height={12}
        className="h-3 w-3 -rotate-90 opacity-70 invert"
      />

      <input
        ref={inputRef}
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
      />
    </div>
  );
}
