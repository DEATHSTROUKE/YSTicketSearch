import React from "react";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { StoreProvider } from "@/store/StoreProvider";
import { Metadata } from "next";

const roboto = Roboto({
  subsets: ["cyrillic"], style: ["normal", "italic"], weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Билетопоиск Главная",
  description: "Лучший сервис для покупки билетов",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
    <body className={roboto.className}>
    <StoreProvider>
      <div className="wrapper">
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </div>
      <div id="reactPortalDropdown"></div>
      <div id="reactPortalModal"></div>
    </StoreProvider>
    </body>
    </html>
  );
}
