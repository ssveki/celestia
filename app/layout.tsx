import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celestia — Планетарий",
  description: "Запись на экскурсию в планетарий Celestia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-dark-gray text-white">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}