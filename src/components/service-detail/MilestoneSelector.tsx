"use client";
import { useRef, useState } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import type { MilestoneItem } from "@/types/services";

gsap.registerPlugin(useGSAP);

interface MilestoneSelectorProps {
    eyebrow: string;
    heading: string;
    viewingLabel: string;
    items: MilestoneItem[];
}

export default function MilestoneSelector({ eyebrow, heading, viewingLabel, items }: MilestoneSelectorProps) {
    const [activeMilestone, setActiveMilestone] = useState(0);
    const selectorScope = useRef<HTMLDivElement>(null);

    const goNext = () => setActiveMilestone((i) => (i + 1) % items.length);
    const goPrev = () => setActiveMilestone((i) => (i - 1 + items.length) % items.length);

    useGSAP(
        () => {
            gsap.fromTo(
                '.milestone-detail-copy',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
            );
            gsap.fromTo(
                '.milestone-detail-image',
                { scale: 1.1, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.9, ease: 'power2.out' }
            );
        },
        { scope: selectorScope, dependencies: [activeMilestone] }
    );

    const active = items[activeMilestone];

    return (
        <div ref={selectorScope} className="w-full bg-[#1a1a1a] py-[8%] lg:py-[140px] px-[6.6%] lg:px-[8.5%]">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-[clamp(30px,4.167vw,80px)] mb-[6%] lg:mb-[70px] max-w-[1500px] mx-auto">
                <div className="max-w-full lg:max-w-[820px]">
                    <span className="font-seasons text-[11px] lg:text-[15px] uppercase tracking-[0.45em] text-cream block mb-3 lg:mb-6">
                        {eyebrow}
                    </span>
                    <h2 className="font-midland text-[clamp(18px,2.34vw,45px)] leading-[clamp(36px,4.167vw,80px)] capitalize text-[#FAF1E1]">
                        {heading}
                    </h2>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-2 lg:gap-3 flex-shrink-0">
                    <span className="font-seasons text-[11px] lg:text-[13px] uppercase tracking-[0.4em] text-white/40">
                        {viewingLabel}
                    </span>
                    <div className="flex items-baseline gap-2">
                        <span className="font-midland text-[40px] md:text-[56px] lg:text-[72px] leading-[1] lg:leading-[72px] text-cream">
                            {String(activeMilestone + 1).padStart(2, '0')}
                        </span>
                        <span className="font-midland text-[20px] md:text-[24px] lg:text-[32px] leading-[1] lg:leading-[40px] text-white/35">
                            / {String(items.length).padStart(2, '0')}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-2 lg:gap-3 mb-[6%] lg:mb-[80px] max-w-[1300px] mx-auto">
                {items.map((item, i) => {
                    const isActive = i === activeMilestone;

                    return (
                        <button
                            key={item.id}
                            type="button"
                            aria-pressed={isActive}
                            onClick={() => setActiveMilestone(i)}
                            className={`px-[16px] md:px-[24px] lg:px-[32px] py-[12px] md:py-[16px] lg:py-[18px] rounded-full font-seasons text-[11px] md:text-[13px] lg:text-[14px] uppercase tracking-[0.3em] border transition-all cursor-pointer ${isActive
                                ? 'bg-cream text-[#1a1a1a] border-cream shadow-[0_4px_24px_rgba(222,199,173,0.25)]'
                                : 'bg-transparent text-white/70 border-white/20 hover:border-cream/60 hover:text-white'
                                }`}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </div>

            <div className="flex flex-col lg:flex-row gap-[clamp(30px,4.167vw,80px)] items-stretch max-w-[1500px] mx-auto">
                <div className="w-full lg:w-[48%] relative aspect-[4/5] overflow-hidden rounded-[8px]">
                    <div className="milestone-detail-image absolute inset-0" key={active.id}>
                        <img loading="lazy" decoding="async" src={active.image} alt={active.label} className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 mix-blend-multiply"
                            style={{ backgroundColor: active.palette, opacity: 0.22 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent" />
                    </div>

                    <div className="absolute top-[30px] left-[30px] z-10">
                        <span
                            className="inline-block px-5 py-2 rounded-full font-seasons text-[12px] uppercase tracking-[0.35em]"
                            style={{ backgroundColor: active.palette, color: '#1a1a1a' }}
                        >
                            {active.label}
                        </span>
                    </div>

                    <div className="absolute bottom-[30px] right-[30px] z-10 text-right">
                        <span
                            className="font-midland text-[clamp(32px,8vw,180px)] leading-[clamp(25px,7vw,140px)]"
                            style={{ color: active.palette, opacity: 0.4 }}
                        >
                            {active.age}
                        </span>
                    </div>
                </div>

                <div
                    className="milestone-detail-copy w-full lg:w-[52%] flex flex-col justify-center gap-4 lg:gap-8"
                    key={`copy-${active.id}`}
                >
                    <span
                        className="font-seasons text-[11px] lg:text-[13px] uppercase tracking-[0.4em]"
                        style={{ color: active.palette }}
                    >
                        Milestone · {activeMilestone + 1} of {items.length}
                    </span>

                    <h3 className="font-midland text-[clamp(24px,3.333vw,64px)] leading-[clamp(31px,5vw,78px)] capitalize text-[#FAF1E1]">
                        {active.label}
                    </h3>

                    <p className="font-seasons text-[clamp(13px,1.0416vw,20px)] leading-[clamp(20px,1.979vw,38px)] max-w-full lg:max-w-[560px] text-[#FAF4ED]">
                        {active.story}
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-4 gap-x-4 lg:gap-x-8 mt-2 lg:mt-4 max-w-full lg:max-w-[560px]">
                        {active.details.map((detail) => (
                            <li
                                key={detail}
                                className="flex items-start gap-2 lg:gap-3 font-seasons text-[12px] md:text-[14px] lg:text-[16px] leading-[1.4] md:leading-[1.6] lg:leading-[28px] text-white/75"
                            >
                                <span
                                    className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] mt-1 lg:mt-2 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: active.palette }}
                                />
                                {detail}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5 mt-4 lg:mt-8 pt-4 lg:pt-8 border-t border-white/10">
                        <button
                            type="button"
                            onClick={goPrev}
                            className="group flex items-center gap-2 lg:gap-3 font-seasons text-[11px] lg:text-[13px] uppercase tracking-[0.35em] text-white/60 hover:text-cream transition-colors cursor-pointer"
                        >
                            <span className="w-[24px] lg:w-[36px] h-[1px] bg-current transition-all duration-500 group-hover:w-[40px] lg:group-hover:w-[56px]" />
                            Prev
                        </button>

                        <div className="hidden md:block w-[1px] h-[20px] bg-white/20" />

                        <button
                            type="button"
                            onClick={goNext}
                            className="group flex items-center gap-2 lg:gap-3 font-seasons text-[11px] lg:text-[13px] uppercase tracking-[0.35em] text-white/60 hover:text-cream transition-colors cursor-pointer"
                        >
                            Next
                            <span className="w-[24px] lg:w-[36px] h-[1px] bg-current transition-all duration-500 group-hover:w-[40px] lg:group-hover:w-[56px]" />
                        </button>

                        <span className="font-seasons text-[10px] lg:text-[12px] uppercase tracking-[0.4em] text-white/40 md:ml-auto">
                            {items[(activeMilestone + 1) % items.length].label} →
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
