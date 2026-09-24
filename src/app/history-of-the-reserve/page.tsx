import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ClosingCTA from "@/components/shared/ClosingCTA";
import HistoryNarrative from "@/components/history/HistoryNarrative";
import { historyContent } from "@/data/history";

export const metadata: Metadata = {
    title: "History of The Reserve | Union City, CA",
    description: "Explore the history of The Reserve, a 1925 bank building in Old Alvarado, Union City, now restored as a venue for weddings and memorable gatherings.",
    alternates: {
        canonical: "/history-of-the-reserve",
    },
};

export default function HistoryOfTheReservePage() {
    return (
        <main className="bg-[#0e1111]">
            <PageHero {...historyContent.hero} parallax />
            <HistoryNarrative paragraphs={historyContent.paragraphs} />
            <ClosingCTA {...historyContent.cta} />
        </main>
    );
}
