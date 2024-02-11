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
      <meta charSet="UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="google-adsense-account" content="ca-pub-4667051183270672"/>
      <meta name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <meta name="keywords" content="위즈덤, 명언, good phrase, wisdom, 오늘의, 오늘의 명언, 삶의 지혜"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="위즈덤"/>
      <meta property="og:description" content="매일매일 삶의 지혜를 주는 명언"/>
      <title>위즈덤</title>
    </head>
    <body className={noto.className}>
    <Header/>
    {children}
    </body>
    </html>
  );
}
