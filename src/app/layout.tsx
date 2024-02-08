import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "위즈덤",
  description: "매일매일 삶의 지혜를 주는 명언",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta name="google-adsense-account" content="ca-pub-4667051183270672"/>
      <title>위즈덤</title>
    </head>
    <body className={inter.className}>
      <Header/>
      {children}
    </body>
    </html>
  );
}
