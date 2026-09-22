'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ClosingCTA from "@/components/shared/ClosingCTA";
import { aboutContent } from "@/data/about";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ComingSoonPage() {
    return (
        <>
            <div className="w-full h-screen bg-[#0e1111] flex flex-col justify-center lg:justify-end items-center gap-6 md:gap-8 lg:gap-10 pb-[5%] md:pb-[8%] lg:pb-[50px]">
                <div className="absolute inset-0 w-full h-full flex justify-center">
                    <img src="/images/bg-banner.png" alt="" className="w-full h-full  object-cover opacity-30 mix-blend-multiply" />
                </div>
                <div className="w-full flex flex-col items-center gap-4 md:gap-6 lg:gap-8 z-10 px-[5%] lg:px-0">
                    <h1 className="font-midland uppercase text-center text-[clamp(2.2rem,7vw,60px)] leading-[1.4] md:leading-[1.6] lg:leading-[100px] font-normal text-[#FAF1E1]">
                        Coming Soon
                    </h1>
                    <p className="w-full max-w-[100%] md:max-w-[85%] lg:max-w-[600px] text-center text-[clamp(1rem,2.2vw,18px)] leading-[1.5] md:leading-[1.6] lg:leading-[135%] font-normal font-seasons text-[#FAF4ED]">
                        We look forward to welcoming you as we
                        unveil what has been carefully shaped over
                        time. This occasion marks not only a
                        beginning, but the result of intention,
                        discipline, and the work carried quietly
                        behind the scenes.
                    </p>
                </div>
            </div>
            <ClosingCTA {...aboutContent.cta} />

        </>
    );
}