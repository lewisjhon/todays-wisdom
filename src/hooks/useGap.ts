"use client"

import process from "process";
import {toLocaleDate} from "@/utils/date";
import dayjs from "dayjs";

const useGap = () => {
    const start = process.env.NEXT_PUBLIC_START_DATE;
    const current = toLocaleDate(dayjs(), "YYYY-MM-DD");
    const gap = dayjs(current).date() - dayjs(start).date();

    // const test = dayjs.utc(new Date()).tz(timeZone).format("YYYY-MM-DD hh:mm:ss");
    // const test2 = new Date().getSeconds();

    return { gap };
}

export default useGap;