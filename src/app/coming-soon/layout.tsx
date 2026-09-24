import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Portfolio Coming Soon | The Reserve",
    description: "The Reserve’s event portfolio is coming soon. Explore our Union City venue and contact the team to discuss your wedding, corporate event or special occasion.",
    alternates: {
        canonical: "/coming-soon",
    },
};

export default function ComingSoonLayout({ children }: LayoutProps<"/coming-soon">) {
    return children;
}
