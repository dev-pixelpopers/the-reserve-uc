"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { SectionHeading, TimelineItem } from "@/types/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface HistoryTimelineProps {
    heading: SectionHeading;
    items: TimelineItem[];
}

export default function HistoryTimeline({ heading, items }: HistoryTimelineProps) {
    const horizontalWrapperRef = useRef<HTMLDivElement>(null);
    const horizontalTrackRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(max-width: 1023px)", () => {
            const track = horizontalTrackRef.current;
            if (!track) return;

            const cards = track.querySelectorAll('.timeline-card');

            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    { opacity: 0.4, y: 60, scale: 0.98 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            end: 'top 55%',
                            scrub: 0.5,
                        },
                    }
                );
            });
        });

        mm.add("(min-width: 1024px)", () => {
            const track = horizontalTrackRef.current;
            const wrapper = horizontalWrapperRef.current;
            if (!track || !wrapper) return;

            const totalScroll = track.scrollWidth - window.innerWidth;

            gsap.to(track, {
                x: -totalScroll,
                ease: 'none',
                scrollTrigger: {
                    trigger: wrapper,
                    start: 'top top',
                    end: () => '+=' + track.scrollWidth,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                },
            });

            const cards = track.querySelectorAll('.timeline-card');

            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    { opacity: 0.3, scale: 0.92 },
                    {
                        opacity: 1,
                        scale: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: 'left 80%',
                            end: 'left 40%',
                            scrub: 1,
                        },
                    }
                );
            });
        });

        return () => mm.revert();
    }, [items]);

    return (
        <div ref={horizontalWrapperRef} className="w-full h-screen overflow-hidden bg-[#0e1111]">
            <div
                ref={horizontalTrackRef}
                className="flex flex-col lg:flex-row items-start lg:items-end h-full gap-[40px] lg:gap-[60px] py-[5%] px-[5%] lg:px-[129px] w-full lg:w-max"
            >
                <div className="flex flex-col justify-center items-start w-full lg:min-w-[500px] h-auto lg:h-full pr-0 lg:pr-[60px]">
                    {heading.eyebrow && (
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[14px] lg:gap-5 mb-4 lg:mb-8">
                            <p className="font-seasons text-[clamp(14px,2vw,26px)] leading-[1.2] font-bold uppercase text-[#FAF4ED]">
                                {heading.eyebrow}
                            </p>
                            <hr className="w-[120px] sm:w-[200px] border-white" />
                        </div>
                    )}

                    <h2 className="font-midland text-[24px] md:text-[clamp(28px,4vw,45px)] leading-[2] lg:leading-[80px] capitalize text-[#FAF1E1]">
                        {heading.titleTop}
                        {heading.titleBottom && (
                            <>
                                <br />
                                {heading.titleBottom}
                            </>
                        )}
                    </h2>
                </div>

                {items.map((item, i) => (
                    <div
                        key={i}
                        className="timeline-card relative flex flex-col w-full lg:min-w-[700px] h-[60vh] sm:h-[65vh] lg:h-[75vh] rounded-[20px] lg:rounded-[30px] overflow-hidden group"
                    >
                        <img loading="lazy" decoding="async"
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 h-full w-full object-cover scale-100 group-hover:scale-105 ease-in-out duration-[1200ms] lg:duration-[1500ms]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        <div className="relative z-10 flex flex-col justify-end h-full p-[25px] lg:p-[50px] gap-3 lg:gap-4">
                            <h3 className="font-midland text-[clamp(22px,3vw,42px)] leading-[1.2] lg:leading-[55px] capitalize text-[#FAF1E1]">
                                {item.title}
                            </h3>

                            <p className="font-seasons text-[clamp(14px,2vw,20px)] leading-[1.6] lg:leading-[35px] max-w-[550px] text-[#FAF4ED]">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="hidden lg:block min-w-[200px]" />
            </div>
        </div>
    );
}
