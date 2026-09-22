interface CTAButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit';
    disabled?: boolean;
}

export default function CTAButton({
    children,
    onClick,
    className = '',
    type = 'button',
    disabled = false,
}: CTAButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`text-white bg-black text-[18px] font-bold pt-4 pb-4 px-6 rounded-full border border-white flex justify-center items-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            onClick={onClick}
        >
            <span className="font-seasons leading-[1]">{children}</span>
        </button>
    );
}
