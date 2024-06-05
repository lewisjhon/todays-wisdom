import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }
            md: "760px",
            lg: "1024px",
            // => @media (min-width: 1024px) { ... }
            xl: "1280px",
            // => @media (min-width: 1280px) { ... }
            "2xl": "1920px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontFamily: {
                daeam: ["DAEAM_LEE_TAE_JOON"],
            },
            colors: {
                primary: "#19191B",
                secondary: "#757576",
                hover: "#a4b3ea",
                gray: {
                    100: "#EDEDF1",
                    200: "#F9F9FA",
                    300: "#B2B2BA",
                    400: "#EFEFF3",
                    500: "#DFE0E7",
                    600: "#535354",
                    700: "#303031",
                    800: "#474749",
                    hover: "#D1D2DC",
                },
                fontSize: {
                    xs: "0.75rem", // 12px
                    sm: "0.875rem", // 14px
                    base: "1rem", // 16px
                    md: "1.125rem", // 18px
                    lg: "1.5rem", // 24px
                    xl: "2rem", // 32px
                    xxl: "2.25rem", // 36px
                },
            },
        },
    },
    plugins: [],
};
export default config;
