import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "/coming-soon",
    },
};

export default function ComingSoonLayout({ children }: LayoutProps<"/coming-soon">) {
    return children;
}
