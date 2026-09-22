import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import FoundersSection from "@/components/founders/FoundersSection";
import LeadershipSection from "@/components/founders/LeadershipSection";
import { foundersContent } from "@/data/meet-the-founders";

export const metadata: Metadata = {
    title: "Meet The Founders",
    description:
        "Moh and Farah Jaan — the family-led leadership behind The Reserve, uniting architectural discipline with financial stewardship.",
};

export default function MeetTheFoundersPage() {
    return (
        <main className="bg-[#0e1111]">
            <PageHero
                {...foundersContent.hero}
                imageClassName="w-full h-full object-cover scale-110 blur-[2px]"
                contentClassName="gap-[20px] lg:gap-[100px]"
                titleClassName="font-midland text-[25px] md:text-[clamp(30px,3.8vw,60px)] leading-[2] lg:leading-[100px] capitalize text-center m-auto lg:m-0 text-[#FAF1E1]"
                ruleClassName="w-[100px] md:w-[300px] lg:w-[450px] text-white"
            />
            <FoundersSection label="The founders" founders={foundersContent.founders} />
            <LeadershipSection {...foundersContent.leadership} />
        </main>
    );
}
