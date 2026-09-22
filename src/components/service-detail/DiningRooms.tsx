"use client";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { DiningRoom } from "@/types/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface DiningRoomsProps {
    eyebrow: string;
    heading: string;
    body: string;
    items: DiningRoom[];
}

export default function DiningRooms({ eyebrow, heading, body, items }: DiningRoomsProps) {
    const roomsScope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const rooms = gsap.utils.toArray<HTMLElement>('.dining-room');

            rooms.forEach((room, i) => {
                const image = room.querySelector<HTMLElement>('.dining-room-image');
                const copy = room.querySelector<HTMLElement>('.dining-room-copy');

                if (image) {
                    gsap.fromTo(
                        image,
                        { clipPath: i % 2 === 0 ? 'inset(0% 100% 0% 0%)' : 'inset(0% 0% 0% 100%)' },
                        {
                            clipPath: 'inset(0% 0% 0% 0%)',
                            duration: 1.4,
                            ease: 'power3.out',
                            scrollTrigger: { trigger: room, start: 'top 70%' },
                        }
                    );
                }

                if (copy) {
                    gsap.fromTo(
                        copy.children,
                        { y: 40, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.9,
                            ease: 'power3.out',
                            stagger: 0.1,
                            scrollTrigger: { trigger: room, start: 'top 70%' },
                        }
                    );
                }
            });
        },
        { scope: roomsScope, dependencies: [items] }
    );

    return (
        <div ref={roomsScope} className="w-full bg-[#FAEEE1] py-[8%] lg:py-[clamp(80px,8.333vw,160px)]">
            <div className="px-[6.6%] mb-[40px] lg:mb-[120px] max-w-[1500px] mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-[clamp(30px,4.167vw,80px)]">
                    <div className="max-w-full lg:max-w-[1100px]">
                        <span className="font-seasons text-[11px] lg:text-[15px] uppercase tracking-[0.45em] text-[#B09983]">
                            {eyebrow}
                        </span>
                        <h2 className="font-midland text-[clamp(18px,2.34vw,45px)] leading-[clamp(36px,4.167vw,80px)] text-[#242424] capitalize mt-3 lg:mt-6">
                            {heading}
                        </h2>
                    </div>
                    <p className="font-seasons text-[13px] md:text-[16px] lg:text-[19px] leading-[1.8] lg:leading-[36px] text-[#242424]/70 max-w-full lg:max-w-[420px]">
                        {body}
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-[40px] lg:gap-[clamp(80px,8.333vw,160px)]">
                {items.map((room, i) => {
                    const reverse = i % 2 === 1;

                    return (
                        <div key={room.name} className="dining-room px-[6.6%] max-w-[1500px] mx-auto w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px] lg:gap-[60px] items-center">
                                <div
                                    className={`${reverse ? 'lg:col-start-7 lg:col-span-6' : 'col-span-1 lg:col-span-6'} relative aspect-[4/5] overflow-hidden rounded-[8px]`}
                                >
                                    <div className="dining-room-image absolute inset-0">
                                        <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    </div>
                                    <span
                                        className={`absolute bottom-[30px] ${reverse ? 'right-[20px] lg:right-[36px]' : 'left-[20px] lg:left-[36px]'} font-midland text-[80px] md:text-[120px] lg:text-[160px] leading-[1] lg:leading-[130px] text-white/20 select-none pointer-events-none`}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                <div
                                    className={`${reverse ? 'lg:col-start-1 lg:col-span-6 lg:row-start-1' : 'col-span-1 lg:col-span-6'} dining-room-copy flex flex-col gap-4 lg:gap-7`}
                                >
                                    <div className="flex items-center gap-3 lg:gap-4">
                                        <span className="w-[30px] lg:w-[48px] h-[1px] bg-[#B09983]" />
                                        <span className="font-seasons text-[11px] lg:text-[13px] uppercase tracking-[0.45em] text-[#B09983]">
                                            Room {String(i + 1).padStart(2, '0')} · {room.seats}
                                        </span>
                                    </div>

                                    <h3 className="font-midland text-[20px] md:text-[32px] lg:text-[clamp(40px,3.2vw,58px)] leading-[2] lg:leading-[110px] text-[#242424] capitalize">
                                        {room.name}
                                    </h3>

                                    <p className="font-seasons text-[15px] md:text-[19px] leading-[1.8] lg:leading-[36px] text-[#242424]/75 max-w-full lg:max-w-[520px]">
                                        {room.vibe}
                                    </p>

                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-2 lg:gap-y-3 mt-2 lg:mt-4 pt-4 lg:pt-6 border-t border-[#B09983]/30 max-w-full lg:max-w-[540px]">
                                        {room.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-2 lg:gap-3 font-seasons text-[15px] leading-[1.4] lg:leading-[24px] text-[#242424]/80"
                                            >
                                                <span className="w-[5px] h-[5px] mt-1 lg:mt-[9px] rounded-full bg-[#B09983] flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
