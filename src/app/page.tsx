import React from "react";
import {WisdomModel} from "@/models/Wisdom";
import {DataModel} from "@/models/Common";
import {BackgroundModel} from "@/models/Background";
import dayjs from "dayjs";
import * as process from "process";
import {toLocaleDate} from "@/utils/date";

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
        <>
            <h1>{wisdom.data[getIndex(wisdom.data.length)].author}</h1>
            <h3>{wisdom.data[getIndex(wisdom.data.length)].phrase}</h3>
            <h3>{background.data[getIndex(background.data.length)].filename}</h3>
        </>
    );
}

export default ServerPage;
