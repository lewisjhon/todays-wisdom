import type { Metadata } from "next";
import { Noto_Sans_KR as NOTO_SANS_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { DataModel } from "@/models/Common";
import { BackgroundModel } from "@/models/Background";

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
    const background =
        require("../../public/data/background.json") as DataModel<BackgroundModel>;

    return (
        <html lang="en">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="google-adsense-account"
                    content="ca-pub-4667051183270672"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <meta
                    name="keywords"
                    content="위즈덤, 명언, wisdom, 삶의 지혜"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="위즈덤" />
                <meta
                    property="og:description"
                    content="매일매일 삶의 지혜를 주는 명언"
                />
                <title>위즈덤</title>
            </head>
            <body className={`${noto.className}`}>
                <div
                    className="flex h-screen flex-col"
                    style={{
                        backgroundImage: `url(/images/background/${background.data[0].filename})`,
                        backgroundPosition: "center", // 배경 이미지를 가운데 정렬
                        backgroundSize: "cover", // 배경 이미지를 화면에 맞게 늘림
                        height: "100vh", // 브라우저 높이로 설정
                    }}
                >
                    <section className="bg-white bg-opacity-50">
                        <Header />
                    </section>
                    <section className="flex-1 bg-white bg-opacity-40">
                        {children}
                    </section>
                    <section className="bg-gray-600 bg-opacity-40">
                        <Footer />
                    </section>
                    <Analytics />
                </div>
            </body>
        </html>
    );
}
