import type { FounderProfileContent } from "@/types/content";

interface FounderProfileProps extends FounderProfileContent {
    imageRef?: React.Ref<HTMLImageElement>;
    textRef?: React.Ref<HTMLDivElement>;
}

export default function FounderProfile({
    role,
    name,
    image,
    imageAlt,
    signature,
    signatureAlt,
    paragraphs,
    sectionClassName,
    reverse = false,
    imageRef,
    textRef,
}: FounderProfileProps) {
    const imageBlock = (
        <div className="w-full lg:w-[35%]">
            <img
                ref={imageRef}
                src={image}
                alt={imageAlt}
                className={`w-full object-contain object-top ${reverse ? 'h-[420px] sm:h-[520px] lg:h-[600px]' : 'h-[420px] sm:h-[550px] lg:h-[700px]'}`}
            />
            <div className="w-full h-[400px] flex justify-center items-center">
                <img src={signature} alt={signatureAlt} className="w-[40%] lg:w-auto max-w-full" />
            </div>
        </div>
    );

    const textBlock = (
        <div
            ref={textRef}
            className={`w-full lg:w-[65%] flex flex-col gap-4 md:gap-6 lg:gap-8 ${reverse ? 'pt-0 lg:pt-[60px] mt-[10%] lg:mt-0' : 'pt-0 md:pt-0'}`}
        >
            <div>
                <h4 className="font-iconscript text-[clamp(2.2rem,5vw,60px)] leading-[1.2] lg:leading-[50px] capitalize text-[#FAF1E1]">
                    {role}
                </h4>
                <h3 className="font-midland text-[clamp(1.8rem,5.5vw,48px)] leading-[1.6] lg:leading-[90px] capitalize text-[#FAF1E1]">
                    {name}
                </h3>
            </div>

            <div className={`flex flex-col gap-4 ${reverse ? 'md:gap-5 lg:gap-6' : 'md:gap-6 lg:gap-8'}`}>
                {paragraphs.map((paragraph, i) => (
                    <p
                        key={i}
                        className="font-seasons text-[clamp(1rem,2.2vw,22px)] leading-[1.6] lg:leading-[40px] text-[#FAF4ED]"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );

    return (
        <div
            className={`${sectionClassName} flex ${reverse ? 'flex-col-reverse xl:flex-row items-start gap-[clamp(20px,2.083vw,40px)]' : 'flex-col xl:flex-row items-start gap-[clamp(40px,4.167vw,80px)] mb-[60px] md:mb-[120px] lg:mb-[180px] relative'}`}
        >
            {reverse ? (
                <>
                    {textBlock}
                    {imageBlock}
                </>
            ) : (
                <>
                    {imageBlock}
                    {textBlock}
                </>
            )}
        </div>
    );
}
