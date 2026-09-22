"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTAButton from "@/components/shared/CTAButton";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface PhilosophyRevealProps {
    statement: string;
    buttonLabel: string;
    buttonHref: string;
}

export default function PhilosophyReveal({ statement, buttonLabel, buttonHref }: PhilosophyRevealProps) {
    const philosophyRef = useRef<HTMLDivElement>(null);
    const philosophyWordsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const words = philosophyWordsRef.current?.querySelectorAll('.phil-word');
        if (!words || !words.length) return;

        gsap.set(words, { opacity: 0.1 });

        gsap.to(words, {
            opacity: 1,
            stagger: 0.08,
            ease: 'none',
            scrollTrigger: {
                trigger: philosophyRef.current,
                start: 'top 60%',
                end: '+=600',
                scrub: 1,
            },
        });
    }, [statement]);

    return (
        <div ref={philosophyRef} className="w-full bg-[#242424] py-[80px] lg:py-[160px] px-[6%] lg:px-[129px]">
            <div ref={philosophyWordsRef} className="max-w-[1200px] mx-auto">
                <p className="font-midland text-[clamp(24px,4vw,48px)] leading-[1.6] lg:leading-[80px] text-center text-[#FAF4ED]">
                    {statement.split(' ').map((word, i) => (
                        <span key={i} className="phil-word inline-block mr-[8px] lg:mr-[14px]">
                            {word}
                        </span>
                    ))}
                </p>
            </div>

            <div className="flex justify-center mt-[40px] lg:mt-[60px]">
                <Link href={buttonHref}>
                    <CTAButton>{buttonLabel}</CTAButton>
                </Link>
            </div>
        </div>
    );
}
