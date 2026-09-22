"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

interface Props {
	Popupopen?: boolean;
	onClose: () => void;
}

const navLinkClass =
	"font-midland text-[clamp(14px,1.17vw,18px)] leading-[clamp(25px,2.083vw,40px)] text-black transition-colors group-hover:text-[#B09983]";

export default function FullScreenModal({ Popupopen = false, onClose }: Props) {
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!modalRef.current) return;

		if (Popupopen) {
			document.body.style.overflow = "hidden";
			gsap.to(modalRef.current, {
				autoAlpha: 1,
				y: "0%",
				duration: 0.5,
				ease: "none",
			});
		} else {
			gsap.to(modalRef.current, {
				autoAlpha: 0,
				y: "-100%",
				duration: 0.5,
				ease: "none",
				onComplete: () => {
					document.body.style.overflow = "auto";
				},
			});
		}

		return () => {
			// document.body.style.overflow = "auto";
		};
	}, [Popupopen]);

	return (
		<div
			ref={modalRef}
			className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAEEE1] opacity-0 invisible transition-all duration-300 ease-in-out flex flex-col"
			style={{ transform: "translateY(-100%)" }}
		>
			<div className="absolute inset-0">
				<img src="/images/menu-bg.png" alt="" className="h-full w-full object-cover" />
			</div>
			<div
				className="relative flex h-full w-full flex-col items-center justify-start gap-[50px] overflow-y-auto 2xl:px-[175px] xl:px-[130px] lg:px-[100px] pt-[30px] text-white max-lg:gap-[6%] max-lg:px-[4%] max-lg:pb-[6%] max-lg:pt-[5%]"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex w-full shrink-0 flex-row items-center justify-between max-lg:flex-col max-lg:items-start max-lg:gap-[4%]">
					<div>
						<button
							type="button"
							className="flex cursor-pointer flex-row items-center justify-center gap-1 2xl:pb-[100%]"
							onClick={onClose}
						>
							<img src="/images/cross.png" alt="" className="h-[15px] w-[15px]" />
							<span className="font-seasons text-[20px] leading-5 font-normal text-black max-lg:text-[clamp(0.875rem,0.5rem+1vw,1.25rem)] max-lg:leading-[1.25]">
								CLOSE
							</span>
						</button>
					</div>
					<div className="max-lg:flex max-lg:w-full max-lg:justify-center lg:flex lg:flex-1 lg:justify-center">
						<img
							src="/images/Reserve-logo.png"
							alt=""
							className="h-[clamp(150px,11.71vw,225px)] w-[clamp(200px,16.04vw,308px)] object-contain max-lg:h-auto max-lg:w-[min(70%,220px)]"
						/>
					</div>
					<div className="hidden w-[72px] lg:block" aria-hidden />
				</div>

				<div className="w-full lg:pb-[4%] lg:flex lg:flex-row lg:justify-between">
					<div className="flex w-full flex-col items-start justify-center max-lg:gap-0 lg:flex-row lg:gap-10">
						<div className="w-full max-lg:flex max-lg:flex-col max-lg:gap-[10px] max-lg:border-b max-lg:border-[#B09983] max-lg:mb-[10px]">
							<Link href="/" onClick={onClose} className="group block py-3 lg:py-5">
								<span className={navLinkClass}>Home</span>
							</Link>
							<hr className="text-[#B09983]" />
							<Link href="/what-we-offer" onClick={onClose} className="group block py-3 lg:py-5">
								<span className={navLinkClass}>What We Offer</span>
							</Link>
							<hr className="text-[#B09983]" />
							<Link href="/about-the-reserve" onClick={onClose} className="group block py-3 lg:py-5">
								<span className={navLinkClass}>About the Reserve</span>
							</Link>
							<hr className="text-[#B09983]" />
							<Link href="/coming-soon" onClick={onClose} className="group block py-3 lg:py-5">
								<span className={navLinkClass}>Our Portfolio</span>
							</Link>
						</div>
						<div className="w-full max-lg:flex max-lg:flex-col max-lg:gap-[10px]">
							<Link href="/meet-the-founders" onClick={onClose} className="group block py-3 lg:py-5">
								<span className={navLinkClass}>Meet The Founders</span>
							</Link>
							<hr className="text-[#B09983]" />
							<Link href="/contact-us" onClick={onClose} className="group block py-3 lg:py-5">
								<span className={navLinkClass}>Contact Us</span>
							</Link>
							<hr className="text-[#B09983]" />
							<Link href="/the-reserve-in-progress" onClick={onClose} className="group block py-3 lg:py-5">
								<span className={navLinkClass}>The Reserve in Progress</span>
							</Link>
							<hr className="text-[#B09983]" />
						</div>
					</div>
				</div>
				<div className="lg:hidden w-full flex">
					<Link href="/contact-us"
						className="header-btn flex px-4 py-2.5 cursor-pointer items-center justify-center rounded-full border border-white bg-black pt-4 pb-2 text-[18px] font-bold text-white"
					>
						<span className="font-seasons text-[14px] leading-[1.25] lg:text-[18px] lg:leading-normal ">
							<span className="inline">Schedule a Private Tour</span>
						</span>
					</Link>
				</div>
			</div>


		</div>
	);
}
