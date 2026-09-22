"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ForewordBlock } from "@/types/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ChefForeword({
    eyebrow,
    heading,
    body,
    image,
    imageAlt,
    role,
    name,
    signature,
}: ForewordBlock) {
    const forewordScope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                '.foreword-portrait',
                { y: 120 },
                {
                    y: -80,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: forewordScope.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                }
            );

            gsap.fromTo(
                '.foreword-line',
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.15,
                    scrollTrigger: { trigger: forewordScope.current, start: 'top 75%' },
                }
            );

            gsap.fromTo(
                '.foreword-signature',
                { clipPath: 'inset(0% 100% 0% 0%)' },
                {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    duration: 1.4,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: forewordScope.current, start: 'top 55%' },
                }
            );
        },
        { scope: forewordScope, dependencies: [heading] }
    );

    return (
        <div
            ref={forewordScope}
            className="relative w-full bg-[#FAEEE1] py-[10%] lg:py-[clamp(80px,8.333vw,160px)] px-[6.6%] lg:px-[8.5%] overflow-hidden"
        >
            <div className="flex flex-col lg:flex-row gap-[clamp(40px,4.167vw,80px)] items-start max-w-[1400px] mx-auto">
                <div className="w-full lg:w-[30%] relative aspect-[4/5] overflow-hidden rounded-[6px]">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="foreword-portrait absolute inset-0 w-full h-[120%] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/55 to-transparent" />
                    <div className="absolute bottom-[30px] left-[30px] z-10">
                        <span className="font-seasons text-[11px] lg:text-[13px] uppercase tracking-[0.35em] text-cream block mb-2">
                            {role}
                        </span>
                        <span className="font-midland text-[20px] md:text-[24px] lg:text-[32px] leading-[2] lg:leading-[42px] text-white">
                            {name}
                        </span>
                    </div>
                </div>

                <div className="w-full lg:w-[70%] flex flex-col gap-5 lg:gap-9 pt-0 lg:pt-[60px]">
                    <span className="foreword-line font-seasons text-[11px] lg:text-[15px] uppercase tracking-[0.45em] text-[#B09983]">
                        {eyebrow}
                    </span>
                    <h2 className="foreword-line font-midland text-[clamp(20px,3.125vw,60px)] leading-[clamp(40px,4.79vw,92px)] text-[#242424] capitalize max-w-full">
                        {heading}
                    </h2>
                    <p className="foreword-line font-seasons text-[13px] md:text-[16px] lg:text-[20px] leading-[1.8] lg:leading-[40px] text-[#242424]/80 max-w-full lg:max-w-[640px]">
                        {body}
                    </p>
                    <div className="foreword-signature h-[1px] bg-[#B09983] w-[150px] lg:w-[220px]" />
                    <img
                        src={signature}
                        alt=""
                        className="foreword-line w-[130px] lg:w-[180px] h-auto opacity-80"
                    />
                </div>
            </div>
        </div>
    );
}
