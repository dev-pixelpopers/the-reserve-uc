"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface CategoryTickerProps {
    categories: string[];
    durationSeconds?: number;
}

export default function CategoryTicker({ categories, durationSeconds = 35 }: CategoryTickerProps) {
    const categoryTickerRef = useRef<HTMLDivElement>(null);
    const line = categories.map((category) => `${category} · `).join('');

    useGSAP(() => {
        gsap.to(categoryTickerRef.current, {
            xPercent: -50,
            duration: durationSeconds,
            ease: 'none',
            repeat: -1,
        });
    }, [line, durationSeconds]);

    return (
        <div className="w-full bg-[#242424] py-[35px] overflow-hidden border-y border-white/10">
            <div
                ref={categoryTickerRef}
                className="flex flex-row whitespace-nowrap"
                style={{ width: 'max-content' }}
            >
                {[0, 1].map((copy) => (
                    <span
                        key={copy}
                        className="font-seasons text-[24px] leading-[30px] text-white/25 uppercase tracking-[0.3em]"
                    >
                        {line}
                    </span>
                ))}
            </div>
        </div>
    );
}
