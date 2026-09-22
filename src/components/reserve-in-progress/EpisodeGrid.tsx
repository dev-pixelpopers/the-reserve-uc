"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EpisodeCard from "./EpisodeCard";
import type { EpisodeItem, SectionHeading } from "@/types/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface EpisodeGridProps {
    heading: SectionHeading;
    episodes: EpisodeItem[];
}

export default function EpisodeGrid({ heading, episodes }: EpisodeGridProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray<HTMLElement>('.episode-card');

            cards.forEach((card) => {
                const media = card.querySelector('.episode-media');
                const content = card.querySelector('.episode-content');

                gsap.fromTo(
                    media,
                    { y: 80, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.4,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: card, start: 'top 80%' },
                    }
                );

                gsap.fromTo(
                    content,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: card, start: 'top 80%' },
                    }
                );
            });

            gsap.to(headingRef.current, {
                clipPath: 'inset(0% 0% 0% 0%)',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 80%',
                    end: '+=400',
                    scrub: 1,
                },
            });
        },
        { scope: sectionRef, dependencies: [episodes] }
    );

    return (
        <section
            ref={sectionRef}
            className="reserve-making-sec relative z-[100] flex w-full flex-col items-center justify-center overflow-hidden px-[5%] py-[10%]"
        >
            <div className="mx-auto max-w-[1800px] px-[6%]">
                <div
                    ref={headingRef}
                    className="mb-[40px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px] 2xl:mb-[120px]"
                    style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                >
                    <span className="text-[clamp(2.5rem,5.208vw,6.25rem)] font-iconscript font-normal leading-[2] text-center pt-1 text-[#B09983]">
                        {heading.titleTop}
                    </span>
                    {heading.titleBottom && (
                        <h2 className="font-midland text-[20px] sm:text-[30px] md:text-[clamp(40px,6vw,80px)] leading-[2]">
                            {heading.titleBottom}
                        </h2>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[40px] gap-y-[80px]">
                    {episodes.map((episode) => (
                        <EpisodeCard key={episode.number} episode={episode} />
                    ))}
                </div>
            </div>
        </section>
    );
}
