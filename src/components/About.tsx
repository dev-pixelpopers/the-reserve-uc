"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
    const aboutSectionRef = useRef<HTMLDivElement>(null);
    const aboutMohImageRef = useRef<HTMLImageElement>(null);
    const AboutButtonRef = useRef<HTMLAnchorElement>(null);
    const AboutHeading1Ref = useRef<HTMLDivElement>(null);
    const AboutHeading2Ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.set([AboutHeading1Ref.current, AboutHeading2Ref.current], { clipPath: 'inset(100% 0% 0% 0%)' });
        gsap.set(AboutButtonRef.current, { opacity: 0 });
        gsap.set([aboutMohImageRef.current], { x: 200 });
        const tl3_1 = gsap.timeline({
            scrollTrigger: {
                trigger: aboutSectionRef.current,
                start: 'top 40%',
                end: '+=200',
                scrub: 1
            }
        });
        tl3_1.to([aboutMohImageRef.current], { x: 0 });

        const tl3_2 = gsap.timeline({
            scrollTrigger: {
                trigger: aboutSectionRef.current,
                start: window.innerWidth <= 1000 ? 'top 80%' : 'top top',
                end: '+=500',
                scrub: 1
            }
        });
        tl3_2.to([AboutHeading1Ref.current, AboutHeading2Ref.current], { clipPath: 'inset(0% 0% 0% 0%)' });
        tl3_2.to(AboutButtonRef.current, { opacity: 1 });
    })

    return (
        <div ref={aboutSectionRef} className="about-home-sec w-full relative lg:min-h-[180vh] overflow-x-hidden lg:overflow-x-clip">
            <div className='w-full flex flex-col justify-center items-center bg-[#000000] lg:sticky lg:top-0 lg:min-h-screen'>
                <div className='w-full flex flex-col lg:flex-row justify-center items-center lg:items-end px-[6%] lg:px-[6.72%] pt-[14%] lg:pt-[6.25%] pb-[10%] lg:pb-[0%] gap-10'>
                    <div className='w-full lg:w-[25%] flex flex-col justify-start items-center gap-6 lg:gap-10 lg:min-h-[74dvh] order-2 lg:order-1'>
                        <div className='w-full flex justify-center'>
                            <img ref={aboutMohImageRef} src="/images/moh-img.jpg" alt="" className='w-full aspect-[3/4] object-cover max-w-[250px] lg:max-w-[384px] lg:max-w-none ' />
                        </div>
                    </div>
                    <div className='w-full lg:w-[50%] flex flex-col justify-start items-start lg:min-h-[74dvh] pt-0 lg:pt-[3vw] gap-[clamp(1rem,1.354vw,1.625rem)] order-1 lg:order-2'>
                        <div ref={AboutHeading1Ref} className='w-full flex flex-row justify-start items-center gap-6 lg:gap-10'>
                            <div>
                                <p className='uppercase text-[clamp(1rem,1.354vw,1.625rem)] font-seasons leading-[1.46] font-bold whitespace-nowrap text-[#FAF4ED]'>Who we are</p>
                            </div>
                            <div className='flex-1 lg:flex-none lg:w-[19.0625vw] lg:max-w-[366px]'>
                                <hr className=' text-white' />
                            </div>
                        </div>
                        <div className='flex flex-col justify-start items-start gap-[clamp(1rem,1.354vw,1.625rem)] relative w-full'>
                            <div ref={AboutHeading2Ref} className='w-full'>
                                <h3 className='font-iconscript text-[clamp(2.25rem,4.17vw,5rem)] leading-[1.5625] pt-1 -mb-2 lg:-mb-4 font-normal w-full lg:w-[52.083vw] lg:max-w-[1000px] text-[#FAF1E1]'>
                                    Where History Meets
                                </h3>
                                <h3 className='font-midland text-[clamp(1.625rem,2.854vw,3.426rem)] leading-[1.825] font-normal mb-4 w-full lg:w-[52.083vw] lg:max-w-[1000px] text-[#FAF1E1]'>
                                    Modern Elegance
                                </h3>
                                <p className='font-seasons text-[clamp(0.875rem,1.146vw,1.375rem)] font-light leading-[1.82] w-full lg:w-[80%] text-[#FAF4ED]'>
                                    The Reserve is more than a venue  it is a thoughtfully restored piece of history. Originally built with character and craftsmanship, the building has undergone a complete renovation to preserve its architectural integrity while introducing modern luxury amenities.
                                </p>
                            </div>
                            <Link href="/meet-the-founders"
                                ref={AboutButtonRef}
                                className="text-white bg-black text-[clamp(0.875rem,0.938vw,1.125rem)] font-bold pt-4 pb-4 px-6 rounded-full border border-white flex justify-center items-center cursor-pointer"
                            >
                                <span className="font-seasons leading-[1]">
                                    More About Us
                                </span>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}