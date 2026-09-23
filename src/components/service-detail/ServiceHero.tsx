"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Breadcrumb from "@/components/shared/Breadcrumb";
import type { BreadcrumbItem } from "@/types/content";
import type { ServiceMeta } from "@/data/services/meta";

gsap.registerPlugin(useGSAP);

interface ServiceHeroProps {
    meta: ServiceMeta;
    subtitle?: string;
    breadcrumbItem: BreadcrumbItem;
    scrollCueLabel?: string;
}

export default function ServiceHero({
    meta,
    subtitle,
    breadcrumbItem,
    scrollCueLabel = 'Scroll to Explore',
}: ServiceHeroProps) {
    const scope = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const eyebrowRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const scrollCueRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(imgRef.current, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 0.45, duration: 1.6 })
                .fromTo(eyebrowRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=1.1')
                .fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1 }, '-=0.6')
                .fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
                .fromTo(scrollCueRef.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');

            gsap.to(scrollCueRef.current, {
                y: 10,
                opacity: 0.4,
                repeat: -1,
                yoyo: true,
                duration: 1.2,
                ease: 'sine.inOut',
            });
        },
        { scope }
    );

    return (
        <div
            ref={scope}
            className="relative w-full h-screen flex flex-col justify-end pb-[5.1%] overflow-hidden bg-[#0e1111]"
        >
            <img decoding="async"
                ref={imgRef}
                src={meta.heroImage}
                alt={meta.title}
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#202020]/80 via-[#202020]/50 to-[#202020]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#202020]/75 via-transparent to-[#202020]/60" />

            <div className="relative z-10 px-[5%] lg:px-[8%] flex flex-col gap-8 w-full lg:pb-0 pb-[12%]">
                <Breadcrumb
                    items={[
                        { text: 'Home', href: '/' },
                        { text: 'What We Offer', href: '/what-we-offer' },
                        breadcrumbItem,
                    ]}
                />

                <div ref={eyebrowRef} className="flex flex-col lg:flex-row lg:items-center gap-5">
                    <span
                        className="font-seasons text-[clamp(12px,1vw,18px)] leading-[1.2] font-bold uppercase tracking-[0.35em]"
                        style={{ color: meta.heroAccent }}
                    >
                        {meta.eyebrow}
                    </span>
                    <hr
                        className="w-full lg:w-[320px] border-t"
                        style={{ borderColor: meta.heroAccent, opacity: 0.5 }}
                    />
                </div>

                <h1
                    ref={titleRef}
                    className="font-midland text-[clamp(30px,4vw,60px)] leading-[2] lg:leading-[100px] capitalize w-full text-[#FAF1E1]"
                >
                    {meta.title}
                </h1>

                {subtitle && (
                    <p
                        ref={subtitleRef}
                        className="font-seasons text-[clamp(16px,2vw,26px)] leading-[2] lg:leading-[38px] max-w-[720px] text-[#FAF4ED]"
                    >
                        {subtitle}
                    </p>
                )}
            </div>

            <div
                ref={scrollCueRef}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 w-full lg:w-auto"
            >
                <span className="font-seasons text-[14px] uppercase tracking-[0.4em] text-white/50">
                    {scrollCueLabel}
                </span>
                <div className="w-[1px] h-[2vh] md:h-[4vh] bg-gradient-to-b from-white/60 to-transparent" />
            </div>
        </div>
    );
}
