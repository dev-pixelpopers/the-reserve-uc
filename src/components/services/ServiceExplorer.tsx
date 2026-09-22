"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ServiceCard } from "@/types/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ServiceExplorerProps {
    services: ServiceCard[];
}

export default function ServiceExplorer({ services }: ServiceExplorerProps) {
    const serviceImageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const serviceTextRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const isMobile = window.innerWidth <= 1024;

        serviceTextRefs.current.forEach((textEl, i) => {
            if (!textEl) return;
            const imageEl = serviceImageRefs.current[i];
            if (!imageEl) return;

            gsap.fromTo(
                textEl,
                { opacity: 0, y: isMobile ? 40 : 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: textEl,
                        start: isMobile ? 'top 90%' : 'top 75%',
                        end: isMobile ? 'top 60%' : '+=300',
                        scrub: isMobile ? 0.5 : 1,
                    },
                }
            );

            gsap.fromTo(
                imageEl,
                { opacity: isMobile ? 0.6 : 0 },
                {
                    opacity: 1,
                    duration: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: textEl,
                        start: isMobile ? 'top 95%' : 'top 80%',
                        end: isMobile ? 'top 50%' : 'top 30%',
                        scrub: 1,
                    },
                }
            );
        });
    }, [services]);

    return (
        <div className="w-full bg-[#0e1111]">
            <div className="flex min-h-screen flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 lg:sticky lg:top-0 h-[55vh] sm:h-[65vh] lg:h-screen overflow-hidden hidden lg:flex">
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            ref={(el) => { serviceImageRefs.current[i] = el; }}
                            className="absolute inset-0"
                            style={{ opacity: i === 0 ? 1 : 0 }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#202020]/80" />
                        </div>
                    ))}
                </div>

                <div className="services w-full lg:w-1/2 flex flex-col py-[80px] lg:py-[200px] px-[5%] lg:px-[80px]">
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            ref={(el) => { serviceTextRefs.current[i] = el; }}
                            className="min-h-auto lg:min-h-[80vh] flex flex-col justify-center gap-[24px] lg:gap-[30px] py-[50px] lg:py-[60px]"
                        >
                            <div className="block lg:hidden w-full overflow-hidden rounded-[20px] mb-[10px]">
                                <img src={service.image} alt={service.title} className="w-full h-auto object-cover" />
                            </div>

                            <span className="font-midland text-[clamp(60px,10vw,100px)] leading-[1] text-cream/15">
                                0{service.id}
                            </span>

                            <h3 className="font-midland text-[clamp(25px,2.5vw,48px)] leading-[2] lg:leading-[90px] capitalize text-[#FAF1E1]">
                                {service.title}
                            </h3>

                            <p className="font-seasons text-[clamp(18px,1.4vw,24px)] leading-[1.6] lg:leading-[42px] text-[#FAF4ED]">
                                {service.description}
                            </p>

                            {service.longText && (
                                service.longText.map((text, i) => (
                                    <p key={i} className="font-seasons text-[clamp(16px,1.5vw,20px)] leading-[1.7] lg:leading-[38px] text-[#FAF4ED]">
                                        {text}
                                    </p>
                                ))
                            )}

                            <div className="mt-[20px] lg:mt-[30px] flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:gap-6">
                                <Link
                                    href="/contact-us"
                                    className="group inline-flex items-center gap-3 font-seasons text-[12px] lg:text-[14px] uppercase tracking-[0.25em] lg:tracking-[0.35em] text-cream/70 hover:text-cream transition-colors"
                                >
                                    Inquire Now
                                    <span className="block w-[24px] lg:w-[30px] h-[1px] bg-current transition-all duration-500 group-hover:w-[44px] lg:group-hover:w-[56px]" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
