"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { BlogPost, SectionHeading } from "@/types/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface PostGridProps {
    heading: SectionHeading;
    posts: BlogPost[];
    postHref?: (post: BlogPost) => string;
}

const cardGradient = 'linear-gradient(to bottom, #F3ECD3 0%, #FFF 100%)';

export default function PostGrid({ heading, posts, postHref = () => '/blogs' }: PostGridProps) {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        cardRefs.current.forEach((card) => {
            if (!card) return;
            gsap.fromTo(
                card,
                { y: 80, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: card, start: 'top 90%', end: '+=200', scrub: 1 },
                }
            );
        });
    }, [posts]);

    return (
        <div className="w-full bg-[#0e1111] px-5 md:px-[129px] py-[120px]">
            <div className="flex flex-col gap-[60px]">
                <div className="flex flex-col md:flex-row justify-between items-center lg:items-end">
                    <h2 className="font-midland text-[30px] md:text-[45px] md:leading-[80px] capitalize text-[#FAF1E1]">
                        {heading.titleTop}
                    </h2>
                    {heading.titleBottom && (
                        <p className="font-seasons max-md:mt-5 text-[20px] text-[#FAF4ED]">
                            {heading.titleBottom}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] auto-rows-auto">
                    {posts.map((post, i) => {
                        const isLarge = post.layout === 'large';

                        return (
                            <div
                                key={post.slug}
                                ref={(el) => { cardRefs.current[i] = el; }}
                                className={`group cursor-pointer ${isLarge ? 'md:col-span-2 md:row-span-1' : 'col-span-1'}`}
                            >
                                {isLarge ? (
                                    <div
                                        className="flex flex-col md:flex-row h-auto md:h-[400px] rounded-[20px] overflow-hidden"
                                        style={{ backgroundImage: cardGradient }}
                                    >
                                        <div className="w-full md:w-1/2 h-[220px] md:h-auto overflow-hidden">
                                            <img loading="lazy" decoding="async"
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover scale-100 group-hover:scale-110 ease-in-out duration-[1500ms]"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 p-[25px] md:p-[40px]">
                                            <div className="flex flex-row items-center gap-3">
                                                <span className="font-seasons text-[14px] uppercase tracking-wider text-cream font-bold">
                                                    {post.category}
                                                </span>
                                                <span className="w-[4px] h-[4px] rounded-full bg-[#242424]/30" />
                                                <span className="font-seasons text-[14px] text-[#242424]/50">
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <h3 className="font-midland text-[25px] leading-[50px] text-[#242424] capitalize">
                                                {post.title}
                                            </h3>
                                            <p className="font-seasons text-[16px] leading-[24px] text-[#242424]/70">
                                                {post.excerpt}
                                            </p>
                                            <Link
                                                href={postHref(post)}
                                                className="font-seasons text-[18px] text-cream font-bold underline"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className="flex flex-col rounded-[20px] overflow-hidden h-[400px]"
                                        style={{ backgroundImage: cardGradient }}
                                    >
                                        <div className="overflow-hidden h-[55%]">
                                            <img loading="lazy" decoding="async"
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover scale-100 group-hover:scale-110 ease-in-out duration-[1500ms]"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-3 p-[25px] flex-1">
                                            <div className="flex flex-row items-center gap-3">
                                                <span className="font-seasons text-[13px] uppercase tracking-wider text-cream font-bold">
                                                    {post.category}
                                                </span>
                                                <span className="font-seasons text-[13px] text-[#242424]/40">
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <h3 className="font-midland text-[20px] leading-[40px] text-[#242424] capitalize">
                                                {post.title}
                                            </h3>
                                            <Link
                                                href={postHref(post)}
                                                className="font-seasons text-[16px] text-cream font-bold underline mt-auto"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
