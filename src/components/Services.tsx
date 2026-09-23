"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
    {
        id: 1,
        title_1: 'Weddings',
        title_2: '& Receptions',
        description_1: "Weddings and receptions at The Reserve are where timeless romance meets effortless luxury, each moment thoughtfully curated, beautifully celebrated, and truly unforgettable.",
        description_2: "Start Planning",
        image: '/images/weddings-receptions.webp',
        href: '/contact-us'
    },
    {
        id: 2,
        title_1: 'special',
        title_2: 'occasions',
        description_1: "Celebrate your love in a setting that is elegant, romantic, and entirely customizable.",
        description_2: "Start Planning",
        image: '/images/special-occasions.webp',
        href: '/contact-us'
    },
    {
        id: 3,
        title_1: 'corporate',
        title_2: 'events',
        description_1: "From intimate gatherings to grand celebrations, The Reserve provides a sophisticated backdrop for every corporate event.",
        description_2: "Start Planning",
        image: '/images/corporate-events.webp',
        href: '/contact-us'
    }
]

export default function Services() {
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const [scale, setScale] = useState<number>(0.8);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setScale(0.6);
            } else {
                setScale(0.8);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useGSAP(() => {
        const cards = cardsRef.current;
        cards.forEach((card, i) => {
            if (!card || i === cards.length - 1) return;

            const nextCard = cards[i + 1];
            if (!nextCard) return;

            gsap.to(card, {
                scale: scale,
                opacity: 0,
                y: 150,
                rotate: 15,
                ease: "none",
                // duration: 0.5,
                scrollTrigger: {
                    trigger: nextCard,
                    start: "top 90%",
                    end: "top 30%",
                    scrub: 0,
                    // markers: true
                }
            });
        });
    }, [scale])

    return (
        <div className='relative w-full flex flex-col justify-center items-center gap-0 pt-[6%] lg:pt-[5.208%] bg-[#000000]'>
            {
                services.map((service, index) => (
                    <div key={index} className='w-full flex flex-col overflow-hidden sticky top-[5vw] lg:top-[7.8125vw] rounded-tl-[30px] rounded-tr-[30px] px-[6%] lg:px-[7.29%] py-[8%] lg:py-[5.208%] transition-all duration-500'
                        ref={(el) => {
                            if (el) cardsRef.current[index] = el;
                        }}
                    >
                        <div className="absolute inset-0 z-0">
                            <img loading="lazy" decoding="async" src="/images/menu-bg.webp" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className='w-full flex flex-col lg:flex-row justify-between items-center z-10 gap-8 lg:gap-0'>
                            <div className='w-full lg:w-1/2 flex flex-col justify-center items-start gap-8 lg:gap-20'>
                                <div className='flex flex-col justify-center items-start gap-0'>
                                    <h3 className='text-[#242424] font-midland text-[clamp(1.75rem,2.083vw,2.5rem)] font-normal leading-[2.2] capitalize text-left'>
                                        {service.title_1}
                                    </h3>
                                    <h3 className='text-[#242424] font-midland text-[clamp(1.75rem,2.083vw,2.5rem)] font-normal leading-[2.2] capitalize text-left'>
                                        {service.title_2}
                                    </h3>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-5 w-full'>
                                    <p className='w-full lg:w-[44.27vw] lg:max-w-[850px] text-[#242424] font-seasons text-[clamp(1rem,1.458vw,1.75rem)] font-normal leading-[1.714]'>
                                        {service.description_1}
                                    </p>
                                    <Link
                                        href={service.href}
                                        className='group inline-flex flex-row items-center gap-4 mt-2 cursor-pointer'
                                    >
                                        <span className='text-[clamp(0.875rem,1.146vw,1.375rem)] font-seasons font-normal leading-[1.636] text-[#242424] uppercase tracking-[0.2em] group-hover:text-[#B09983] transition-colors'>
                                            {service.description_2}
                                        </span>
                                        <span className='relative flex items-center'>
                                            <span className='block w-[40px] h-[1px] bg-[#242424] group-hover:w-[70px] group-hover:bg-[#B09983] transition-all duration-500' />
                                            <span className='block w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-[#242424] group-hover:border-l-[#B09983] transition-colors' />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
                                <img loading="lazy" decoding="async" src={service.image} className='w-[70%] lg:w-[20.833vw] lg:max-w-[400px] object-cover aspect-[4/5] rounded-[20px]' alt="" />
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}