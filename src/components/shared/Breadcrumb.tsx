import Link from "next/link";
import type { BreadcrumbItem } from "@/types/content";

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items = [] }: BreadcrumbProps) {
    return (
        <div className="breadcrumb z-10">
            <nav className="flex items-center gap-2 lg:gap-3 text-[6px] lg:text-[8px] uppercase tracking-[0.25em] text-[#FAF4ED] font-midland">
                {items.map((item, index) => (
                    <span key={index} className="flex items-center gap-3">
                        <Link href={item.href} className="hover:text-[#FAF4ED] transition">
                            {item.text}
                        </Link>
                        {index !== items.length - 1 && (
                            <span className="opacity-40">/</span>
                        )}
                    </span>
                ))}
            </nav>
        </div>
    );
}
