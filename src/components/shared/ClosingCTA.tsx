"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTAButton from "./CTAButton";
import type { CTAContent } from "@/types/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ClosingCTA({ heading, body, buttonLabel, buttonHref, image }: CTAContent) {
    const closingRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!closingRef.current) return;

        gsap.fromTo(
            closingRef.current,
            { scale: 0.85, opacity: 0, borderRadius: '60px' },
            {
                scale: 1,
                opacity: 1,
                borderRadius: '20px',
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: closingRef.current,
                    start: 'top 85%',
                    end: '+=400',
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <div className="w-full bg-[#0e1111] px-[5%] md:px-[8%] lg:px-[129px] py-[10%] md:py-[12%] lg:py-[120px] cta-coming-soon">
            <div
                ref={closingRef}
                className="w-full flex flex-col items-center gap-[24px] md:gap-[32px] lg:gap-[40px] py-[8%] md:py-[10%] lg:py-[120px] px-[6%] md:px-[8%] lg:px-[100px] rounded-[12px] md:rounded-[16px] lg:rounded-[20px] relative overflow-hidden"
            >
                <img loading="lazy" decoding="async" src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex flex-col items-center gap-[20px] md:gap-[28px] lg:gap-[40px]">
                    <h2 className="font-midland text-[clamp(1.8rem,5.5vw,45px)] leading-[1.5] md:leading-[1.6] lg:leading-[80px] text-center capitalize max-w-[100%] lg:max-w-[1000px] text-[#FAF1E1]">
                        {heading}
                    </h2>
                    <p className="font-seasons text-[clamp(0.95rem,2.5vw,22px)] leading-[1.5] md:leading-[1.6] lg:leading-[40px] text-center max-w-[100%] md:max-w-[90%] lg:max-w-[600px] text-[#FAF4ED]">
                        {body}
                    </p>
                    <Link href={buttonHref}>
                        <CTAButton>{buttonLabel}</CTAButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}
