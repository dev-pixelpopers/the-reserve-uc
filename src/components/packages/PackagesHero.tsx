"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface PackagesHeroProps {
    titleTop: string;
    titleBottom: string;
    accentTop: string;
    accentBottom: string;
    lead: string;
}

export default function PackagesHero({
    titleTop,
    titleBottom,
    accentTop,
    accentBottom,
    lead,
}: PackagesHeroProps) {
    const heroTextLeftRef = useRef<HTMLDivElement>(null);
    const heroTextRightRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(heroTextLeftRef.current, { x: -1500 }, { x: 0, duration: 2, ease: 'power3.out' });
        gsap.fromTo(heroTextRightRef.current, { x: 1500 }, { x: 0, duration: 2, ease: 'power3.out', delay: 0.15 });
    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col justify-center bg-[#0e1111] overflow-hidden px-[5%] lg:px-[43px] pt-[140px] lg:pt-[200px] pb-[60px] lg:pb-[100px]">
            <div className="flex flex-col gap-[20px]">
                <div ref={heroTextLeftRef} className="flex flex-row items-center gap-[20px] lg:gap-[42px]">
                    <h1 className="font-midland text-[clamp(28px,5vw,60px)] leading-[1.4] lg:leading-[100px] capitalize whitespace-nowrap text-[#FAF1E1]">
                        {titleTop}
                    </h1>
                    <img
                        src={accentTop}
                        className="rotate-[13.938deg] rounded-[16px] lg:rounded-[32px] h-[70px] lg:h-[140px]"
                        alt=""
                    />
                </div>

                <div ref={heroTextRightRef} className="flex flex-row justify-end items-center gap-5 lg:gap-10">
                    <img
                        src={accentBottom}
                        className="-rotate-[13.938deg] rounded-[16px] lg:rounded-[32px] h-[70px] lg:h-[140px]"
                        alt=""
                    />
                    <h1 className="font-midland text-[clamp(28px,5vw,60px)] leading-[1.4] lg:leading-[100px] capitalize whitespace-nowrap text-[#FAF1E1]">
                        {titleBottom}
                    </h1>
                </div>
            </div>

            <div className="flex flex-row justify-end mt-[40px] lg:mt-[60px] px-0 lg:px-[86px]">
                <p className="font-seasons text-[clamp(16px,2vw,24px)] leading-[1.7] lg:leading-[42px] max-w-[600px] text-left lg:text-right text-[#FAF4ED]">
                    {lead}
                </p>
            </div>
        </div>
    );
}
