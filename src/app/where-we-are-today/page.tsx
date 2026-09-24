import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import WordReveal from "@/components/shared/WordReveal";
import ClosingCTA from "@/components/shared/ClosingCTA";
import { whereWeAreTodayContent } from "@/data/where-we-are-today";

export const metadata: Metadata = {
    title: "The Reserve Today | Historic Venue in Union City",
    description: "See how a century-old Union City landmark has been restored and reopened as The Reserve, a venue for weddings, celebrations and corporate events.",
    alternates: {
        canonical: "/where-we-are-today",
    },
};

export default function WhereWeAreTodayPage() {
    return (
        <main className="bg-[#0e1111]">
            <PageHero
                {...whereWeAreTodayContent.hero}
                parallax
                contentClassName="where-we-are-today-sec"
                titleClassName="font-midland text-[clamp(30px,5vw,60px)] leading-[2] lg:leading-[100px] capitalize max-w-full lg:max-w-[900px] text-[#FAF1E1]"
                overlayClassName="absolute inset-0 bg-gradient-to-t from-[#202020] via-[#202020]/55 to-transparent"
                ruleClassName="w-[80px] md:w-[300px] lg:w-[450px] text-white opacity-50"
            />
            <WordReveal
                text={whereWeAreTodayContent.statement}
                statementClassName="reveal-words-sec font-midland text-[clamp(20px,2.2vw,38px)] leading-[1.5] lg:leading-[86px] text-center"
                wordClassName="reveal-word inline-block mr-[8px] md:mr-[12px] lg:mr-[16px]"
            />
            <ClosingCTA {...whereWeAreTodayContent.cta} />
        </main>
    );
}
