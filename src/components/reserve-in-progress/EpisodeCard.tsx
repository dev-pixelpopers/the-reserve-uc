"use client";
import { useRef, useState } from "react";
import type { EpisodeItem } from "@/types/content";

interface EpisodeCardProps {
    episode: EpisodeItem;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleVideo = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    return (
        <article className="group flex flex-col items-center episode-card">
            <div className="relative w-full max-w-[520px] overflow-hidden cursor-pointer episode-media">
                <video
                    ref={videoRef}
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    className="w-full object-cover relative z-1"
                >
                    <source src={episode.video} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {!isPlaying && (
                    <button
                        type="button"
                        aria-label={`Play ${episode.title}`}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                        onClick={toggleVideo}
                    >
                        <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition-all duration-700 group-hover:scale-110">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </button>
                )}
            </div>

            <div className="mt-[20px] w-full episode-content">
                <span className="block tracking-[0.35em] text-[16px] md:text-[20px] lg:text-[24px] mb-2 font-iconscript text-[#B09983]">
                    {episode.number}
                </span>
                <h3 className="font-midland text-[18px] md:text-[clamp(20px,2vw,30px)] leading-[0.95]">
                    {episode.title}
                </h3>
            </div>
        </article>
    );
}
