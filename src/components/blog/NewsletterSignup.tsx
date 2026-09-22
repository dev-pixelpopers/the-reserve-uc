"use client";
import { useRef, useState } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTAButton from "@/components/shared/CTAButton";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface NewsletterSignupProps {
    heading: string;
    body: string;
    placeholder: string;
    buttonLabel: string;
    endpoint?: string;
}

export default function NewsletterSignup({
    heading,
    body,
    placeholder,
    buttonLabel,
    endpoint,
}: NewsletterSignupProps) {
    const newsletterRef = useRef<HTMLDivElement>(null);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    useGSAP(() => {
        gsap.fromTo(
            newsletterRef.current,
            { clipPath: 'inset(100% 0% 0% 0%)' },
            {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1,
                scrollTrigger: {
                    trigger: newsletterRef.current,
                    start: 'top 85%',
                    end: '+=400',
                    scrub: 1,
                },
            }
        );
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!endpoint) {
            setStatus('sent');
            setEmail('');
            return;
        }

        setStatus('sending');

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) {
                setStatus('error');
                return;
            }

            setEmail('');
            setStatus('sent');
        } catch {
            setStatus('error');
        }
    };

    return (
        <div
            ref={newsletterRef}
            className="w-full bg-[#242424] px-5 p-[10px] md:px-[40px] lg:px-[129px] py-[120px]"
        >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-[80px] border border-white/10 rounded-[30px] p-[20px] md:p-[80px]">
                <div className="flex flex-col gap-4 max-w-[550px]">
                    <h2 className="font-midland text-2xl md:text-[45px] md:leading-[80px] capitalize text-[#FAF1E1]">
                        {heading}
                    </h2>
                    <p className="font-seasons text-lg md:text-[20px] leading-[35px] text-[#FAF4ED]">
                        {body}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                    <div className="flex flex-row gap-4">
                        <input
                            type="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={placeholder}
                            className="bg-transparent border-b border-white/30 lg:py-4 px-2 text-white font-seasons text-[18px] leading-[30px] outline-none focus:border-cream transition-colors placeholder:text-white/30 w-full lg:w-[350px]"
                        />
                        <CTAButton type="submit" disabled={status === 'sending'}>
                            {buttonLabel}
                        </CTAButton>
                    </div>
                    <p aria-live="polite" className="font-seasons text-[16px] leading-[28px]">
                        {status === 'sent' && <span className="text-cream">You&apos;re on the list.</span>}
                        {status === 'error' && (
                            <span className="text-[#e58b7b]">We could not subscribe you right now. Please try again.</span>
                        )}
                    </p>
                </form>
            </div>
        </div>
    );
}
