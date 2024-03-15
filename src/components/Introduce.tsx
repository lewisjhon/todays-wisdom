"use client";

import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Introduce = () => {
    const [isOpen, setIsOpen] = useState(false);
    const nodeRef = useRef(null);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div className="">
                <button
                    type="button"
                    onClick={toggle}
                    className="flex_center gap-3"
                >
                    정보
                    {/*<IconChat /> 정보*/}
                </button>
            </div>
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="popup"
                unmountOnExit
            >
                {/*<div className="popup">*/}
                {/*    <div className="content">*/}
                {/*        <h2>This is a Popup</h2>*/}
                {/*        <p>Content of the popup goes here...</p>*/}
                {/*        <button onClick={() => setIsOpen(false)}>*/}
                {/*            Close Popup*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div
                    ref={nodeRef}
                    className="fade-example border-blue-primary absolute bottom-[2.5rem] left-0 top-10 z-10 h-[15rem] w-[25.5rem] rounded border bg-white p-[16px_24px]"
                >
                    <div className="absolute right-3 top-3 ">
                        <button
                            onClick={() => setIsOpen(false)}
                            type="button"
                            aria-label="닫기"
                        >
                            닫기
                        </button>
                    </div>
                    <p className="ti text-blue-primary mb-4 text-base font-bold tracking-tighter">
                        텍스트1
                    </p>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Introduce;
