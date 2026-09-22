import Link from "next/link";
import type { PortfolioSlide } from "@/types/content";

interface SlideDetailsProps {
    id: 'details-even' | 'details-odd';
    slide: PortfolioSlide;
    ctaHref: string;
    ctaLabel: string;
}

export default function SlideDetails({ id, slide, ctaHref, ctaLabel }: SlideDetailsProps) {
    return (
        <div className="details absolute top-5 md:top-20 lg:top-[240px] left-[30px] lg:left-[60px] z-[22]" id={id}>
            <div className="place-box h-[46px] overflow-hidden relative">
                <div className="text pt-4 text-[20px] font-seasons relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[30px] before:h-1 before:rounded-full before:bg-white">
                    {slide.place}
                </div>
            </div>
            <div className="title-box-1 mt-[2px] h-fit lg:h-[110px]">
                <div className="title-1 font-midland font-semibold text-[20px] md:text-[40px] lg:text-[72px] leading-[40px] md:leading-[80px] lg:leading-[100px] whitespace-nowrap">
                    {slide.title}
                </div>
            </div>
            <div className="title-box-2 mt-[2px] h-fit lg:h-[110px]">
                <div className="title-2 font-midland font-semibold text-[20px] md:text-[40px] lg:text-[72px] leading-[40px] md:leading-[80px] lg:leading-[100px] whitespace-nowrap">
                    {slide.title2}
                </div>
            </div>
            <div className="desc mt-4 w-[320px] md:w-[500px] lg:w-[500px] font-seasons">
                {slide.description}
            </div>
            <div className="cta w-[500px] mt-6 flex items-center">
                <button
                    type="button"
                    aria-label="Save this story"
                    className="bookmark border-0 bg-cream w-9 h-9 rounded-full text-white grid place-items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path
                            fillRule="evenodd"
                            d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <Link
                    href={ctaHref}
                    className="discover border border-white bg-transparent h-9 rounded-full text-white py-1 px-6 text-[12px] ml-4 uppercase font-seasons flex items-center"
                >
                    {ctaLabel}
                </Link>
            </div>
        </div>
    );
}
