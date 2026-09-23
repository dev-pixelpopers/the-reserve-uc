"use client"
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PortfolioHome() {
    const PortfolioRef = useRef<HTMLDivElement>(null);
    const PortfolioHeadingRef = useRef<HTMLDivElement>(null);
    const PortfolioHeading1Ref = useRef<HTMLDivElement>(null);
    const PortfolioHeading2Ref = useRef<HTMLDivElement>(null);
    const PortfolioSec2Ref = useRef<HTMLDivElement>(null);
    const PortfolioImage1Ref = useRef<HTMLDivElement>(null);
    const PortfolioImage2Ref = useRef<HTMLDivElement>(null);
    const PortfolioImage3Ref = useRef<HTMLDivElement>(null);
    const [portfolioImageHeight, setportfolioImageHeight] = useState<string>("870px");
    const [portfolioImageHeightInitial, setportfolioImageHeightInitial] = useState<string>("750px");
    const [portfolioStart, setPortfolioStart] = useState<string>("top+=200 top");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setportfolioImageHeight("100dvh");
                setportfolioImageHeightInitial("100dvh");
                setPortfolioStart("top+=100 top");
            } else {
                setportfolioImageHeight("870px");
                setportfolioImageHeightInitial("750px");
                setPortfolioStart("top+=200 top");
            }
        };

        // 1. Run once immediately on mount to catch the initial size (e.g., 390px)
        handleResize();

        // 2. Listen for any subsequent screen resizing
        window.addEventListener('resize', handleResize);

        // 3. Cleanup the listener when the component unmounts to prevent memory leaks
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useGSAP(() => {
        gsap.set([PortfolioHeading1Ref.current, PortfolioHeading2Ref.current], { clipPath: "inset(0% 0% 100% 0%)" });
        gsap.set(PortfolioHeadingRef.current, { clipPath: "inset(0% 100% 0% 0%)" });
        const tl6_1 = gsap.timeline({
            scrollTrigger: {
                trigger: PortfolioRef.current,
                start: 'top 80%',
                end: '+=500',
                scrub: 1
            }
        });

        tl6_1.to([PortfolioHeading1Ref.current, PortfolioHeading2Ref.current], { clipPath: "inset(0% 0% 0% 0%)", duration: 1 });
        tl6_1.to(PortfolioHeadingRef.current, { clipPath: "inset(0%)", duration: 1 }, "<");

        gsap.set([PortfolioImage1Ref.current, PortfolioImage2Ref.current], { x: 0 });
        gsap.set([PortfolioImage3Ref.current], { width: '1000px', height: portfolioImageHeightInitial });
        const tl6_2 = gsap.timeline({
            scrollTrigger: {
                trigger: PortfolioSec2Ref.current,
                start: portfolioStart,
                end: '+=500',
                scrub: 1
            }
        });
        tl6_2.to([PortfolioImage1Ref.current], { x: -1200, duration: 1 });
        tl6_2.to([PortfolioImage2Ref.current], { x: 1200, duration: 1 }, "<");
        tl6_2.to([PortfolioImage3Ref.current], { width: '1920px', height: portfolioImageHeight, duration: 1 }, "<");
    }, [portfolioImageHeight, portfolioImageHeightInitial])
    return (
        <div ref={PortfolioRef}
            className='portfolio-sec relative flex min-h-[250vh] w-full flex-col gap-[clamp(80px,10vw,129px)] pt-20 bg-[#000000]'
        >
            <div className='flex w-full flex-col items-center justify-center gap-0 px-[5%] 2xl:px-[150px]'>
                <div className='w-full md:hidden'>
                    <div ref={PortfolioHeadingRef}
                        className='flex w-full md:w-[55%] xl:w-[46%] flex-row items-center justify-start gap-[20px] lg:gap-[14px] xl:gap-5 pt-0 xl:pt-8'
                    >
                        <p className='whitespace-nowrap font-seasons text-[14px] sm:text-[16px] md:text-[18px] xl:text-[22px] 2xl:text-[26px] leading-[2] font-bold uppercase text-[#B09983]'>
                            OUR PORTFOLIO
                        </p>
                        <hr className='w-full xl:w-[65%] 2xl:w-[450px] border-[#B09983]' />
                    </div>
                </div>
                <div className='w-full'>
                    <h3 ref={PortfolioHeading1Ref}
                        className='font-iconscript text-[40px] md:text-[48px] sm:text-[60px] md:text-[75px] xl:text-[90px] 2xl:text-[100px] font-normal leading-[2] 2xl:leading-[130px] text-center text-[#B09983]'
                    >
                        A Glimpse Into
                    </h3>
                </div>
                <div className='flex w-full flex-col-reverse items-center justify-start gap-[15px] md:flex-row md:items-start xl:gap-[40px] xl:mt-0'>
                    <div ref={PortfolioHeadingRef}
                        className='hidden md:flex w-full md:w-[55%] xl:w-[46%] flex-col md:flex-row items-center justify-start gap-[20px] lg:gap-[14px] xl:gap-5 pt-0 xl:pt-8'
                    >
                        <p className='whitespace-nowrap font-seasons text-[14px] sm:text-[16px] md:text-[18px] xl:text-[22px] 2xl:text-[26px] leading-[2] font-bold uppercase text-[#B09983]'>
                            OUR PORTFOLIO
                        </p>
                        <hr className='w-full xl:w-[65%] 2xl:w-[450px] border-[#B09983]' />
                    </div>
                    <h3
                        ref={PortfolioHeading2Ref}
                        className='font-midland text-[28px] md:text-[48px] xl:text-[52px] 2xl:text-[54.81px] font-normal leading-[2] 2xl:leading-[125px] text-center text-[#B09983]'
                    >
                        The Reserve
                    </h3>
                </div>
            </div>
            <div ref={PortfolioSec2Ref} className='portfolio-sec-2 sticky top-[84px] flex h-auto lg:h-[97.5vh] w-full flex-col lg:flex-row items-center justify-center gap-[20px] lg:gap-0 overflow-hidden px-[5%] lg:px-0'>
                <div ref={PortfolioImage1Ref}
                    className='relative z-10 h-[300px] sm:h-[400px] lg:h-full w-full lg:w-1/2 overflow-hidden rounded-[24px] lg:rounded-none'
                >
                    <img loading="lazy" decoding="async"
                        src="/images/where-it-all-started-jpg.webp"
                        className='h-full w-full object-cover scale-100 transition-transform duration-[1500ms] ease-in-out hover:scale-125'
                        alt=""
                    />
                    <div className="absolute inset-0 bg-black/30 w-full h-full"></div>
                    <div className='absolute bottom-14 flex w-full flex-col items-center justify-center px-[5%] 3xl:pb-[5%] lg:pb-[10%]'>

                        <Link href="/history-of-the-reserve">
                            <h4 className='w-full max-w-[500px] font-seasons text-[clamp(30px,5vw,66px)] leading-[1.1] lg:leading-[70px] text-center capitalize text-[#FAF1E1] drop-shadow-[2px_4px_10px_rgba(0,0,0,0.9)]'>
                                History of the reserve
                            </h4>
                        </Link>
                    </div>
                </div>
                <div
                    ref={PortfolioImage2Ref}
                    className='relative z-10 h-[390px] sm:h-[400px] lg:h-full w-full lg:w-1/2 overflow-hidden rounded-[24px] lg:rounded-none'
                >
                    <img loading="lazy" decoding="async"
                        src="/images/where-we-are-today-jpg.webp"
                        className='h-full w-full object-cover scale-100 transition-transform duration-[1500ms] ease-in-out hover:scale-125'
                        alt=""
                    />
                    <div className="absolute inset-0 bg-black/30 w-full h-full"></div>
                    <div className='absolute bottom-14 flex w-full flex-col items-center justify-center px-[5%] 3xl:pb-[5%] lg:pb-[10%]'>

                        <Link href="/where-we-are-today">
                            <h4 className='w-full max-w-[500px] font-seasons text-[clamp(30px,5vw,66px)] leading-[1.1] lg:leading-[70px] text-center capitalize text-[#FAF1E1]'>
                                Where we are Today
                            </h4>
                        </Link>

                        {/* <Link
                            className='font-seasons text-[clamp(18px,3vw,30px)] leading-[1.3] lg:leading-[70px] text-center capitalize text-white'
                            to="/where-we-are-today"
                        >
                            Learn More
                        </Link> */}
                    </div>
                </div>
                <div
                    ref={PortfolioImage3Ref}
                    className='absolute z-0 lg:block w-full lg:w-[1000px] h-full lg:h-[780px]'
                >
                    <img loading="lazy" decoding="async"
                        src="/images/where-section-bg.webp"
                        className='h-full w-full object-cover'
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}