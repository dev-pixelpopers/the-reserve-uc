import type { Metadata } from "next";
import ProgressHero from "@/components/reserve-in-progress/ProgressHero";
import EpisodeGrid from "@/components/reserve-in-progress/EpisodeGrid";
import { reserveInProgressContent } from "@/data/reserve-in-progress";

export const metadata: Metadata = {
    title: "The Reserve in Progress",
    description:
        "From construction milestones to architectural achievements, follow the restoration of The Reserve episode by episode.",
};

export default function TheReserveInProgressPage() {
    return (
        <main className="bg-[#0e1111]">
            <ProgressHero {...reserveInProgressContent.hero} />
            <EpisodeGrid
                heading={reserveInProgressContent.heading}
                episodes={reserveInProgressContent.episodes}
            />
        </main>
    );
}
