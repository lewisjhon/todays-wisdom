import type { Metadata } from "next";
import { Noto_Sans_KR as NOTO_SANS_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const noto = NOTO_SANS_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "위즈덤(Wisdom)",
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
    <body className={noto.className} >
      <Header/>
      {children}
    </body>
    </html>
  );
}
