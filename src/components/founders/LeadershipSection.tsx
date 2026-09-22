"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { LeadershipContent } from "@/types/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function LeadershipSection({ heading, image, imageAlt, paragraphs }: LeadershipContent) {
    const leadershipRef = useRef<HTMLDivElement>(null);
    const leadImageRef = useRef<HTMLImageElement>(null);
    const leadershipHeadingRef = useRef<HTMLHeadingElement>(null);
    const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    useGSAP(() => {
        if (window.innerWidth <= 768) return;
        if (!leadershipRef.current) return;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 1025px)", () => {
            gsap.fromTo(
                leadImageRef.current,
                { y: 150, rotation: -3 },
                {
                    y: 0,
                    rotation: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: leadershipRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                }
            );
        });

        mm.add("(max-width: 1024px)", () => {
            gsap.set(leadImageRef.current, { clearProps: 'transform' });
        });

        gsap.fromTo(
            leadershipHeadingRef.current,
            { clipPath: 'inset(0 100% 0 0)', y: 40, opacity: 0 },
            {
                clipPath: 'inset(0 0% 0 0)',
                y: 0,
                opacity: 1,
                duration: 1.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: leadershipRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none reset',
                },
            }
        );

        gsap.fromTo(
            paragraphRefs.current.filter(Boolean),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.85,
                ease: 'power2.out',
                stagger: 0.18,
                scrollTrigger: {
                    trigger: leadershipRef.current,
                    start: 'top 65%',
                    toggleActions: 'play none none reset',
                },
            }
        );

        return () => mm.revert();
    }, [paragraphs]);

    return (
        <div
            ref={leadershipRef}
            className="leadership-sec w-full flex flex-col xl:flex-row items-start gap-[clamp(20px,2.083vw,40px)] relative bg-[#0e1111] py-[8%] md:py-[10%] lg:py-[120px] px-[5%] lg:px-[129px]"
        >
            <div className="w-full lg:w-[35%]">
                <img
                    ref={leadImageRef}
                    src={image}
                    alt={imageAlt}
                    className="w-full h-[420px] sm:h-[520px] lg:h-[700px] object-contain object-top"
                />
            </div>

            <div className="w-full lg:w-[65%] flex flex-col gap-4 md:gap-5 lg:gap-8">
                <h2
                    ref={leadershipHeadingRef}
                    className="font-midland text-[clamp(34px,5vw,54.81px)] leading-[2] lg:leading-[100px] capitalize text-[#FAF1E1]"
                >
                    {heading}
                </h2>

                {paragraphs.map((paragraph, i) => (
                    <p
                        key={i}
                        ref={(el) => { paragraphRefs.current[i] = el; }}
                        className="font-seasons text-[clamp(16px,2vw,22px)] leading-[1.8] lg:leading-[40px] text-[#FAF4ED]"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
