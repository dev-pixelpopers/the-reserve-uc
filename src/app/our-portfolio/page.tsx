import type { Metadata } from "next";
import MosaicHero from "@/components/portfolio/MosaicHero";
import PortfolioSlider from "@/components/portfolio/PortfolioSlider";
import ParallaxSection from "@/components/shared/ParallaxSection";
import { portfolioContent } from "@/data/portfolio";

export const metadata: Metadata = {
    title: "Our Portfolio",
    description:
        "Weddings, galas, milestones and private dinners — a look at the moments The Reserve has had the privilege to host.",
};

export default function OurPortfolioPage() {
    return (
        <main className="bg-[#0e1111]">
            <MosaicHero {...portfolioContent.hero} />
            <PortfolioSlider slides={portfolioContent.slides} />
            <ParallaxSection {...portfolioContent.closing} heightClass="h-[80vh]" />
        </main>
    );
}
