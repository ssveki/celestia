// app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celestia — Планетарий",
  description: "Запись на экскурсию в планетарий",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="flex min-h-screen flex-col bg-dark-gray text-white">
        <Header />
        {/* Основной контент страницы */}
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}