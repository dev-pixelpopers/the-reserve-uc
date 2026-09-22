interface SectionLabelProps {
    label: string;
    className?: string;
    ruleClassName?: string;
    textClassName?: string;
}

export default function SectionLabel({
    label,
    className = 'flex flex-row items-center gap-5 w-full lg:w-auto',
    ruleClassName = 'w-[120px] md:w-[300px] lg:w-[450px] text-white',
    textClassName = 'font-seasons text-[clamp(18px,1.2vw,26px)] leading-[20px] font-bold uppercase text-[#FAF4ED]',
}: SectionLabelProps) {
    return (
        <div className={className}>
            <p className={textClassName}>{label}</p>
            <hr className={ruleClassName} />
        </div>
    );
}
