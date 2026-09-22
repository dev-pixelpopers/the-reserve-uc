"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTAButton from "@/components/shared/CTAButton";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ServicesCTAProps {
    titleTop: string;
    titleBottom: string;
    body: string;
    buttonLabel: string;
    buttonHref: string;
}

export default function ServicesCTA({ titleTop, titleBottom, body, buttonLabel, buttonHref }: ServicesCTAProps) {
    const ctaRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ctaRef.current) return;

        const isMobile = window.innerWidth <= 1024;

        gsap.fromTo(
            ctaRef.current,
            { clipPath: 'inset(100% 0% 0% 0%)' },
            {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1,
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: isMobile ? 'top 95%' : 'top 85%',
                    end: '+=300',
                    scrub: isMobile ? 0.5 : 1,
                },
            }
        );
    }, []);

    return (
        <div
            ref={ctaRef}
            className="cta-services-sec w-full bg-[#0e1111] px-[5%] lg:px-[clamp(60px,6.71vw,129px)] py-[80px] lg:py-[clamp(60px,6.25vw,120px)]"
        >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[clamp(40px,4.167vw,80px)]">
                <div className="w-full lg:w-[clamp(500px,60vw,900px)]">
                    <h2 className="font-iconscript text-[clamp(38px,4.167vw,80px)] leading-[clamp(42px,5.208vw,100px)] capitalize text-[#FAF1E1]">
                        {titleTop}
                    </h2>
                    <h2 className="font-midland text-[clamp(30px,2.854vw,54.81px)] leading-[clamp(60px,5.208vw,100px)] capitalize text-[#FAF1E1]">
                        {titleBottom}
                    </h2>
                </div>

                <div className="flex w-full lg:w-auto flex-col items-start lg:items-end gap-[20px] lg:gap-[30px]">
                    <p className="font-seasons text-[clamp(16px,2vw,22px)] leading-[1.6] lg:leading-[40px] text-left lg:text-right max-w-[500px] text-[#FAF4ED]">
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
