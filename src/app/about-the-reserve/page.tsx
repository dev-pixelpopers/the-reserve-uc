import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ClosingCTA from "@/components/shared/ClosingCTA";
import StatementReveal from "@/components/about/StatementReveal";
import HistoryTimeline from "@/components/about/HistoryTimeline";
import { aboutContent } from "@/data/about";

export const metadata: Metadata = {
    title: "About Our Historic Event Venue | The Reserve",
    description:
        "Discover how The Reserve transformed a historic Union City landmark into an elegant event venue, preserving its original character and adding modern amenities.",
    alternates: {
        canonical: "/about-the-reserve",
    },
};

export default function AboutPage() {
    return (
        <main className="bg-[#0e1111]">
            <PageHero {...aboutContent.hero} />
            <StatementReveal statement={aboutContent.statement} />
            <HistoryTimeline heading={aboutContent.timelineHeading} items={aboutContent.timeline} />
            <ClosingCTA {...aboutContent.cta} />
        </main>
    );
}
