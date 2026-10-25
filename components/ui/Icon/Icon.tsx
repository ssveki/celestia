// components/ui/Icon/Icon.tsx
import { CSSProperties } from "react";

type IconProps = {
  name: string; // Имя файла без расширения и без цветового суффикса
  className?: string;
};

export default function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const iconUrl = `url(/icons/${name}-blue.svg)`; 

  const style: CSSProperties = {
    maskImage: iconUrl,
    WebkitMaskImage: iconUrl,
    maskSize: "contain",
    WebkitMaskSize: "contain",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    backgroundColor: "currentColor",
  };

  return <div style={style} className={className} aria-hidden="true" />;
}