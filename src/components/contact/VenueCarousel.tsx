"use client";
import { useEffect, useState } from "react";
import type { VenueImage } from "@/types/content";

interface VenueCarouselProps {
    images: VenueImage[];
    intervalMs?: number;
}

export default function VenueCarousel({ images, intervalMs = 4000 }: VenueCarouselProps) {
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((prev) => (prev + 1) % images.length);
        }, intervalMs);
        return () => clearInterval(interval);
    }, [images.length, intervalMs]);

    return (
        <div className="w-full lg:w-[43%] h-screen static lg:sticky lg:top-0 overflow-hidden relative hidden lg:block content-images">
            {images.map((image, i) => (
                <div
                    key={image.src}
                    className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
                    style={{ opacity: i === activeImage ? 1 : 0 }}
                >
                    <img loading="lazy" decoding="async" src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#202020]" />

            <div className="absolute bottom-[60px] left-[60px] flex flex-row items-center gap-3">
                {images.map((image, i) => (
                    <button
                        key={image.src}
                        type="button"
                        aria-label={`Show image ${i + 1}`}
                        onClick={() => setActiveImage(i)}
                        className={`w-[40px] h-[3px] rounded-full transition-all duration-500 cursor-pointer ${i === activeImage ? 'bg-cream' : 'bg-white/20'}`}
                    />
                ))}
            </div>
        </div>
    );
}
