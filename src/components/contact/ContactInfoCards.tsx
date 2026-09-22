"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ContactInfoCard, SocialLink } from "@/types/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ContactInfoCardsProps {
    cards: ContactInfoCard[];
    socials: SocialLink[];
}

export default function ContactInfoCards({ cards, socials }: ContactInfoCardsProps) {
    const infoCardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        infoCardRefs.current.forEach((el) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: el, start: 'top 88%', end: '+=200', scrub: 1 },
                }
            );
        });
    }, [cards]);

    return (
        <div className="w-full bg-[#0e1111] px-[3.6%] py-[6%] contact-info">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                {cards.map((card, i) => (
                    <div
                        key={card.number}
                        ref={(el) => { infoCardRefs.current[i] = el; }}
                        className="flex flex-col gap-6 p-[50px] rounded-[20px] border border-white/10 hover:border-cream/30 transition-colors duration-500"
                    >
                        <span className="font-midland text-[30px] md:text-[clamp(38px,4.5vw,80px)] leading-[2] lg:leading-[120px] text-cream/15">
                            {card.number}
                        </span>
                        <h3 className="font-midland text-[20px] md:text-[clamp(24px,2.6vw,36px)] leading-[2] lg:leading-[50px] capitalize text-[#FAF1E1]">
                            {card.title}
                        </h3>

                        {card.lines.length > 0 && (
                            <p className="font-seasons text-[20px] leading-[35px] text-[#FAF4ED]">
                                {card.lines.map((line, j) => (
                                    <span key={j}>
                                        {line}
                                        {j !== card.lines.length - 1 && <br />}
                                    </span>
                                ))}
                            </p>
                        )}

                        {card.links && card.links.length > 0 && (
                            <div className="flex flex-col gap-3">
                                {card.links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="font-seasons text-[20px] leading-[35px] text-cream hover:underline"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-[30px] lg:gap-[60px] mt-[40px] lg:mt-[80px]">
                {socials.map((social) => (
                    <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-seasons text-[22px] leading-[35px] text-cream underline hover:text-white transition-colors duration-300 ${social.hidden ? 'hidden' : ''}`}
                    >
                        {social.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
