"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTAButton from "@/components/shared/CTAButton";
import { serviceMeta, serviceOrder, type ServiceSlug } from "@/data/services/meta";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ServiceFooterCTAProps {
    currentSlug: ServiceSlug;
    ctaLabel?: string;
    ctaHeadline?: string;
    ctaBody?: string;
    ctaHref?: string;
    stripEyebrow?: string;
    stripHeadline?: string;
    hideCTA?: boolean;
}

export default function ServiceFooterCTA({
    currentSlug,
    ctaLabel = 'Request Pricing & Availability',
    ctaHeadline = "Let's Create Your Perfect Event",
    ctaBody = "Every celebration is unique. Tell us about yours and we'll craft an experience that exceeds your expectations.",
    ctaHref = '/contact-us',
    stripEyebrow = 'Keep Exploring',
    stripHeadline = 'Other Ways to Celebrate',
    hideCTA = false,
}: ServiceFooterCTAProps) {
    const scope = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const stripRef = useRef<HTMLDivElement>(null);

    const others = serviceOrder.filter((slug) => slug !== currentSlug);

    useGSAP(
        () => {
            if (ctaRef.current && !hideCTA) {
                gsap.fromTo(
                    ctaRef.current,
                    { clipPath: 'inset(100% 0% 0% 0%)' },
                    {
                        clipPath: 'inset(0% 0% 0% 0%)',
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: { trigger: ctaRef.current, start: 'top 85%', end: '+=300', scrub: 1 },
                    }
                );
            }

            if (stripRef.current) {
                const cards = stripRef.current.querySelectorAll<HTMLElement>('[data-related-card]');
                gsap.fromTo(
                    cards,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: 'power3.out',
                        stagger: 0.12,
                        scrollTrigger: { trigger: stripRef.current, start: 'top 80%' },
                    }
                );
            }
        },
        { scope }
    );

    return (
        <div ref={scope}>
            {!hideCTA && (
                <div ref={ctaRef} className="w-full bg-[#242424] px-[6.6%] py-[10%] md:py-[6%]">
                    <div className="flex flex-col lg:flex-row justify-between gap-[clamp(40px,4.167vw,80px)]">
                        <h2 className="font-midland text-[clamp(18px,2.34vw,45px)] leading-[clamp(36px,4.167vw,80px)] capitalize max-w-[clamp(300px,36.458vw,700px)] text-[#FAF1E1]">
                            {ctaHeadline}
                        </h2>
                        <div className="flex flex-col lg:items-end gap-[30px] w-full lg:w-auto">
                            <p className="font-seasons text-[clamp(13px,1.758vw,20px)] leading-[clamp(23px,1.979vw,38px)] lg:max-w-[clamp(280px,26.04vw,500px)] text-[#FAF4ED]">
                                {ctaBody}
                            </p>
                            <Link href={ctaHref}>
                                <CTAButton>{ctaLabel}</CTAButton>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <div
                ref={stripRef}
                className="w-full bg-[#1a1a1a] px-[6.6%] py-[10%] md:py-[6%] border-t border-white/5"
            >
                <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-[40px] lg:mb-[60px] gap-4">
                    <div>
                        <span className="font-seasons text-[12px] lg:text-[16px] uppercase tracking-[0.4em] text-cream/70">
                            {stripEyebrow}
                        </span>
                        <h3 className="font-midland text-[clamp(20px,2.34vw,54px)] leading-[clamp(40px,4.167vw,80px)] capitalize lg:mt-4 text-[#FAF1E1]">
                            {stripHeadline}
                        </h3>
                    </div>
                    <Link
                        href="/what-we-offer"
                        className="font-seasons text-[14px] lg:text-[18px] uppercase tracking-[0.3em] text-white/60 hover:text-cream transition-colors underline underline-offset-8"
                    >
                        View All Services
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
                    {others.map((slug) => {
                        const meta = serviceMeta[slug];

                        return (
                            <Link
                                key={slug}
                                href={`/what-we-offer/${slug}`}
                                data-related-card
                                className="group relative block overflow-hidden rounded-[8px] aspect-[4/5]"
                            >
                                <img
                                    src={meta.heroImage}
                                    alt={meta.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-[6%] min-h-[30vh] flex flex-col">
                                    <span
                                        className="font-seasons text-[13px] uppercase tracking-[0.35em]"
                                        style={{ color: meta.heroAccent }}
                                    >
                                        {meta.eyebrow}
                                    </span>
                                    <h4 className="font-midland text-[clamp(16px,1.5625vw,30px)] leading-[clamp(32px,3.125vw,60px)] capitalize mt-3 text-[#FAF1E1]">
                                        {meta.title}
                                    </h4>
                                    <div className="mt-auto inline-flex items-center gap-3 font-seasons text-[10px] lg:text-[14px] uppercase tracking-[0.3em] text-white/80 group-hover:text-cream transition-colors">
                                        Discover
                                        <span className="w-[30px] h-[1px] bg-current transition-all duration-500 group-hover:w-[60px]" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
