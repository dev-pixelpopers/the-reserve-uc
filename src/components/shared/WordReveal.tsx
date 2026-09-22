"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface WordRevealProps {
    text: string;
    eyebrow?: string;
    subText?: string;
    className?: string;
    statementClassName?: string;
    heightClass?: string;
    bgClassName?: string;
    textColorClassName?: string;
    accentColor?: string;
    wordClassName?: string;
}

export default function WordReveal({
    text,
    eyebrow,
    subText,
    className = '',
    statementClassName = 'font-midland text-[30px] md:text-[clamp(42px,3.6vw,72px)] leading-[2] lg:leading-[110px] text-center',
    heightClass = 'h-screen',
    bgClassName = 'bg-[#0e1111]',
    textColorClassName = 'text-[#FAF4ED]',
    accentColor = '#FAF4ED',
    wordClassName = 'reveal-word inline-block mr-[10px] lg:mr-[20px]',
}: WordRevealProps) {
    const scopeRef = useRef<HTMLDivElement>(null);
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
                trigger: scopeRef.current,
                start: 'top top',
                end: '+=1500',
                pin: true,
                scrub: 1,
            },
        });
    }, [text]);

    return (
        <div
            ref={scopeRef}
            className={`w-full ${heightClass} flex flex-col justify-center items-center ${bgClassName} px-[5%] lg:px-[129px] ${className}`}
        >
            <div ref={wordsContainerRef} className="max-w-[1200px] flex flex-col items-center gap-8">
                {eyebrow && (
                    <p
                        className="font-seasons text-[clamp(14px,2vw,26px)] leading-[1.2] font-bold uppercase tracking-[0.3em]"
                        style={{ color: accentColor }}
                    >
                        {eyebrow}
                    </p>
                )}

                <p className={`${statementClassName} ${textColorClassName}`}>
                    {text.split(' ').map((word, i) => (
                        <span key={i} className={wordClassName}>
                            {word}
                        </span>
                    ))}
                </p>

                {subText && (
                    <p className={`font-seasons text-[clamp(16px,2vw,22px)] leading-[1.6] lg:leading-[40px] text-center max-w-[800px] opacity-80 ${textColorClassName}`}>
                        {subText}
                    </p>
                )}
            </div>
        </div>
    );
}
