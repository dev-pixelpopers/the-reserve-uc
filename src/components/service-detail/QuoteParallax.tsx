"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { QuoteBlock } from "@/types/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface QuoteParallaxProps extends QuoteBlock {
    heightClass?: string;
}

export default function QuoteParallax({
    eyebrow,
    quote,
    attribution,
    image,
    heightClass = 'h-[50vh] lg:h-[90vh]',
}: QuoteParallaxProps) {
    const quoteScope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                '.quote-line',
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    stagger: 0.15,
                    scrollTrigger: { trigger: quoteScope.current, start: 'top 70%' },
                }
            );

            gsap.to('.quote-bg', {
                yPercent: -20,
                ease: 'none',
                scrollTrigger: {
                    trigger: quoteScope.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        },
        { scope: quoteScope, dependencies: [quote] }
    );

    return (
        <div ref={quoteScope} className={`relative w-full ${heightClass} overflow-hidden bg-black`}>
            <div className="quote-bg absolute inset-0 scale-110">
                <img src={image} alt="" className="w-full h-full object-cover opacity-40" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-[6.6%] gap-[40px]">
                <span className="quote-line font-seasons text-[10px] lg:text-[14px] uppercase tracking-[0.5em] text-cream">
                    {eyebrow}
                </span>
                <h2 className="quote-line font-midland text-[20px] md:text-[24px] lg:text-[clamp(28px,3.2vw,45px)] leading-[2] lg:leading-[80px] capitalize max-w-full lg:max-w-[1200px] text-[#FAF1E1]">
                    {quote}
                </h2>
                <p className="quote-line font-seasons text-[14px] lg:text-[18px] leading-[2] lg:leading-[32px] max-w-full lg:max-w-[600px] text-[#FAF4ED]">
                    {attribution}
                </p>
            </div>
        </div>
    );
}
