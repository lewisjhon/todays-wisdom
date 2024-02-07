import { Pathnames } from "next-intl/navigation";

export const locales = ["ko", "en"] as const;

export const pathnames = {
    "/": "/",
    "/pathnames": {
        ko: "/ko",
        en: "/en",
    },
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
