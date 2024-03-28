"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Introduce = ({ title = "" }: { title?: string }) => {
    const [isVisible, setIsVisible] = useState(false);
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { y: 200, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };
    return (
        <div className="wrap">
            <div className="buttons">
                <button
                    type="button"
                    onClick={() => setIsVisible(!isVisible)}
                    className="text-lg font-bold hover:text-hover"
                >
                    {title}
                </button>
            </div>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className="box fixed left-1/2 top-1/2 h-[28rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-gray-700 p-10 text-start text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.ul
                            className="grid h-full w-full list-none gap-4 overflow-hidden"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.li
                                variants={item}
                                className="text-center text-2xl font-bold"
                            >
                                위즈덤(Wisdom)이란?
                            </motion.li>
                            <motion.li variants={item}>
                                삶이 힘들고 지친 모든 분들에게 조금이나마
                                지혜(Wisdom)를 드리기 위해 제작되었습니다.
                            </motion.li>
                            <motion.li variants={item}>
                                매일매일 인생에 도움이 되는 명언을 보여줍니다.
                            </motion.li>
                            <motion.li variants={item}>
                                한국 시간(KST) 기준 매일 자정(24:00)에 새로운
                                명언으로 갱신 됩니다.
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Introduce;
