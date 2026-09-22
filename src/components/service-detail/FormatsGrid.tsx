"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { FormatItem } from "@/types/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface FormatsGridProps {
    eyebrow: string;
    heading: string;
    body: string;
    items: FormatItem[];
}

export default function FormatsGrid({ eyebrow, heading, body, items }: FormatsGridProps) {
    const formatsScope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray<HTMLElement>('.corp-format-card');

            gsap.fromTo(
                cards,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.08,
                    scrollTrigger: { trigger: formatsScope.current, start: 'top 70%' },
                }
            );
        },
        { scope: formatsScope, dependencies: [items] }
    );

    return (
        <div ref={formatsScope} className="w-full bg-[#FAEEE1] py-[8%] lg:py-[140px] px-[6.6%] lg:px-[8.5%]">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-[8%] lg:mb-[80px] gap-[30px] lg:gap-[60px]">
                <div className="max-w-full lg:max-w-[1100px]">
                    <span className="font-seasons text-[12px] lg:text-[16px] uppercase tracking-[0.4em] text-[#B09983]">
                        {eyebrow}
                    </span>
                    <h2 className="font-midland text-[clamp(18px,2.34vw,45px)] leading-[clamp(36px,4.167vw,80px)] text-[#242424] capitalize mt-3 lg:mt-6">
                        {heading}
                    </h2>
                </div>
                <p className="font-seasons text-[clamp(13px,1.758vw,20px)] leading-[clamp(23px,1.979vw,38px)] text-[#242424]/70 max-w-full lg:max-w-[clamp(280px,25vw,480px)]">
                    {body}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[30px]">
                {items.map((item, i) => (
                    <div
                        key={item.title}
                        className="corp-format-card relative overflow-hidden p-[24px] lg:p-[40px] bg-white border border-[#B09983]/30 rounded-[4px] group cursor-default"
                    >
                        <span className="absolute top-[16px] md:top-[20px] right-[3%] font-midland text-[clamp(25px,3.33vw,64px)] leading-[1] text-[#B09983]/30 group-hover:text-[#B09983] transition-colors">
                            0{i + 1}
                        </span>

                        <div className="flex flex-col gap-3 lg:gap-5">
                            <h4 className="font-midland text-[clamp(16px,1.4583vw,28px)] leading-[clamp(22px,2.5vw,42px)] text-[#242424] capitalize max-w-[60%]">
                                {item.title}
                            </h4>
                            <span className="font-seasons text-[11px] md:text-[12px] lg:text-[13px] uppercase tracking-[0.4em] text-[#B09983]">
                                {item.capacity}
                            </span>
                            <p className="font-seasons text-[13px] md:text-[15px] lg:text-[17px] leading-[1.6] md:leading-[1.8] lg:leading-[30px] text-[#242424]/70">
                                {item.accent}
                            </p>
                        </div>

                        <div className="mt-[24px] lg:mt-[40px] h-[1px] w-0 bg-[#B09983] group-hover:w-full transition-all duration-500" />
                    </div>
                ))}
            </div>
        </div>
    );
}
