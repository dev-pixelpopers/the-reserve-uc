"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTAButton from "@/components/shared/CTAButton";
import type { PackageTier } from "@/types/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface PackageStackProps {
    packages: PackageTier[];
}

export default function PackageStack({ packages }: PackageStackProps) {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const dotContainerRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const cards = cardsRef.current;

        cards.forEach((card, i) => {
            if (!card || i === cards.length - 1) return;
            const nextCard = cards[i + 1];
            if (!nextCard) return;

            gsap.to(card, {
                scale: 0.85,
                opacity: 0,
                y: 100,
                rotate: 8,
                ease: 'none',
                scrollTrigger: { trigger: nextCard, start: 'top 90%', end: 'top 30%', scrub: 1 },
            });
        });

        dotContainerRefs.current.forEach((container) => {
            if (!container) return;
            const dots = container.querySelectorAll('.cap-dot');

            gsap.fromTo(
                dots,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    stagger: 0.04,
                    duration: 0.3,
                    ease: 'back.out(2)',
                    scrollTrigger: { trigger: container, start: 'top 80%', toggleActions: 'play none none none' },
                }
            );
        });
    }, [packages]);

    return (
        <div className="relative w-full flex flex-col items-center gap-0 bg-[#0e1111] pt-[50px]">
            {packages.map((pkg, index) => (
                <div
                    key={pkg.id}
                    ref={(el) => { cardsRef.current[index] = el; }}
                    className="w-full sticky top-[60px] lg:top-[100px] rounded-tl-[30px] rounded-tr-[30px] px-[6%] lg:px-[129px] py-[50px] lg:py-[80px] transition-all duration-500"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, #F3ECD3 0%, #FFF 100%)',
                        zIndex: index,
                    }}
                >
                    {pkg.featured && pkg.badgeLabel && (
                        <span className="absolute top-[15px] right-[20px] lg:top-[30px] lg:right-[60px] bg-[#242424] text-cream font-seasons text-[12px] lg:text-[14px] uppercase tracking-wider px-4 lg:px-6 py-2 rounded-full">
                            {pkg.badgeLabel}
                        </span>
                    )}

                    <div className="flex flex-col lg:flex-row items-start gap-[40px] lg:gap-[80px]">
                        <div className="w-full lg:w-[40%]">
                            <img
                                src={pkg.image}
                                alt={pkg.name}
                                className="w-full h-[280px] lg:h-[500px] object-cover rounded-[20px]"
                            />
                        </div>

                        <div className="w-full lg:w-[60%] flex flex-col gap-[20px] lg:gap-[30px]">
                            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-6">
                                <h3 className="font-midland text-[clamp(32px,5vw,60px)] leading-[1.2] lg:leading-[70px] text-[#242424] capitalize">
                                    {pkg.name}
                                </h3>
                                <span className="font-seasons text-[16px] lg:text-[18px] leading-[1.6] lg:leading-[40px] text-cream font-bold uppercase">
                                    {pkg.capacity}
                                </span>
                            </div>

                            <p className="font-seasons text-[18px] lg:text-[20px] leading-[30px] text-[#242424]/60 italic">
                                {pkg.tagline}
                            </p>

                            <div
                                ref={(el) => { dotContainerRefs.current[index] = el; }}
                                className="flex flex-row gap-[6px] flex-wrap max-w-[300px]"
                            >
                                {Array.from({ length: pkg.dots }).map((_, d) => (
                                    <span key={d} className="cap-dot w-[10px] h-[10px] rounded-full bg-cream" />
                                ))}
                                <span className="font-seasons text-[13px] text-[#242424]/40 ml-2 self-end">
                                    = {pkg.capacity}
                                </span>
                            </div>

                            <p className="font-seasons text-[clamp(16px,2vw,22px)] leading-[1.7] lg:leading-[38px] text-[#242424]">
                                {pkg.description}
                            </p>

                            <hr className="border-[#DEC7AD]" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] gap-y-[12px]">
                                {pkg.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="font-seasons text-[16px] lg:text-[18px] leading-[1.7] lg:leading-[32px] text-[#242424] flex items-start gap-3"
                                    >
                                        <span className="w-[8px] h-[8px] rounded-full bg-cream inline-block mt-3 shrink-0" />
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-4">
                                <Link href={pkg.buttonHref}>
                                    <CTAButton>{pkg.buttonLabel}</CTAButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
