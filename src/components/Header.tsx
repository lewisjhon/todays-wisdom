import { metadata } from "@/app/layout";
import Introduce from "@/components/Introduce";
import React from "react";
import { Refresh } from "@/components/Refresh";

const Header = () => {
    return (
        <div className="flex h-[4rem] items-center justify-center text-center">
            <section className="w-[2rem] pl-2">
                <button>
                    <Refresh />
                </button>
            </section>
            <section className="flex-1 flex-col text-center">
                <Introduce title={metadata.title?.toString()} />
                <p className="text-xs">{metadata.description?.toString()}</p>
            </section>
            <section className="w-[2rem]"></section>
        </div>
    );
};

export default Header;
