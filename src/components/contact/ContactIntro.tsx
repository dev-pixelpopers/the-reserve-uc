import Breadcrumb from "@/components/shared/Breadcrumb";
import type { BreadcrumbItem } from "@/types/content";

interface ContactIntroProps {
    eyebrow: string;
    title: string;
    subtitle?: string;
    lead?: string;
    breadcrumbs: BreadcrumbItem[];
    children?: React.ReactNode;
}

export default function ContactIntro({
    eyebrow,
    title,
    subtitle,
    lead,
    breadcrumbs,
    children,
}: ContactIntroProps) {
    return (
        <div className="w-full lg:w-[55%] flex flex-col justify-center relative content-sec">
            <div className="contact-us-sec max-w-full lg:max-w-[800px] px-[5%] py-[40%] lg:py-[35%]">
                <div className="mb-[50px]">
                    <Breadcrumb items={breadcrumbs} />
                </div>

                <div className="flex flex-row items-center gap-5 mb-5 md:mb-6">
                    <p className="font-seasons text-[clamp(16px,1.953vw,26px)] leading-[clamp(18px,2.344vw,30px)] font-bold uppercase text-[#FAF4ED]">
                        {eyebrow}
                    </p>
                    <hr className="w-[100px] md:w-[300px] lg:w-[450px] text-white" />
                </div>

                <div>
                    <h1 className="font-iconscript text-[30px] md:text-[clamp(38px,4vw,80px)] leading-[3] lg:leading-[120px] capitalize -mb-8 text-[#FAF1E1]">
                        {title}
                    </h1>
                    {subtitle && (
                        <h2 className="font-midland text-[clamp(28px,2.734vw,60px)] leading-[clamp(56px,5.208vw,100px)] capitalize mb-4 text-[#FAF1E1]">
                            {subtitle}
                        </h2>
                    )}
                </div>

                {lead && (
                    <p className="font-seasons text-[20px] leading-[35px] mb-[50px] text-[#FAF4ED] lg:max-w-[600px]">
                        {lead}
                    </p>
                )}

                {children}
            </div>
        </div>
    );
}
