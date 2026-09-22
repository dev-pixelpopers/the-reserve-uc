import type { Metadata } from "next";
import ServiceHero from "@/components/service-detail/ServiceHero";
import ServiceFooterCTA from "@/components/service-detail/ServiceFooterCTA";
import DecadeRibbon from "@/components/service-detail/DecadeRibbon";
import MilestoneSelector from "@/components/service-detail/MilestoneSelector";
import ThemedWorlds from "@/components/service-detail/ThemedWorlds";
import MilestoneInclusions from "@/components/service-detail/MilestoneInclusions";
import PlanSteps from "@/components/service-detail/PlanSteps";
import WordReveal from "@/components/shared/WordReveal";
import { serviceMeta } from "@/data/services/meta";
import { birthdaysContent } from "@/data/services/birthdays";

export const metadata: Metadata = {
    title: "Birthday Celebrations",
    description:
        "Sweet sixteens, landmark birthdays and golden anniversaries — milestones staged around the person being celebrated, not a template.",
};

export default function BirthdaysPage() {
    return (
        <main className="bg-[#0e1111]">
            <ServiceHero
                meta={serviceMeta[birthdaysContent.slug]}
                subtitle={birthdaysContent.heroSubtitle}
                breadcrumbItem={{
                    text: birthdaysContent.breadcrumbLabel,
                    href: `/what-we-offer/${birthdaysContent.slug}`,
                }}
            />

            <WordReveal
                eyebrow={birthdaysContent.intro.eyebrow}
                text={birthdaysContent.intro.text}
                subText={birthdaysContent.intro.subText}
                bgClassName="bg-[#FAEEE1]"
                textColorClassName="text-[#242424]"
                accentColor="#B09983"
                statementClassName="font-midland text-[clamp(20px,3.125vw,60px)] leading-[clamp(40px,4.79vw,92px)] text-center"
            />

            <DecadeRibbon {...birthdaysContent.ribbon} />
            <MilestoneSelector {...birthdaysContent.milestones} />
            <ThemedWorlds {...birthdaysContent.themeWorlds} />
            <MilestoneInclusions {...birthdaysContent.inclusions} />
            <PlanSteps {...birthdaysContent.plan} />

            <ServiceFooterCTA currentSlug={birthdaysContent.slug} hideCTA />
        </main>
    );
}
