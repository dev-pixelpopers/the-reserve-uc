"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { TestimonialBlock } from "@/types/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Testimonial({ quote, name, detail }: TestimonialBlock) {
    const testimonialScope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                '.testimonial-wrap',
                { clipPath: 'inset(100% 0% 0% 0%)' },
                {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: testimonialScope.current, start: 'top 70%' },
                }
            );
        },
        { scope: testimonialScope, dependencies: [quote] }
    );

    return (
        <div ref={testimonialScope} className="w-full bg-[#242424] py-[10%] lg:py-[140px] px-[6.6%] lg:px-[8.5%]">
            <div className="testimonial-wrap max-w-[1100px] mx-auto flex flex-col items-center text-center gap-6 lg:gap-10">
                <span className="font-midland text-[60px] md:text-[90px] lg:text-[clamp(80px,10vw,120px)] leading-[0.7] lg:leading-[80px] text-cream/40">
                    &quot;
                </span>
                <p className="font-midland text-[16px] md:text-[24px] lg:text-[clamp(28px,2.2vw,40px)] leading-[1.6] lg:leading-[64px] italic max-w-full lg:max-w-[900px] text-[#FAF4ED]">
                    {quote}
                </p>
                <div className="flex flex-col items-center gap-2 lg:gap-3 mt-2 lg:mt-4">
                    <span className="font-seasons text-[14px] md:text-[16px] lg:text-[18px] text-cream uppercase tracking-[0.35em]">
                        {name}
                    </span>
                    <span className="font-seasons text-[11px] lg:text-[13px] text-white/50 uppercase tracking-[0.4em]">
                        {detail}
                    </span>
                </div>
            </div>
        </div>
    );
}
