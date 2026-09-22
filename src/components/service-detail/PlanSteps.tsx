"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { PlanStep } from "@/types/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface PlanStepsProps {
    eyebrow: string;
    heading: string;
    body: string;
    image: string;
    steps: PlanStep[];
    closing: { heading: string; body: string; buttonLabel: string; buttonHref: string };
}

export default function PlanSteps({ eyebrow, heading, body, image, steps, closing }: PlanStepsProps) {
    const planScope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                '.plan-step',
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.15,
                    scrollTrigger: { trigger: planScope.current, start: 'top 70%' },
                }
            );

            gsap.fromTo(
                '.plan-header > *',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: { trigger: planScope.current, start: 'top 80%' },
                }
            );

            gsap.to('.plan-bg', {
                yPercent: -15,
                ease: 'none',
                scrollTrigger: {
                    trigger: planScope.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        },
        { scope: planScope, dependencies: [steps] }
    );

    return (
        <div
            ref={planScope}
            className="relative w-full bg-[#0E0E0E] py-[8%] lg:py-[160px] px-[6.6%] lg:px-[8.5%] overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <img src={image} alt="" className="plan-bg absolute inset-0 w-full h-[130%] object-cover opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E] via-[#0E0E0E]/85 to-[#0E0E0E]" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="plan-header flex flex-col lg:flex-row lg:items-end justify-between gap-[clamp(30px,4.167vw,80px)] mb-[8%] lg:mb-[100px]">
                    <div className="max-w-full lg:max-w-[1100px]">
                        <span className="font-seasons text-[12px] lg:text-[16px] uppercase tracking-[0.4em] text-cream block">
                            {eyebrow}
                        </span>
                        <h2 className="font-midland text-[clamp(18px,2.34vw,45px)] leading-[clamp(36px,4.167vw,80px)] capitalize mt-3 lg:mt-6 text-[#FAF1E1]">
                            {heading}
                        </h2>
                    </div>
                    <p className="font-seasons text-[13px] md:text-[16px] lg:text-[19px] leading-[1.8] lg:leading-[36px] max-w-full lg:max-w-[440px] lg:pb-3 text-[#FAF4ED]">
                        {body}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(24px,2.083vw,40px)] mb-[8%] lg:mb-[80px]">
                    {steps.map((step) => (
                        <div
                            key={step.step}
                            className="plan-step relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-[10px] p-[28px] lg:p-[48px] flex flex-col gap-4 lg:gap-6 hover:border-cream/40 hover:bg-white/[0.06] transition-all duration-500"
                        >
                            <span className="font-midland text-[40px] md:text-[52px] lg:text-[60px] leading-[1] lg:leading-[88px] text-cream/80">
                                {step.step}
                            </span>
                            <div className="w-[36px] lg:w-[48px] h-[1px] bg-cream/50" />
                            <h3 className="font-midland text-[clamp(18px,2.05vw,32px)] leading-[clamp(25px,3.125vw,60px)] capitalize text-[#FAF1E1]">
                                {step.title}
                            </h3>
                            <p className="font-seasons text-[13px] md:text-[14px] lg:text-[16px] leading-[1.6] md:leading-[1.8] lg:leading-[30px] text-[#FAF4ED]">
                                {step.body}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="plan-step flex flex-col lg:flex-row lg:items-center justify-between gap-[clamp(24px,3.125vw,60px)] border-t border-white/10 pt-[24px] lg:pt-[60px]">
                    <div className="max-w-full lg:max-w-[clamp(600px,57.29vw,1100px)]">
                        <h3 className="font-midland text-[clamp(20px,2.34vw,40px)] leading-[clamp(30px,4.167vw,70px)] capitalize text-[#FAF1E1]">
                            {closing.heading}
                        </h3>
                        <p className="font-seasons text-[13px] md:text-[15px] lg:text-[17px] leading-[1.6] md:leading-[1.8] lg:leading-[32px] mt-2 lg:mt-4 text-[#FAF4ED]">
                            {closing.body}
                        </p>
                    </div>

                    <Link
                        href={closing.buttonHref}
                        className="group inline-flex items-center gap-3 lg:gap-5 bg-cream hover:bg-white text-[#1a1a1a] px-[32px] lg:px-[48px] py-[16px] lg:py-[24px] rounded-full font-seasons text-[12px] lg:text-[14px] uppercase tracking-[0.35em] transition-all duration-500 flex-shrink-0"
                    >
                        {closing.buttonLabel}
                        <span className="w-[24px] lg:w-[36px] h-[1px] bg-current transition-all duration-500 group-hover:w-[40px] lg:group-hover:w-[60px]" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
