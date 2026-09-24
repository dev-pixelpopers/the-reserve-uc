import type { Metadata } from "next";
import ProgressHero from "@/components/reserve-in-progress/ProgressHero";
import EpisodeGrid from "@/components/reserve-in-progress/EpisodeGrid";
import { reserveInProgressContent } from "@/data/reserve-in-progress";

export const metadata: Metadata = {
    title: "The Reserve in Progress | Restoration Video Series",
    description: "Follow The Reserve’s restoration through a video series documenting construction milestones and architectural progress at its historic Union City venue.",
    alternates: {
        canonical: "/the-reserve-in-progress",
    },
};

export default function TheReserveInProgressPage() {
    return (
        <main>
            <ProgressHero {...reserveInProgressContent.hero} />
            <EpisodeGrid
                heading={reserveInProgressContent.heading}
                episodes={reserveInProgressContent.episodes}
            />
        </main>
    );
}
