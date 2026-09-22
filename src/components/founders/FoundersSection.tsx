"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from "@/components/shared/SectionLabel";
import FounderProfile from "./FounderProfile";
import type { FounderProfileContent } from "@/types/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface FoundersSectionProps {
    label: string;
    founders: FounderProfileContent[];
}

const parallaxConfig = [
    { imageRotation: 0, imageEndY: -80, textY: 100, textStart: 'top 60%' },
    { imageRotation: 0, imageStartY: 300, imageEndY: -50, textY: 120, textStart: 'top 50%' },
];

export default function FoundersSection({ label, founders }: FoundersSectionProps) {
    const foundersWrapperRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        if (window.innerWidth <= 768) return;
        if (!foundersWrapperRef.current) return;

        const baseImageY = window.innerWidth <= 1366 ? 100 : 200;
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1025px)", () => {
            founders.forEach((_, i) => {
                const image = imageRefs.current[i];
                if (!image) return;

                const config = parallaxConfig[i] ?? parallaxConfig[0];

                gsap.fromTo(
                    image,
                    { y: config.imageStartY ?? baseImageY, rotation: config.imageRotation },
                    {
                        y: config.imageEndY,
                        rotation: 0,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: foundersWrapperRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1,
                        },
                    }
                );
            });
        });

        mm.add("(max-width: 1024px)", () => {
            imageRefs.current.forEach((image) => {
                if (image) gsap.set(image, { clearProps: 'transform' });
            });
        });

        founders.forEach((_, i) => {
            const text = textRefs.current[i];
            if (!text) return;

            const config = parallaxConfig[i] ?? parallaxConfig[0];

            gsap.fromTo(
                text,
                { y: config.textY, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: foundersWrapperRef.current,
                        start: config.textStart,
                        end: '+=400',
                        scrub: 1,
                    },
                }
            );
        });

        return () => mm.revert();
    }, [founders]);

    return (
        <div
            ref={foundersWrapperRef}
            className="w-full bg-[#0e1111] px-[5%] lg:px-[7%] py-[6%] md:py-[8%] lg:py-[9%] overflow-hidden"
        >
            <div className="flex flex-col md:flex-row items-center w-full lg:w-auto gap-[20px] md:gap-[30px] lg:gap-[40px] mb-[40px] md:mb-[60px] lg:mb-[80px]">
                <SectionLabel
                    label={label}
                    className="flex flex-row items-center gap-5"
                    ruleClassName="w-[200px] lg:w-[450px] text-white"
                    textClassName="font-seasons text-[clamp(14px,1.5vw,26px)] leading-[1.2] font-bold uppercase text-[#FAF4ED]"
                />
            </div>

            {founders.map((founder, i) => (
                <FounderProfile
                    key={founder.name}
                    {...founder}
                    imageRef={(el) => { imageRefs.current[i] = el; }}
                    textRef={(el) => { textRefs.current[i] = el; }}
                />
            ))}
        </div>
    );
}
