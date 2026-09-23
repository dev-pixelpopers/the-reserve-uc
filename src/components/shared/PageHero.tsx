"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Breadcrumb from "./Breadcrumb";
import SectionLabel from "./SectionLabel";
import type { PageHeroContent } from "@/types/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface PageHeroProps extends PageHeroContent {
    parallax?: boolean;
    imageClassName?: string;
    contentClassName?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    overlayClassName?: string;
    ruleClassName?: string;
}

export default function PageHero({
    eyebrow,
    title,
    subtitle,
    lead,
    image,
    imageAlt,
    breadcrumbs,
    parallax = false,
    imageClassName = 'w-full h-full object-cover',
    contentClassName = '',
    titleClassName = 'font-midland text-[25px] md:text-[clamp(30px,3.8vw,60px)] leading-[2] lg:leading-[100px] capitalize text-[#FAF1E1]',
    subtitleClassName = 'font-midland text-[clamp(28px,3.8vw,60px)] leading-[1.4] lg:leading-[80px] capitalize text-[#FAF1E1]',
    overlayClassName = 'absolute inset-0 bg-gradient-to-t from-[#202020] via-[#202020]/70 to-transparent',
    ruleClassName = 'w-[90px] md:w-[300px] lg:w-[450px] text-white',
}: PageHeroProps) {
    const heroImageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!parallax || !heroImageRef.current) return;

        gsap.fromTo(
            heroImageRef.current,
            { y: 0 },
            {
                y: -120,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroImageRef.current.parentElement,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            }
        );
    }, [parallax]);

    return (
        <div className="relative w-full h-screen flex flex-col justify-end items-start pb-[5.1%] md:pb-[2.1%] bg-[#0e1111] overflow-hidden">
            {/* <div ref={heroImageRef} className={`absolute inset-0 overflow-hidden ${parallax ? 'scale-110' : ''}`}>
                <img decoding="async" src={image} alt={imageAlt} className={imageClassName} />
                <div className={overlayClassName} />
            </div> */}

            <div className={`relative z-10 w-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-25 gap-[20px] lg:gap-[50px] ${contentClassName}`}>
                <Breadcrumb items={breadcrumbs} />
                <div className="relative z-10 w-full flex flex-col justify-center items-start gap-4">
                    <SectionLabel label={eyebrow} ruleClassName={ruleClassName} />
                    <h1 className={titleClassName}>{title}</h1>
                    {subtitle && <h2 className={subtitleClassName}>{subtitle}</h2>}
                    {lead && (
                        <p className="max-w-[clamp(300px,36.458vw,700px)] font-seasons text-[clamp(16px,2vw,26px)] leading-[1.6] lg:leading-[45px] text-[#FAF4ED]">
                            {lead}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
