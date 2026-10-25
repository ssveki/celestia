// app/events/[slug]/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-dark-gray px-4 text-center">
      <h1 className="font-benzin text-4xl text-white md:text-6xl">404</h1>
      <p className="mt-4 font-benzin text-xl text-gray-400">Такого события не найдено</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-blue px-8 py-4 font-benzin text-sm text-white transition-colors hover:bg-white hover:text-black"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}