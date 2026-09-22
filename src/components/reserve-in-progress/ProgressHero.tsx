import Breadcrumb from "@/components/shared/Breadcrumb";
import type { PageHeroContent } from "@/types/content";

export default function ProgressHero({
    title,
    subtitle,
    lead,
    image,
    imageAlt,
    breadcrumbs,
}: PageHeroContent) {
    return (
        <div className="relative w-full h-screen flex flex-col justify-center md:justify-end pb-[5.1%] md:pb-[2.1%] overflow-hidden bg-[#0e1111]">
            <div className="absolute inset-0">
                <img src={image} alt={imageAlt} className="h-full w-full object-cover opacity-30 mix-blend-multiply" />
            </div>

            <div className="relative z-10 flex flex-col px-8 md:px-16 lg:px-25 gap-[20px] md:gap-[50px]">
                <Breadcrumb items={breadcrumbs} />
                <div className="relative z-10 flex flex-col gap-4">
                    <h1 className="max-w-[1000px] font-iconscript text-[clamp(48px,7vw,80px)] leading-[1.05] lg:leading-[100px] capitalize lg:-mb-8 text-[#FAF1E1]">
                        {title}
                    </h1>
                    {subtitle && (
                        <h2 className="max-w-[1000px] font-midland text-[clamp(30px,5vw,60px)] leading-[1.05] lg:leading-[100px] capitalize text-[#FAF1E1]">
                            {subtitle}
                        </h2>
                    )}
                    {lead && (
                        <p className="max-w-[clamp(300px,36.458vw,700px)] font-seasons text-[clamp(16px,2vw,26px)] leading-[1.6] lg:leading-[45px] text-[#FAF4ED]">
                            {lead}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
