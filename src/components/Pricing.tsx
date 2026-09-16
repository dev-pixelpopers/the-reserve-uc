import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Pricing() {
    const pricingRef = useRef<HTMLDivElement>(null);
    const customizeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.set(customizeRef.current, { y: 50, opacity: 0 });
        gsap.set('.pricing-bottom', { y: 50, opacity: 0 });
        gsap.set('.pricing-images', { x: 50, opacity: 0 });

        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: pricingRef.current,
                start: 'top 60%',
                end: 'center center',
                scrub: 1
            }
        });

        tl5.to(customizeRef.current, { y: 0, opacity: 1 }, "<")
            .to('.pricing-bottom', { y: 0, opacity: 1 }, "<")
            .to('.pricing-images', { x: 0, opacity: 1 }, "<");
    })

    return (
        <div ref={pricingRef} className='customizeable-experiences-sec relative z-[100] flex h-[100vh] min-h-[800px] max-h-[1200px] w-full flex-col items-center justify-center overflow-hidden bg-[#000000] px-[5%]'
        >
            <div className='flex h-full w-full max-w-[1400px] flex-col items-center justify-between py-[80px] lg:flex-row gap-[clamp(40px,4.167vw,80px)]'>
                <div className='z-10 flex h-full w-full flex-1 flex-col justify-center gap-[20px] lg:gap-[30px] 2xl:gap-[60px]'>
                    <div className='flex flex-col gap-[10px] 2xl:gap-[20px]'>
                        <div ref={customizeRef} className='flex flex-col gap-[20px]'>
                            <h3 className='font-iconscript text-[clamp(42px,4vw,100px)] mb-[-20px] lg:mb-[-40px] leading-[1.2] lg:leading-[1.8] capitalize text-[#B09983] '>
                                Customizable
                            </h3>

                            <h3 className='font-midland text-[clamp(1.625rem,2.854vw,3.426rem)] leading-[1.2] lg:leading-[1.8] capitalize text-[#B09983]'>
                                Experiences
                            </h3>
                        </div>
                    </div>
                    <div className='pricing-bottom flex flex-col gap-[30px] lg:gap-[40px] 2xl:gap-[60px]'>
                        <p className='max-w-[650px] font-seasons text-[clamp(0.875rem,1.146vw,1.375rem)] leading-[1.6] lg:leading-[1.5] font-light text-[#FAF4ED]'>
                            At The Reserve, luxury is defined by intention where every detail is thoughtfully considered, every space is beautifully composed, and every experience feels seamless. It’s not just about how things look, but how they feel: refined, personalized, and effortlessly elevated from beginning to end.
                        </p>
                        <div>
                            <Link
                                href='/contact-us'
                                className='group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-[8%] lg:px-10 py-[14px] lg:py-4 text-[clamp(15px,2vw,18px)] lg:text-[20px] font-bold text-black transition-all duration-500 hover:scale-105'
                            >
                                <span className='font-seasons relative z-10 whitespace-nowrap'>
                                    Request a Quote
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='pricing-images relative flex h-full min-h-max lg:min-h-[420px] max-h-[700px] w-full flex-1 items-center justify-center'>
                    <div className='group absolute right-[40%] top-[3%] lg:right-[10%] h-[250px] lg:top-[10%] z-10 aspect-[4/5] w-[42%] max-w-[200px] lg:w-[350px] lg:max-w-[75%]'>
                        <div className='absolute inset-0 rotate-[6deg] rounded-[24px] lg:rounded-[32px] bg-white/10 transition-transform duration-700 group-hover:rotate-[10deg]'></div>
                        <img
                            src="/images/customize-experience-right.png"
                            className='absolute inset-0 h-full w-full rotate-[-2deg] rounded-[24px] lg:rounded-[32px] object-cover shadow-2xl transition-transform duration-700 group-hover:rotate-0'
                            alt=""
                        />
                    </div>
                    <div className='group absolute -bottom-[15%] left-[40%] lg:left-[-1%] h-[250px] lg:bottom-[5%] z-20 aspect-[4/5] w-[42%] max-w-[200px] lg:w-[350px] lg:max-w-[75%]'>
                        <div className='absolute inset-0 rotate-[-6deg] rounded-[24px] lg:rounded-[32px] bg-white/10 transition-transform duration-700 group-hover:rotate-[-10deg]'></div>
                        <img
                            src="/images/exp-2.png"
                            className='absolute inset-0 h-full w-full rotate-[4deg] rounded-[24px] lg:rounded-[32px] object-cover shadow-2xl transition-transform duration-700 group-hover:rotate-0'
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}