"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ThemeWorld } from "@/types/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ThemedWorldsProps {
    eyebrow: string;
    heading: string;
    body: string;
    items: ThemeWorld[];
}

export default function ThemedWorlds({ eyebrow, heading, body, items }: ThemedWorldsProps) {
    const themesScope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray<HTMLElement>('.theme-card');

            gsap.fromTo(
                cards,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: 'power3.out',
                    stagger: 0.12,
                    scrollTrigger: { trigger: themesScope.current, start: 'top 70%' },
                }
            );
        },
        { scope: themesScope, dependencies: [items] }
    );

    return (
        <div ref={themesScope} className="w-full bg-[#FAEEE1] py-[8%] lg:py-[140px] px-[6.6%] lg:px-[8.5%]">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-[8%] lg:mb-[80px] gap-[30px] lg:gap-[60px]">
                <div className="max-w-full lg:max-w-[1100px]">
                    <span className="font-seasons text-[12px] lg:text-[16px] uppercase tracking-[0.4em] text-[#B09983]">
                        {eyebrow}
                    </span>
                    <h2 className="font-midland text-[clamp(18px,2.34vw,45px)] leading-[clamp(36px,4.167vw,80px)] text-[#242424] capitalize mt-3 lg:mt-6">
                        {heading}
                    </h2>
                </div>
                <p className="font-seasons text-[16px] lg:text-[20px] leading-[1.8] lg:leading-[38px] text-[#242424]/70 max-w-full lg:max-w-[clamp(280px,25vw,480px)]">
                    {body}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] lg:gap-[40px]">
                {items.map((item) => (
                    <div key={item.name} className="theme-card group relative aspect-[5/4] overflow-hidden rounded-[6px]">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-[24px] lg:p-[40px] flex flex-col gap-3 lg:gap-5">
                            <div className="flex items-center gap-2">
                                {item.palette.map((color) => (
                                    <span
                                        key={color}
                                        className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] rounded-full border-2 border-white/50"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>

                            <h3 className="font-midland text-[20px] md:text-[clamp(28px,2.2vw,44px)] leading-[1.3] md:leading-[1.5] lg:leading-[56px] capitalize text-[#FAF1E1]">
                                {item.name}
                            </h3>

                            <p className="font-seasons text-[14px] md:text-[17px] leading-[1.6] md:leading-[1.8] lg:leading-[30px] max-w-full text-[#FAF4ED]">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
