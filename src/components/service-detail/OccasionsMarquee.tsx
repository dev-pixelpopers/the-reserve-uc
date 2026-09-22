"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface OccasionsMarqueeProps {
    eyebrow: string;
    heading: string;
    footnote: string;
    items: string[];
    durationSeconds?: number;
}

export default function OccasionsMarquee({
    eyebrow,
    heading,
    footnote,
    items,
    durationSeconds = 45,
}: OccasionsMarqueeProps) {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            duration: durationSeconds,
            ease: 'none',
            repeat: -1,
        });
    }, [items, durationSeconds]);

    return (
        <div className="w-full bg-[#FAEEE1] py-[8%] lg:py-[120px] overflow-hidden border-y border-[#B09983]/20">
            <div className="px-[6.6%] mb-[8%] lg:mb-[60px] max-w-[1500px] mx-auto text-center">
                <span className="font-seasons text-[11px] lg:text-[15px] uppercase tracking-[0.45em] text-[#B09983]">
                    {eyebrow}
                </span>
                <h2 className="font-midland text-[clamp(18px,2.34vw,45px)] leading-[clamp(36px,4.167vw,80px)] text-[#242424] capitalize mt-3 lg:mt-6 max-w-[900px] mx-auto">
                    {heading}
                </h2>
            </div>

            <div
                ref={marqueeRef}
                className="flex flex-row whitespace-nowrap gap-[20px] lg:gap-[40px]"
                style={{ width: 'max-content' }}
            >
                {[0, 1].map((copy) => (
                    <div key={copy} className="flex flex-row gap-[20px] lg:gap-[40px]">
                        {items.map((item) => (
                            <span
                                key={item + copy}
                                className="inline-flex items-center gap-3 lg:gap-5 font-midland text-[18px] md:text-[28px] lg:text-[clamp(32px,3.2vw,48px)] leading-[1.2] lg:leading-[60px] text-[#242424]/80 pr-[20px] lg:pr-[40px]"
                            >
                                {item}
                                <span className="w-[5px] h-[5px] lg:w-[8px] lg:h-[8px] rounded-full bg-[#B09983] flex-shrink-0" />
                            </span>
                        ))}
                    </div>
                ))}
            </div>

            <p className="text-center font-seasons text-[12px] md:text-[15px] lg:text-[18px] leading-[1.6] lg:leading-[32px] text-[#242424]/60 max-w-[90%] lg:max-w-[600px] mx-auto mt-[6%] lg:mt-[60px] px-4">
                {footnote}
            </p>
        </div>
    );
}
