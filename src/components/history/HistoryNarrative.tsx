interface HistoryNarrativeProps {
    paragraphs: string[];
}

export default function HistoryNarrative({ paragraphs }: HistoryNarrativeProps) {
    return (
        <div className="mobile-history max-lg:py-20 max-md:pb-100 w-full h-screen font-midland leading-[40px] lg:leading-[60px] flex flex-col items-center justify-evenly text-center bg-[#0e1111]">
            {paragraphs.map((paragraph, i) => (
                <p
                    key={i}
                    className="inline-block max-w-[1200px] mr-[8px] md:mr-[12px] lg:mr-[16px] accent-[#DEC7AD] text-white"
                >
                    {paragraph}
                </p>
            ))}
        </div>
    );
}
