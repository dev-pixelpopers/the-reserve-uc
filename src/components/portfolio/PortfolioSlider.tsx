"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import SlideDetails from "./SlideDetails";
import type { PortfolioSlide } from "@/types/content";

interface PortfolioSliderProps {
    slides: PortfolioSlide[];
    ctaHref?: string;
    ctaLabel?: string;
    autoplayMs?: number;
}

const EASE = 'sine.inOut';
const CARD_WIDTH = 200;
const CARD_HEIGHT = 300;
const GAP = 40;
const NUMBER_SIZE = 50;
const PROGRESS_WIDTH = 500;

interface SlideState {
    current: number;
    activePanel: 'even' | 'odd';
    even: number;
    odd: number;
}

export default function PortfolioSlider({
    slides,
    ctaHref = '/contact-us',
    ctaLabel = 'Discover Story',
    autoplayMs = 5000,
}: PortfolioSliderProps) {
    const stageRef = useRef<HTMLDivElement>(null);
    const hasLaidOut = useRef(false);

    const [slideState, setSlideState] = useState<SlideState>({
        current: 0,
        activePanel: 'even',
        even: 0,
        odd: 0,
    });

    const { current: currentSlide, activePanel } = slideState;

    const goToSlide = useCallback((target: number) => {
        setSlideState((prev) => {
            if (prev.current === target) return prev;
            const nextPanel = prev.activePanel === 'even' ? 'odd' : 'even';
            return { ...prev, current: target, activePanel: nextPanel, [nextPanel]: target };
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideState((prev) => {
                const target = (prev.current + 1) % slides.length;
                const nextPanel = prev.activePanel === 'even' ? 'odd' : 'even';
                return { ...prev, current: target, activePanel: nextPanel, [nextPanel]: target };
            });
        }, autoplayMs);
        return () => clearInterval(interval);
    }, [slides.length, autoplayMs]);

    useEffect(() => {
        const scope = stageRef.current;
        if (!scope) return;

        const q = (sel: string) => scope.querySelector<HTMLElement>(sel);
        const qa = (sel: string) => Array.from(scope.querySelectorAll<HTMLElement>(sel));

        const animated = hasLaidOut.current;
        hasLaidOut.current = true;
        const duration = animated ? 0.7 : 0;

        const n = slides.length;
        const order = Array.from({ length: n }, (_, i) => (currentSlide + i) % n);
        const [active, ...rest] = order;

        const width = scope.clientWidth;
        const height = scope.clientHeight;
        const offsetTop = height - 430;
        const offsetLeft = width - 830;

        const detailsActive = activePanel === 'even' ? '#details-even' : '#details-odd';
        const detailsInactive = activePanel === 'even' ? '#details-odd' : '#details-even';

        gsap.set(q('#pagination'), {
            top: offsetTop + 330,
            left: offsetLeft,
            y: 0,
            opacity: 1,
            zIndex: 60,
        });

        gsap.to(q(`#card${active}`), {
            x: 0,
            y: 0,
            width,
            height,
            borderRadius: 0,
            zIndex: 20,
            scale: 1,
            ease: EASE,
            duration,
            overwrite: 'auto',
        });
        gsap.to(q(`#card-content-${active}`), {
            opacity: 0,
            duration: animated ? 0.3 : 0,
            ease: EASE,
            overwrite: 'auto',
        });
        gsap.to(q(`#slide-item-${active}`), { x: 0, ease: EASE, duration, overwrite: 'auto' });

        rest.forEach((i, index) => {
            const xNew = offsetLeft + index * (CARD_WIDTH + GAP);

            gsap.to(q(`#card${i}`), {
                x: xNew,
                y: offsetTop,
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                zIndex: 30,
                borderRadius: 10,
                scale: 1,
                ease: EASE,
                duration,
                overwrite: 'auto',
            });
            gsap.to(q(`#card-content-${i}`), {
                x: xNew,
                y: offsetTop + CARD_HEIGHT - 100,
                opacity: 1,
                zIndex: 40,
                ease: EASE,
                duration,
                overwrite: 'auto',
            });
            gsap.to(q(`#slide-item-${i}`), {
                x: (index + 1) * NUMBER_SIZE,
                ease: EASE,
                duration,
                overwrite: 'auto',
            });
        });

        gsap.to(q('.progress-sub-foreground'), {
            width: PROGRESS_WIDTH * (1 / n) * (active + 1),
            ease: EASE,
            duration,
            overwrite: 'auto',
        });

        if (animated) {
            gsap.set(q(detailsActive), { zIndex: 22, opacity: 0, x: 0 });
            gsap.to(q(detailsActive), { opacity: 1, delay: 0.3, ease: EASE });
            gsap.fromTo(qa(`${detailsActive} .text`), { y: 100 }, { y: 0, delay: 0.1, duration: 0.7, ease: EASE, overwrite: 'auto' });
            gsap.fromTo(qa(`${detailsActive} .title-1`), { y: 100 }, { y: 0, delay: 0.15, duration: 0.7, ease: EASE, overwrite: 'auto' });
            gsap.fromTo(qa(`${detailsActive} .title-2`), { y: 100 }, { y: 0, delay: 0.15, duration: 0.7, ease: EASE, overwrite: 'auto' });
            gsap.fromTo(qa(`${detailsActive} .desc`), { y: 50 }, { y: 0, delay: 0.3, duration: 0.4, ease: EASE, overwrite: 'auto' });
            gsap.fromTo(qa(`${detailsActive} .cta`), { y: 60 }, { y: 0, delay: 0.35, duration: 0.4, ease: EASE, overwrite: 'auto' });
            gsap.set(q(detailsInactive), { zIndex: 12 });
            gsap.to(q(detailsInactive), { opacity: 0, duration: 0.2, ease: EASE });
        } else {
            gsap.set(q(detailsActive), { opacity: 1, zIndex: 22, x: 0 });
            gsap.set(qa(`${detailsActive} .text`), { y: 0 });
            gsap.set(qa(`${detailsActive} .title-1`), { y: 0 });
            gsap.set(qa(`${detailsActive} .title-2`), { y: 0 });
            gsap.set(qa(`${detailsActive} .desc`), { y: 0 });
            gsap.set(qa(`${detailsActive} .cta`), { y: 0 });
            gsap.set(q(detailsInactive), { opacity: 0, zIndex: 12 });
            gsap.set(qa(`${detailsInactive} .text`), { y: 100 });
            gsap.set(qa(`${detailsInactive} .title-1`), { y: 100 });
            gsap.set(qa(`${detailsInactive} .title-2`), { y: 100 });
            gsap.set(qa(`${detailsInactive} .desc`), { y: 50 });
            gsap.set(qa(`${detailsInactive} .cta`), { y: 60 });
        }
    }, [currentSlide, activePanel, slides.length]);

    return (
        <div className="w-full bg-[#1a1a1a]">
            <div
                ref={stageRef}
                className="portfolio-anim relative w-full h-[105vh] md:h-screen overflow-hidden bg-[#1a1a1a] text-white"
            >
                {slides.map((slide, i) => (
                    <div
                        key={`card-${slide.title}-${i}`}
                        id={`card${i}`}
                        role="button"
                        tabIndex={0}
                        aria-label={`Show ${slide.title} ${slide.title2}`}
                        className="card absolute left-0 top-0 bg-center bg-cover shadow-[6px_6px_10px_2px_rgba(0,0,0,0.6)] cursor-pointer"
                        style={{ backgroundImage: `url(${slide.image})` }}
                        onClick={() => goToSlide(i)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                goToSlide(i);
                            }
                        }}
                    />
                ))}

                <div className="pointer-events-none absolute inset-0 z-[21] bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] z-[21] bg-gradient-to-t from-black/70 to-transparent" />

                {slides.map((slide, i) => (
                    <div
                        key={`card-content-${slide.title}-${i}`}
                        id={`card-content-${i}`}
                        className="card-content absolute left-0 top-0 pl-4 pr-3 text-white/90 w-[200px]"
                    >
                        <div className="content-start w-[30px] h-[5px] rounded-full bg-white/90" />
                        <div className="content-place mt-[6px] text-[13px] leading-[16px] font-medium font-seasons truncate">
                            {slide.place}
                        </div>
                        <div className="content-title-1 font-midland text-[16px] leading-[20px] font-semibold uppercase tracking-wide truncate">
                            {slide.title}
                        </div>
                        <div className="content-title-2 font-midland text-[16px] leading-[20px] font-semibold uppercase tracking-wide truncate">
                            {slide.title2}
                        </div>
                    </div>
                ))}

                <SlideDetails id="details-even" slide={slides[slideState.even]} ctaHref={ctaHref} ctaLabel={ctaLabel} />
                <SlideDetails id="details-odd" slide={slides[slideState.odd]} ctaHref={ctaHref} ctaLabel={ctaLabel} />

                <div id="pagination" className="pagination absolute left-0 top-0 inline-flex">
                    <div className="progress-sub-container ml-6 z-[60] w-[500px] h-[50px] flex items-center">
                        <div className="progress-sub-background w-[500px] h-[3px] bg-white/20">
                            <div className="progress-sub-foreground h-[3px] bg-cream" />
                        </div>
                    </div>
                    <div
                        id="slide-numbers"
                        className="slide-numbers w-[50px] h-[50px] overflow-hidden z-[60] relative ml-6"
                    >
                        {slides.map((slide, i) => (
                            <div
                                key={`slide-item-${slide.title}-${i}`}
                                id={`slide-item-${i}`}
                                className="item w-[50px] h-[50px] absolute text-white top-0 left-0 grid place-items-center text-[32px] font-bold font-midland"
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
