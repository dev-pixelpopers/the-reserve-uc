"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { InclusionsBlock } from "@/types/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function InclusionsGrid({ eyebrow, heading, body, items }: InclusionsBlock) {
    const inclusionsScope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray<HTMLElement>('.inclusion-card');

            gsap.fromTo(
                cards,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.08,
                    scrollTrigger: { trigger: inclusionsScope.current, start: 'top 70%' },
                }
            );
        },
        { scope: inclusionsScope, dependencies: [items] }
    );

    return (
        <div ref={inclusionsScope} className="w-full bg-[#FAEEE1] px-[6.6%] py-[7.4%]">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-[20px] md:mb-[40px] lg:mb-[60px] xl:mb-[80px] gap-[30px] lg:gap-[60px]">
                <div className="max-w-[clamp(300px,36.458vw,700px)]">
                    <span className="font-seasons text-[13px] lg:text-[16px] uppercase tracking-[0.4em] text-[#B09983]">
                        {eyebrow}
                    </span>
                    <h2 className="font-midland text-[clamp(18px,2.34vw,45px)] leading-[clamp(36px,4.167vw,80px)] text-[#242424] capitalize mt-6">
                        {heading}
                    </h2>
                </div>
                <p className="font-seasons text-[12px] lg:text-[20px] leading-[2] lg:leading-[38px] text-[#242424]/70 max-w-[480px]">
                    {body}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] xl:gap-[30px]">
                {items.map((item, i) => (
                    <div
                        key={item.label}
                        className="inclusion-card flex flex-col gap-5 p-[8.2%] bg-white/50 backdrop-blur-sm border border-[#B09983]/30 rounded-[4px]"
                    >
                        <span className="font-midland text-[20px] md:text-[clamp(24px,2.6vw,36px)] leading-[2] lg:leading-[40px] text-[#B09983]">
                            0{i + 1}
                        </span>
                        <h4 className="font-midland text-[clamp(18px,1.3vw,28px)] leading-[2] lg:leading-[38px] text-[#242424] capitalize">
                            {item.label}
                        </h4>
                        <p className="font-seasons text-[12px] lg:text-[17px] leading-[2] lg:leading-[30px] text-[#242424]/70">
                            {item.detail}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
