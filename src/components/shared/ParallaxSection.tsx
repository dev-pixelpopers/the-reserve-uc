"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTAButton from "./CTAButton";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ParallaxSectionProps {
    image: string;
    heading: string;
    body: string;
    buttonLabel: string;
    buttonHref: string;
    external?: boolean;
    heightClass?: string;
}

export default function ParallaxSection({
    image,
    heading,
    body,
    buttonLabel,
    buttonHref,
    external = false,
    heightClass = 'h-[70vh]',
}: ParallaxSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!imageRef.current) return;

        gsap.fromTo(
            imageRef.current,
            { y: 80 },
            {
                y: -80,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <div ref={sectionRef} className={`w-full ${heightClass} relative overflow-hidden`}>
            <div ref={imageRef} className="absolute inset-[-100px]">
                <img loading="lazy" decoding="async" src={image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 text-center px-[5%]">
                <h2 className="font-midland text-[clamp(28px,4vw,45px)] leading-[1.5] lg:leading-[80px] capitalize text-[#FAF1E1]">
                    {heading}
                </h2>
                <p className="font-seasons text-[clamp(16px,2vw,24px)] leading-[1.6] lg:leading-[40px] text-[#FAF4ED]">
                    {body}
                </p>
                <Link
                    href={buttonHref}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                >
                    <CTAButton>{buttonLabel}</CTAButton>
                </Link>
            </div>
        </div>
    );
}
