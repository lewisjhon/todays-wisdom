"use client";

import React from "react";
import { WisdomModel } from "@/models/Wisdom";
import { DataModel } from "@/models/Common";
import { BackgroundModel } from "@/models/Background";
import dayjs from "dayjs";
import * as process from "process";
import Introduce from "@/components/Introduce";

const ServerPage = () => {
    const wisdom =
        require("../../public/data/ko/wisdom.json") as DataModel<WisdomModel>;
    const background =
        require("../../public/data/background.json") as DataModel<BackgroundModel>;

    const start = process.env.NEXT_PUBLIC_START_DATE;
    const gap = dayjs().diff(dayjs(start), "day");

    const getIndex = (length: number) => {
        const index = gap % length;
        return index < 0 ? 0 : index;
    };

    const onRefresh = () => {
        window.location.reload();
    };

    return (
        <div
            style={{
                backgroundImage: `url(/images/background/${
                    background.data[getIndex(background.data.length)].filename
                })`,
                backgroundPosition: "center", // 배경 이미지를 가운데 정렬
                backgroundSize: "cover", // 배경 이미지를 화면에 맞게 늘림
                // height: "100vh", // 브라우저 높이로 설정
            }}
        >
            <div className="flex h-screen items-center justify-center bg-white bg-opacity-40">
                <section className="w-[94%] flex-col text-center !font-daeam md:w-[40rem]">
                    <p className="text-xl font-bold">
                        {wisdom.data[getIndex(wisdom.data.length)].phrase}
                    </p>
                    <p className="text-sm">
                        - {wisdom.data[getIndex(wisdom.data.length)].author} -
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ServerPage;
