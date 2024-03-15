"use client";

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { InfoCircleOutlined } from "@ant-design/icons";

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false); // 팝업의 열림/닫힘 상태를 관리하는 상태 변수

    return (
        <div className="flex h-screen items-center justify-center">
            <button className="ml-2" onClick={() => setIsOpen(true)}>
                <InfoCircleOutlined />
            </button>
            <CSSTransition
                in={isOpen}
                timeout={1000}
                classNames="popup"
                unmountOnExit
            >
                <div className="border-blue-primary fixed bottom-[2.5rem] left-[48rem] top-[10rem] z-10 h-[15rem] w-[25.5rem] -translate-x-1/2 -translate-y-1/2 transform rounded border border-gray-300 bg-white p-[1rem_1.5rem] shadow-md">
                    <div className="text-center">
                        <h2 className="mb-4 text-xl font-bold">
                            This is a Popup
                        </h2>
                        <p className="mb-4">
                            Content of the popup goes here...
                        </p>
                        <button
                            className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Close Popup
                        </button>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Popup;
