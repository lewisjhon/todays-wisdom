import React from "react";
import {WisdomModel} from "@/models/Wisdom";
import {DataModel} from "@/models/Common";
import {BackgroundModel} from "@/models/Background";
import dayjs from "dayjs";
import * as process from "process";
import {toLocaleDate} from "@/utils/date";
import Image from "next/image";
import Header from "@/components/Header";

const ServerPage = () => {
    const wisdom = require('../../public/data/ko/wisdom.json') as DataModel<WisdomModel>;
    const background = require('../../public/data/background.json') as DataModel<BackgroundModel>;

    const start = process.env.NEXT_PUBLIC_START_DATE;
    const current = toLocaleDate(dayjs(), "YYYY-MM-DD");
    const gap = dayjs(current).date() - dayjs(start).date();

    const getIndex = (length: number) => {
        const index = gap % length;
        return index < 0 ? 0 : index ;
    }

    return (
        <div
            style={{
                backgroundImage: `url(/images/background/${background.data[getIndex(background.data.length)].filename})`,
                backgroundPosition: 'center', // 배경 이미지를 가운데 정렬
                backgroundSize: 'cover', // 배경 이미지를 화면에 맞게 늘림
                height: '100vh', // 브라우저 높이로 설정
            }}>
            <div className="bg-white bg-opacity-40 h-screen flex justify-center items-center">
                <section className="flex-col text-center">
                    <h1>{wisdom.data[getIndex(wisdom.data.length)].author}</h1>
                    <h3>{wisdom.data[getIndex(wisdom.data.length)].phrase}</h3>
                    <h3>{background.data[getIndex(background.data.length)].filename}</h3>
                </section>
            </div>
        </div>
    );
}

export default ServerPage;
