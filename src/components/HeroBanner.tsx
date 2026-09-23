"use client";
import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroBanner() {
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        gsap.set(h1Ref.current, { clipPath: "inset(0 50% 0 50%)", opacity: 0 });
        gsap.set(imgRef.current, { y: "100%", opacity: 0 });

        document.fonts.ready.then(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {

                    // Reveal elements (opacity back to 1) then animate
                    gsap.set(h1Ref.current, { opacity: 1 });

                    const tl = gsap.timeline({ delay: 0.2 });

                    // Step 1  "A Legacy Over" unclips centre → both edges
                    tl.fromTo(
                        h1Ref.current,
                        { clipPath: "inset(0 50% 0 50%)" },
                        { clipPath: "inset(0 0% 0 0%)", duration: 1.4, ease: "power2.inOut" }
                    )
                        // Step 3  Image slides up
                        .fromTo(
                            imgRef.current,
                            { y: "100%", opacity: 0 },
                            { y: "0%", opacity: 1, duration: 1.4, ease: "power3.out" },
                            "-=0.2"
                        );
                });
            });
        });
    }, [])
    return (
        <div className="bg-black w-full min-h-screen flex flex-col pt-[14vh] sm:pt-[14vh] md:pt-[14vh] lg:pt-[180px] pl-[5vw] lg:pl-0" >
            <div className="flex justify-center flex-shrink-0">
                <h1 ref={h1Ref}
                    className="font-iconscript text-[#FAF1E1] overflow-visible whitespace-nowrap z-20 text-[clamp(2.2rem,7vw,140px)]"
                    style={{
                        lineHeight: 1.4,
                        clipPath: "inset(0 50% 0 50%)",
                        willChange: "clip-path",
                        opacity: 0,
                    }}
                >
                    Hidden Grandeur
                </h1>
            </div>
            <div className="flex  overflow-hidden gap-2 sm:gap-3 md:gap-4 lg:gap-8 flex-1 min-h-0 justify-center">
                <div className="w-[100%] lg:w-[58%] h-[70%] md:h-[380px] lg:h-full overflow-hidden flex-shrink-0 lg:flex-shrink">
                    <img decoding="async"
                        ref={imgRef}
                        src="/images/bg-banner.webp"
                        alt="The Reserve luxury venue"
                        className="w-full h-full object-cover object-top block"
                        style={{
                            transform: "translateY(100%)",
                            opacity: 0,
                            willChange: "transform, opacity",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}