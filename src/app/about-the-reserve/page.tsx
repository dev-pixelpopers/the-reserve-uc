import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ClosingCTA from "@/components/shared/ClosingCTA";
import StatementReveal from "@/components/about/StatementReveal";
import HistoryTimeline from "@/components/about/HistoryTimeline";
import { aboutContent } from "@/data/about";

export const metadata: Metadata = {
    title: "About The Reserve",
    description:
        "A historic 1925 landmark in Old Alvarado, restored and reimagined as an elegant event venue where history meets modern elegance.",
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
