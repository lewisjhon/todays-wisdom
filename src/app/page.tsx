"use client";

import React from "react";
import { WisdomModel } from "@/models/Wisdom";
import { DataModel } from "@/models/Common";
import { BackgroundModel } from "@/models/Background";
import dayjs from "dayjs";
import * as process from "process";

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
        <div className="flex h-full items-center justify-center ">
            <section className="w-[94%] flex-col text-center !font-daeam md:w-[40rem]">
                <p className="text-xl font-bold">
                    {wisdom.data[getIndex(wisdom.data.length)].phrase}
                </p>
                <p className="text-sm">
                    - {wisdom.data[getIndex(wisdom.data.length)].author} -
                </p>
            </section>
        </div>
    );
};

export default ServerPage;
