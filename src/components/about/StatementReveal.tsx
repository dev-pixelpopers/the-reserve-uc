"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface StatementRevealProps {
    statement: string;
}

export default function StatementReveal({ statement }: StatementRevealProps) {
    const wordSectionRef = useRef<HTMLDivElement>(null);
    const wordsContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const words = wordsContainerRef.current?.querySelectorAll<HTMLElement>('.reveal-word');
        if (!words || !words.length) return;

        gsap.set(words, { opacity: 0.12 });

        gsap.to(words, {
            opacity: 1,
            stagger: 0.15,
            ease: 'none',
            scrollTrigger: {
                trigger: wordSectionRef.current,
                start: 'top top',
                end: '+=1500',
                pin: true,
                scrub: 1,
            },
        });
    }, [statement]);

    return (
        <div
            ref={wordSectionRef}
            className="w-full h-screen flex flex-col justify-center items-center bg-[#0e1111] px-[5%] lg:px-[129px]"
        >
            <div ref={wordsContainerRef} className="max-w-[1200px]">
                <p className="font-midland text-[30px]! md:text-[clamp(42px,3.6vw,72px)] leading-[2] lg:leading-[110px] text-center text-[#FAF4ED]">
                    {statement.split(' ').map((word, i) => (
                        <span key={i} className="reveal-word inline-block mr-[10px] lg:mr-[20px]">
                            {word}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
}
