"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { InclusionItem } from "@/types/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface MilestoneInclusionsProps {
    eyebrow: string;
    heading: string;
    body: string;
    badgeLabel: string;
    footnote: string;
    items: InclusionItem[];
}

export default function MilestoneInclusions({
    eyebrow,
    heading,
    body,
    badgeLabel,
    footnote,
    items,
}: MilestoneInclusionsProps) {
    const inclusionsScope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray<HTMLElement>('.inclusion-card');

            gsap.fromTo(
                cards,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: { trigger: inclusionsScope.current, start: 'top 75%' },
                }
            );

            gsap.fromTo(
                '.inclusion-header > *',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: { trigger: inclusionsScope.current, start: 'top 80%' },
                }
            );
        },
        { scope: inclusionsScope, dependencies: [items] }
    );

    return (
        <div ref={inclusionsScope} className="w-full bg-[#FAEEE1] py-[8%] lg:py-[140px] px-[6.6%] lg:px-[8.5%]">
            <div className="inclusion-header flex flex-col lg:flex-row lg:items-end justify-between gap-[clamp(30px,4.167vw,80px)] mb-[8%] lg:mb-[80px]">
                <div className="max-w-full lg:max-w-[1100px]">
                    <span className="font-seasons text-[12px] lg:text-[16px] uppercase tracking-[0.4em] text-[#B09983] block">
                        {eyebrow}
                    </span>
                    <h2 className="font-midland text-[clamp(18px,2.34vw,45px)] leading-[clamp(36px,4.167vw,80px)] text-[#242424] capitalize mt-3 lg:mt-6">
                        {heading}
                    </h2>
                </div>
                <p className="font-seasons text-[16px] lg:text-[18px] leading-[1.8] lg:leading-[34px] text-[#242424]/70 max-w-full lg:max-w-[420px] lg:pb-3">
                    {body}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[28px]">
                {items.map((item, i) => (
                    <div
                        key={item.label}
                        className="inclusion-card group relative bg-white/60 border border-[#B09983]/25 rounded-[10px] p-[24px] lg:p-[36px] flex flex-col gap-3 lg:gap-5 hover:bg-white hover:border-[#B09983]/60 hover:shadow-[0_12px_40px_rgba(176,153,131,0.18)] transition-all duration-500"
                    >
                        <div className="flex items-baseline justify-between">
                            <span className="font-midland text-[28px] md:text-[32px] lg:text-[40px] leading-[1] lg:leading-[40px] text-[#B09983]">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="font-seasons text-[10px] lg:text-[11px] uppercase tracking-[0.35em] text-[#B09983] group-hover:tracking-[0.45em] transition-all duration-500">
                                {badgeLabel}
                            </span>
                        </div>

                        <h3 className="font-midland text-[clamp(16px,1.4583vw,28px)] leading-[clamp(22px,2.5vw,42px)] text-[#242424] capitalize">
                            {item.label}
                        </h3>

                        <p className="font-seasons text-[15px] leading-[1.6] lg:leading-[28px] text-[#242424]/70">
                            {item.detail}
                        </p>

                        <span className="mt-auto pt-3 lg:pt-4 border-t border-[#B09983]/20 font-seasons text-[12px] uppercase tracking-[0.3em] text-[#B09983]/70 flex items-center gap-2 lg:gap-3">
                            <span className="w-[20px] lg:w-[28px] h-[1px] bg-current transition-all duration-500 group-hover:w-[40px] lg:group-hover:w-[56px]" />
                            {footnote}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
