"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { BlogPost } from "@/types/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface FeaturedPostProps extends BlogPost {
    ctaLabel: string;
    ctaHref: string;
}

export default function FeaturedPost({
    title,
    excerpt,
    date,
    category,
    readTime,
    image,
    ctaLabel,
    ctaHref,
}: FeaturedPostProps) {
    const featuredSectionRef = useRef<HTMLDivElement>(null);
    const featuredImageRef = useRef<HTMLDivElement>(null);
    const featuredTextRef = useRef<HTMLDivElement>(null);
    const featuredLine1Ref = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        gsap.fromTo(featuredImageRef.current, { scale: 1.15 }, { scale: 1, duration: 2, ease: 'power3.out' });

        gsap.fromTo(
            featuredTextRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 }
        );

        gsap.to(featuredLine1Ref.current, {
            x: -120,
            ease: 'none',
            scrollTrigger: {
                trigger: featuredSectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
            },
        });
    }, []);

    return (
        <div ref={featuredSectionRef} className="relative w-full h-screen bg-[#0e1111] overflow-hidden">
            <div ref={featuredImageRef} className="absolute inset-0">
                <img loading="lazy" decoding="async" src={image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-[#202020]/50 to-transparent" />
            </div>

            <div
                ref={featuredTextRef}
                className="absolute bottom-0 left-0 w-full px-[20px] md:px-[129px] pb-[80px] z-10"
            >
                <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-6">
                    <span className="font-seasons text-[16px] uppercase tracking-[0.2em] text-cream font-bold">
                        {category}
                    </span>
                    <span className="w-[6px] h-[6px] rounded-full bg-white/30" />
                    <span className="font-seasons text-[16px] text-white/50">{date}</span>
                    <span className="w-[6px] h-[6px] rounded-full bg-white/30" />
                    <span className="font-seasons text-[16px] text-white/50">{readTime}</span>
                </div>

                <h1
                    ref={featuredLine1Ref}
                    className="font-midland text-[25px] leading-[50px] md:text-[60px] md:leading-[100px] capitalize text-[#FAF1E1]"
                >
                    {title}
                </h1>

                <p className="font-seasons md:text-[22px] md:leading-[38px] max-w-[600px] mt-6 text-[#FAF4ED]">
                    {excerpt}
                </p>

                <Link
                    href={ctaHref}
                    className="inline-block font-seasons text-[20px] text-cream font-bold underline mt-6 cursor-pointer"
                >
                    {ctaLabel}
                </Link>
            </div>
        </div>
    );
}
