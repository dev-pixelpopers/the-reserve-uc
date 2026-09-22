"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import SectionLabel from "@/components/shared/SectionLabel";
import type { VenueImage } from "@/types/content";

gsap.registerPlugin(useGSAP);

interface MosaicHeroProps {
    eyebrow: string;
    title: string;
    images: VenueImage[];
}

const mosaicSizes = ['w-full lg:w-[35%] h-[90%]', 'w-full lg:w-[35%] h-full', 'w-full lg:w-[30%] h-[75%]'];

const mosaicEntry = [
    { from: { y: 100, opacity: 0, rotate: -3 }, delay: 0.2 },
    { from: { y: 150, opacity: 0 }, delay: 0.4 },
    { from: { y: 120, opacity: 0, rotate: 3 }, delay: 0.6 },
];

export default function MosaicHero({ eyebrow, title, images }: MosaicHeroProps) {
    const mosaicRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        mosaicRefs.current.forEach((el, i) => {
            if (!el) return;
            const entry = mosaicEntry[i] ?? mosaicEntry[0];
            gsap.fromTo(
                el,
                entry.from,
                { y: 0, opacity: 1, rotate: 0, duration: 1.5, ease: 'power3.out', delay: entry.delay }
            );
        });
    }, [images]);

    return (
        <div className="w-full bg-[#0e1111] pt-[200px] pb-[100px] px-4 lg:px-[100px] overflow-hidden">
            <div className="flex flex-col gap-[60px]">
                <div className="flex flex-col gap-4">
                    <SectionLabel
                        label={eyebrow}
                        className="flex flex-col lg:flex-row items-center gap-5"
                        ruleClassName="w-[200px] md:w-[300px] lg:w-[450px] text-white"
                        textClassName="font-seasons text-[18px] lg:text-[26px] leading-[20px] font-bold uppercase text-[#FAF4ED]"
                    />
                    <h1 className="text-[25px] md:text-[clamp(30px,3.8vw,60px)] leading-[50px] font-midland lg:text-[60px] text-center lg:leading-[140px] capitalize text-[#FAF1E1]">
                        {title}
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-[30px] items-end h-[600px]">
                    {images.map((image, i) => (
                        <div
                            key={image.src}
                            ref={(el) => { mosaicRefs.current[i] = el; }}
                            className={`${mosaicSizes[i] ?? mosaicSizes[0]} rounded-[20px] overflow-hidden`}
                        >
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
