"use client";
import { useState } from "react";
import FullScreenModal from "./MenuModal";
import Link from "next/link";

function Header() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <>
            <header className="absolute left-0 top-0 z-50 w-full px-[4%] py-4 lg:px-[8.96%] lg:py-[1.04%]">
                <div className="relative flex min-h-16 w-full items-center justify-between sm:min-h-20 lg:min-h-0">
                    <div className="z-10 flex-1">
                        <div className="menu-btn flex items-center justify-start">
                            <button
                                type="button"
                                className="flex cursor-pointer items-center gap-2 lg:gap-1"
                                onClick={() => setIsModalOpen(true)}
                                aria-label="Open menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="36"
                                    height="19"
                                    viewBox="0 0 36 19"
                                    fill="none"
                                    className="h-[15px] w-[28px] shrink-0 lg:h-[19px] lg:w-9"
                                >
                                    <rect width="26" height="3" rx="1.5" fill="white" />
                                    <rect x="10" y="8" width="26" height="3" rx="1.5" fill="white" />
                                    <rect y="16" width="26" height="3" rx="1.5" fill="white" />
                                </svg>
                                <span className="hidden font-seasons text-[20px] leading-5 font-normal text-white sm:inline lg:inline mt-[5%]">
                                    MENU
                                </span>
                            </button>
                        </div>
                    </div>
                    <Link
                        className="header-logo flex-1 z-0 lg:static lg:justify-center lg:items-center lg:z-auto lg:flex"
                        href="/"
                    >
                        <img
                            src="/images/logo-new.png"
                            alt="The Reserve"
                            className="object-contain w-[110px] h-[70px]  lg:h-[150px] lg:w-[253px]"
                        />
                    </Link>
                    <div className="z-10 flex-1 shrink-0 justify-end hidden lg:flex">
                        <Link
                            href="/contact-us"
                            className="header-btn flex max-lg:px-4 max-lg:py-2.5 cursor-pointer items-center justify-center rounded-full border border-white bg-black px-6 pt-3 pb-2 text-[18px] font-bold text-white"
                        >
                            <span className="font-seasons text-[clamp(0.8125rem,0.5rem+0.85vw,1.125rem)] leading-[1.25] lg:text-[18px] lg:leading-normal ">
                                <span className="lg:hidden">Tour</span>
                                <span className="hidden lg:inline">Schedule a Private Tour</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </header>
            <FullScreenModal Popupopen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

export default Header;
