"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { CapabilityItem } from "@/types/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface CapabilityScrollerProps {
    eyebrow: string;
    heading: string;
    scrollCue: string;
    items: CapabilityItem[];
}

export default function CapabilityScroller({ eyebrow, heading, scrollCue, items }: CapabilityScrollerProps) {
    const horizontalScope = useRef<HTMLDivElement>(null);
    const horizontalTrack = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const track = horizontalTrack.current;
            const container = horizontalScope.current;
            if (!track || !container) return;

            const scrollDistance = () => track.scrollWidth - window.innerWidth;

            const tween = gsap.to(track, {
                x: () => -scrollDistance(),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: () => '+=' + scrollDistance(),
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                },
            });

            return () => {
                tween.scrollTrigger?.kill();
                tween.kill();
            };
        },
        { scope: horizontalScope, dependencies: [items] }
    );

    return (
        <div
            ref={horizontalScope}
            className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-[#1a1a1a] flex flex-col"
        >
            <div className="pt-[8%] lg:pt-[clamp(30px,3.125vw,60px)] px-[6.6%] z-20 flex-shrink-0">
                <span className="font-seasons text-[12px] lg:text-[16px] uppercase tracking-[0.4em] text-cream">
                    {eyebrow}
                </span>
                <h2 className="font-midland text-[clamp(18px,3.6vw,45px)] leading-[2] lg:leading-[80px] capitalize mt-3 lg:mt-4 max-w-[1100px] text-[#FAF1E1]">
                    {heading}
                </h2>
            </div>

            <div className="hidden md:flex absolute bottom-[1%] left-[6.6%] z-20 items-center gap-3 lg:gap-4">
                <span className="font-seasons text-[12px] lg:text-[14px] uppercase tracking-[0.4em] text-white/40">
                    {scrollCue}
                </span>
                <div className="w-[40px] lg:w-[60px] h-[1px] bg-white/40" />
            </div>

            <div
                ref={horizontalTrack}
                className="flex flex-row flex-1 items-center pl-[6.6%] pr-[20%] md:pr-[15%] lg:pr-[200px] py-[8%] lg:py-0 gap-[20px] lg:gap-[40px]"
                style={{ width: 'max-content' }}
            >
                {items.map((item, i) => (
                    <div
                        key={item.title}
                        className="w-[280px] md:w-[420px] lg:w-[520px] h-[clamp(380px,28vw,620px)] flex-shrink-0 relative rounded-[6px] overflow-hidden group"
                    >
                        <img loading="lazy" decoding="async" src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

                        <div className="relative z-10 h-full flex flex-col justify-between p-[24px] md:p-[32px] lg:p-[40px]">
                            <div className="flex items-center gap-2 lg:gap-3">
                                <span className="font-midland text-[20px] md:text-[24px] lg:text-[28px] text-cream">
                                    0{i + 1}
                                </span>
                                <span className="font-seasons text-[10px] md:text-[12px] lg:text-[13px] uppercase tracking-[0.4em] text-cream">
                                    {item.tag}
                                </span>
                            </div>

                            <div className="flex flex-col gap-3 lg:gap-5">
                                <h3 className="font-midland text-[clamp(18px,1.3vw,28px)] leading-[1.4] capitalize text-[#FAF1E1]">
                                    {item.title}
                                </h3>
                                <p className="font-seasons text-[clamp(12px,1.171vw,17px)] leading-[clamp(18px,1.5625vw,30px)] text-[#FAF4ED]">
                                    {item.body}
                                </p>
                                <ul className="flex flex-col gap-1 md:gap-2 mt-1 md:mt-2">
                                    {item.specs.map((spec) => (
                                        <li
                                            key={spec}
                                            className="font-seasons text-[11px] md:text-[13px] lg:text-[14px] leading-[1.4] md:leading-[1.6] lg:leading-[26px] text-white/70 flex items-center gap-2 lg:gap-3"
                                        >
                                            <span className="w-[12px] md:w-[16px] lg:w-[20px] h-[1px] bg-cream flex-shrink-0" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
