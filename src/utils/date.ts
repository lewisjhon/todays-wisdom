import dayjs from "dayjs";
import "dayjs/locale/ko";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.locale("ko");
// const timeZone = "Asia/Seoul"; // 한국 타임존
const timeZone =
    Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Seoul";

export const formatDateTimeRange = (dateRange: any, locale = "ko") => {
    // 문자열에서 날짜 추출
    if (dateRange) {
        const startDate = dayjs(dateRange[0]);
        const endDate = dayjs(dateRange[1]);

        // 원하는 형식으로 포맷
        const formattedStartDate = startDate
            .locale(locale)
            .format(
                locale === "ko"
                    ? "YYYY년 MM월 DD일 (dddd) A h시mm분"
                    : "dddd, MMMM DD, YYYY h:mmA",
            );
        const formattedEndDate = endDate
            .locale(locale)
            .format(locale === "ko" ? "A h시mm분" : "h:mmA");

        // 결과 반환
        return `${formattedStartDate} ~ ${formattedEndDate}`;
    }

    return "";
};

export const formatDateTimeRangeForConference = (
    dateRange: any,
    locale = "ko",
) => {
    // 문자열에서 날짜 추출
    if (dateRange) {
        const startDate = dayjs(dateRange[0]);
        const endDate = dayjs(dateRange[1]);

        // 원하는 형식으로 포맷
        const formattedStartDate = startDate
            .locale(locale)
            .format(
                locale === "ko"
                    ? "YYYY년 MM월 DD일 (dddd) A h시mm분"
                    : "dddd, MMMM DD, YYYY h:mmA",
            );
        const formattedEndDate = endDate
            .locale(locale)
            .format(
                locale === "ko"
                    ? "YYYY년 MM월 DD일 (dddd) A h시mm분"
                    : "dddd, MMMM DD, YYYY h:mmA",
            );
        // 결과 반환
        return `${formattedStartDate} ~ ${formattedEndDate}`;
    }

    return "";
};

export const changeUtcDate = (
    date: any,
    options: string,
    format = "YYYY-MM-DD HH:mm",
) => {
    if (!date) {
        return "";
    }
    switch (options) {
        case "UTC": // local time -> utc
            return dayjs(date).utc().format(format);
        case "LOCAL": // utc -> local time
            return dayjs.utc(date).tz(timeZone).format(format);
        case "LOCAL_EN":
            return dayjs.utc(date).locale("en").tz(timeZone).format(format);
        default:
            return dayjs(date).format(format);
    }
};

export const toUtcDate = (date: any, format = "YYYY-MM-DD HH:mm") =>
    changeUtcDate(date, "UTC", format);

export const toLocaleDate = (
    date: any,
    format = "YYYY-MM-DD HH:mm",
    locale: string = "ko",
) => changeUtcDate(date, locale === "en" ? "LOCAL_EN" : "LOCAL", format);

export const dateNow = (format = "YYYY-MM-DD HH:mm") => {
    return dayjs().format(format);
};

export const toMMss = (seconds: number) =>
    dayjs().startOf("day").add(seconds, "second").format("mm:ss");

export const getConvertLocaleDatetime = (
    source: dayjs.Dayjs,
    add: number,
    addUnit: dayjs.ManipulateType,
    locale: string,
    format: string,
) => source.add(add, addUnit).locale(locale).format(format);

export const getLocalDayCount = (
    localStartDateTime: string | dayjs.Dayjs,
    localEndDateTime: string | dayjs.Dayjs,
) => {
    const sDt =
        typeof localStartDateTime === "string"
            ? dayjs(localStartDateTime)
            : localStartDateTime;
    const eDt =
        typeof localEndDateTime === "string"
            ? dayjs(localEndDateTime)
            : localEndDateTime;
    return eDt.diff(sDt, "day") + 1;
};
