import Link from "next/link";

function Footer() {
    return (
        <footer className='relative flex w-full flex-col justify-between items-center gap-[60px] lg:gap-20 px-[5%] lg:px-[8%] pt-[7.5%] lg:pt-36 pb-[5%] lg:pb-16.5 overflow-hidden'>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/menu-bg.png)' }} />
            <div className="relative z-10 flex w-full flex-col lg:flex-row justify-center items-start gap-[clamp(0px,2.604vw,50px)]">
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                    <Link href="/">
                        <img alt="" className="w-[220px] sm:w-[260px] lg:w-[308px] h-[90px] object-contain" src="/images/Reserve-logo.png" />
                    </Link>
                </div>
                <div className="lg:w-1/3 max-lg:w-full">
                    <Link href="/" className="group block py-3 lg:py-5">
                        <span className="font-midland text-[clamp(14px,1.17vw,18px)] leading-[clamp(25px,2.083vw,40px)] text-black transition-colors group-hover:text-[#B09983] whitespace-nowrap">Home</span>
                    </Link>
                    <hr className="border-[#B09983]" />
                    <Link href="/what-we-offer" className="group block py-3 lg:py-5">
                        <span className="font-midland text-[clamp(14px,1.17vw,18px)] leading-[clamp(25px,2.083vw,40px)] text-black transition-colors group-hover:text-[#B09983] whitespace-nowrap">What We Offer</span>
                    </Link>
                    <hr className="border-[#B09983]" />
                    <Link href="/about-the-reserve" className="group block py-3 lg:py-5">
                        <span className="font-midland text-[clamp(14px,1.17vw,18px)] leading-[clamp(25px,2.083vw,40px)] text-black transition-colors group-hover:text-[#B09983] whitespace-nowrap">About the Reserve</span>
                    </Link>
                    <hr className="border-[#B09983]" />
                    <Link href="/coming-soon" className="group block py-3 lg:py-5">
                        <span className="font-midland text-[clamp(14px,1.17vw,18px)] leading-[clamp(25px,2.083vw,40px)] text-black transition-colors group-hover:text-[#B09983] whitespace-nowrap">Our Portfolio</span>
                    </Link>
                    <hr className="border-[#B09983] md:hidden" />
                </div>
                <div className="lg:w-1/3 max-lg:w-full">
                    <Link href="/meet-the-founders" className="group block py-3 lg:py-5"><span className="font-midland text-[clamp(14px,1.17vw,18px)] leading-[clamp(25px,2.083vw,40px)] text-black transition-colors group-hover:text-[#B09983] whitespace-nowrap">Meet The Founders</span></Link>
                    <hr className="border-[#B09983]" />
                    <Link href="/contact-us" className="group block py-3 lg:py-5"><span className="font-midland text-[clamp(14px,1.17vw,18px)] leading-[clamp(25px,2.083vw,40px)] text-black transition-colors group-hover:text-[#B09983] whitespace-nowrap">Contact Us</span></Link>
                    <hr className="border-[#B09983]" />
                    <Link href="/the-reserve-in-progress" className="group block py-3 lg:py-5"><span className="font-midland text-[clamp(14px,1.17vw,18px)] leading-[clamp(25px,2.083vw,40px)] text-black transition-colors group-hover:text-[#B09983] whitespace-nowrap">The Reserve in Progress</span></Link>
                </div>
            </div>
            <div className="relative z-10 flex w-full flex-col lg:flex-row justify-between items-center gap-[20px] lg:gap-0">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <p className="font-seasons text-[clamp(15px,2vw,22px)] leading-[1.5] font-normal">
                        ©2026. The Reserve . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;