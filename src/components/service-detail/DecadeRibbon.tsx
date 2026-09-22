"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { RibbonItem } from "@/types/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface DecadeRibbonProps {
    eyebrow: string;
    heading: string;
    items: RibbonItem[];
}

export default function DecadeRibbon({ eyebrow, heading, items }: DecadeRibbonProps) {
    const ribbonScope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                '.milestone-ribbon-item',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: ribbonScope.current, start: 'top 80%' },
                }
            );
        },
        { scope: ribbonScope, dependencies: [items] }
    );

    return (
        <div ref={ribbonScope} className="w-full bg-[#FAEEE1] py-[8%] lg:py-[120px] px-[6.6%] lg:px-[8.5%]">
            <div className="text-center mb-[8%] lg:mb-[80px]">
                <span className="font-seasons text-[12px] lg:text-[16px] uppercase tracking-[0.4em] text-[#B09983]">
                    {eyebrow}
                </span>
                <h2 className="font-midland text-[clamp(18px,2.34vw,45px)] leading-[clamp(36px,4.167vw,80px)] text-[#242424] capitalize mt-3 lg:mt-6 max-w-[clamp(300px,57.3vw,1100px)] mx-auto">
                    {heading}
                </h2>
            </div>

            <div className="flex flex-row justify-between items-end gap-[8px] lg:gap-[20px] border-b border-[#B09983]/30 pb-[2.5%] relative overflow-x-auto">
                <div className="absolute left-0 right-0 top-[50%] h-[1px] bg-[#B09983]/30" />
                {items.map((item) => (
                    <div
                        key={item.age}
                        className="milestone-ribbon-item flex flex-col items-center gap-2 lg:gap-4 relative z-10 flex-shrink-0"
                    >
                        <span className="font-midland text-[clamp(20px,3.333vw,64px)] leading-[2] text-[#242424]">
                            {item.age}
                        </span>
                        <span className="w-[8px] h-[8px] lg:w-[12px] lg:h-[12px] rounded-full bg-[#B09983] border-2 lg:border-4 border-[#FAEEE1]" />
                        <span className="font-seasons text-[clamp(10px,0.625vw,12px)] uppercase tracking-[0.3em] text-[#B09983] text-center">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
