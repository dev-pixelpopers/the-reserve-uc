"use client";
import { useRef, useState } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import CTAButton from "@/components/shared/CTAButton";

gsap.registerPlugin(useGSAP);

interface InquiryFormProps {
    eventTypes: string[];
    endpoint?: string;
}

const inputClasses =
    'w-full bg-transparent border-b border-white/20 py-5 text-white font-seasons text-[18px] leading-[30px] outline-none focus:border-cream transition-colors duration-300 placeholder:text-white/25';

export default function InquiryForm({ eventTypes, endpoint = '/api/contact' }: InquiryFormProps) {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const formRef = useRef<HTMLFormElement>(null);
    const formFieldRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        formFieldRefs.current.forEach((el, i) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6 + i * 0.12 }
            );
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = Object.fromEntries(new FormData(e.currentTarget).entries());

        setStatus('sending');
        setErrorMsg('');

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const body = await res.json().catch(() => ({}));

            if (!res.ok) {
                setErrorMsg(body.error ?? 'Something went wrong. Please try again.');
                setStatus('error');
                return;
            }

            formRef.current?.reset();
            setStatus('sent');
        } catch {
            setErrorMsg('We could not reach the server. Please check your connection and try again.');
            setStatus('error');
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-[8px]">
            <div ref={(el) => { formFieldRefs.current[0] = el; }} className="flex flex-row gap-[30px]">
                <input type="text" name="name" placeholder="Your Name" autoComplete="off" required maxLength={100} className={inputClasses} />
                <input type="email" name="email" placeholder="Email" autoComplete="off" required maxLength={100} className={inputClasses} />
            </div>

            <div ref={(el) => { formFieldRefs.current[1] = el; }} className="flex flex-row gap-[30px]">
                <input type="tel" name="phone" placeholder="Phone" autoComplete="off" maxLength={100} className={inputClasses} />
                <select name="eventType" defaultValue="" autoComplete="off" className={`${inputClasses} appearance-none`}>
                    <option value="" disabled className="bg-[#0e1111]">Event Type</option>
                    {eventTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#0e1111]">{type}</option>
                    ))}
                </select>
            </div>

            <div ref={(el) => { formFieldRefs.current[2] = el; }} className="flex flex-row gap-[30px]">
                <input type="date" name="date" autoComplete="off" className={`${inputClasses} date-input`} />
                <input type="number" name="guests" placeholder="Guest Count" autoComplete="off" min={1} className={inputClasses} />
            </div>

            <div ref={(el) => { formFieldRefs.current[3] = el; }}>
                <textarea name="message" placeholder="Tell us about your vision..." autoComplete="off" required maxLength={5000} rows={3} className={`${inputClasses} resize-none`} />
            </div>

            <div ref={(el) => { formFieldRefs.current[4] = el; }} className="mt-4 flex flex-col gap-5">
                <div>
                    <CTAButton type="submit" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
                    </CTAButton>
                </div>
                <p aria-live="polite" className="font-seasons text-[18px] leading-[30px]">
                    {status === 'sent' && (
                        <span className="text-cream">
                            Thank you — your inquiry is on its way. We&apos;ll be in touch shortly.
                        </span>
                    )}
                    {status === 'error' && <span className="text-[#e58b7b]">{errorMsg}</span>}
                </p>
            </div>
        </form>
    );
}
