import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function WhatWeOffer() {
    const offerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.set(offerRef.current, { clipPath: "inset(100% 0% 0% 0%)" });

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: offerRef.current,
                start: 'top 90%',
                end: '+=400',
                scrub: 1,
                // markers: true
            }
        });

        tl4.to(offerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1 });

    }, [])
    return (
        <div className='w-full pt-[8%] lg:pt-[4.17%] px-[5%] lg:px-[7.8125%] bg-[#000000]'>
            <div ref={offerRef} className='offer-sec w-full flex flex-col justify-center items-center'>
                <div className='w-full offer-mobile md:hidden'>
                    <div className='w-full lg:w-[39.0625vw] lg:max-w-[750px] flex flex-row justify-start items-center lg:items-stretch gap-3 lg:gap-5'>
                        <p className='font-seasons text-[clamp(0.875rem,1.354vw,1.625rem)] leading-[1] lg:leading-[0.77] font-bold uppercase whitespace-nowrap text-[#FAF4ED]'>
                            What we offer
                        </p>
                        <hr className='text-white flex-1 lg:flex-none lg:w-[23.4375vw] lg:max-w-[450px]' />
                    </div>
                </div>
                <div className='w-full'>
                    <h3 className='text-[clamp(2.5rem,5.208vw,6.25rem)] font-iconscript font-normal leading-[1.25] text-center pt-1 text-[#FAF1E1]'>
                        Events Worth
                    </h3>
                </div>
                <div className='w-full flex flex-col-reverse md:flex-col lg:flex-row justify-start items-center gap-3 lg:gap-10'>
                    <div className='hidden md:flex w-full lg:w-[39.0625vw] lg:max-w-[750px] flex-row justify-start items-center lg:items-stretch gap-3 lg:gap-5'>
                        <p className='font-seasons text-[clamp(0.875rem,1.354vw,1.625rem)] leading-[1] lg:leading-[0.77] font-bold uppercase whitespace-nowrap text-[#FAF4ED]'>
                            What we offer
                        </p>
                        <hr className='text-white flex-1 lg:flex-none lg:w-[23.4375vw] lg:max-w-[450px]' />
                    </div>
                    <h3 className='text-[clamp(1.5rem,2.854vw,3.426rem)] font-midland font-normal leading-[2.1] lg:leading-[2.281] text-center whitespace-nowrap text-[#FAF1E1]'>
                        Remembering
                    </h3>
                </div>
            </div>
        </div>
    );
}