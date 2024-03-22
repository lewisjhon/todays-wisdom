import { metadata } from "@/app/layout";
import Introduce from "@/components/Introduce";
import Popup from "@/components/Popup";
import React from "react";

const Header = () => {
    return (
        <div className="fixed inset-x-0 flex h-[4rem] items-center justify-center bg-white bg-opacity-20 text-center">
            <section className="flex-col text-center">
                <p className="text-lg font-bold">
                    {metadata.title?.toString()}
                </p>
                <p className="text-xs">{metadata.description?.toString()}</p>
            </section>
            {/*<Introduce />*/}
        </div>
    );
};

export default Header;
