import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ClosingCTA from "@/components/shared/ClosingCTA";
import HistoryNarrative from "@/components/history/HistoryNarrative";
import { historyContent } from "@/data/history";

export const metadata: Metadata = {
    title: "History of The Reserve",
    description:
        "One hundred years in Old Alvarado — from the 1925 Bank of Alvarado to the restored event venue The Reserve is today.",
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
