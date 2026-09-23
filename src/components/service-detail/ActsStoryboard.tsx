"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ActItem } from "@/types/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ActsStoryboardProps {
    acts: ActItem[];
}

export default function ActsStoryboard({ acts }: ActsStoryboardProps) {
    const pinnedScope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const panels = gsap.utils.toArray<HTMLElement>('.wedding-act-panel');
            const images = gsap.utils.toArray<HTMLElement>('.wedding-act-image');
            if (!panels.length) return;

            gsap.set(images.slice(1), { opacity: 0, scale: 1.08 });

            const showImage = (i: number) => {
                gsap.to(images[i], { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' });
                gsap.to(images.slice(0, i).concat(images.slice(i + 1)), {
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power1.out',
                });
            };

            panels.forEach((panel, i) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: () => showImage(i),
                    onEnterBack: () => showImage(i),
                });

                const children = panel.querySelectorAll<HTMLElement>('[data-act-child]');
                gsap.fromTo(
                    children,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: 'power3.out',
                        stagger: 0.1,
                        scrollTrigger: { trigger: panel, start: 'top 75%' },
                    }
                );
            });
        },
        { scope: pinnedScope, dependencies: [acts] }
    );

    return (
        <div ref={pinnedScope} className="relative w-full bg-[#1a1a1a]">
            <div className="flex flex-row">
                <div className="hidden lg:flex w-[55%] h-screen lg:sticky top-0 overflow-hidden">
                    {acts.map((act, i) => (
                        <div
                            key={act.act}
                            className="wedding-act-image absolute inset-0"
                            style={{ opacity: i === 0 ? 1 : 0 }}
                        >
                            <img loading="lazy" decoding="async" src={act.image} alt={act.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a1a]/80" />
                            <div className="absolute bottom-[60px] left-[60px] z-10">
                                <span className="font-midland text-[200px] leading-[180px] text-white/10">
                                    0{i + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full lg:w-[45%] flex flex-col">
                    {acts.map((act) => (
                        <div
                            key={act.act}
                            className="wedding-act-panel lg:min-h-screen flex flex-col justify-center gap-[32px] px-[9%] py-[11%] border-t border-white/5 first:border-t-0"
                        >
                            <div className="block lg:hidden w-full overflow-hidden rounded-[20px] mb-[10px]">
                                <img loading="lazy" decoding="async" src={act.image} alt={act.title} className="w-full h-auto object-cover" />
                            </div>

                            <span
                                data-act-child
                                className="font-seasons text-[10px] md:text-[12px] lg:text-[14px] uppercase tracking-[0.5em] text-cream"
                            >
                                {act.act}
                            </span>

                            <h3
                                data-act-child
                                className="font-midland text-[28px] md:text-[clamp(36px,4vw,72px)] leading-[2] capitalize text-[#FAF1E1]"
                            >
                                {act.title}
                            </h3>

                            <p
                                data-act-child
                                className="font-seasons text-[14px] md:text-[16px] lg:text-[22px] leading-[2] lg:leading-[40px] max-w-[500px] text-[#FAF4ED]"
                            >
                                {act.body}
                            </p>

                            <div data-act-child className="flex flex-col gap-3 mt-4">
                                {act.details.map((detail) => (
                                    <div
                                        key={detail}
                                        className="flex items-center gap-4 font-seasons text-[17px] leading-[30px] text-cream/90"
                                    >
                                        <span className="w-[28px] h-[1px] bg-cream" />
                                        {detail}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
