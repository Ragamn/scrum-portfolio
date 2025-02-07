"use client";

import localFont from "next/font/local";
import "./style/globals.css"; // Tailwind のスタイルを適用
import MenuBar from "./components/menu-bar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") {
      document.body.className = "bg-customBackground"; // Tailwind のクラスを適用
    } else {
      document.body.className = "bg-customwhite";
    }
  }, [pathname]);

  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MenuBar />
        {children}
      </body>
    </html>
  );
}
