import type { Metadata } from "next";
import ServiceHero from "@/components/service-detail/ServiceHero";
import ServiceFooterCTA from "@/components/service-detail/ServiceFooterCTA";
import CapabilityScroller from "@/components/service-detail/CapabilityScroller";
import FormatsGrid from "@/components/service-detail/FormatsGrid";
import WordReveal from "@/components/shared/WordReveal";
import { serviceMeta } from "@/data/services/meta";
import { corporateContent } from "@/data/services/corporate";

export const metadata: Metadata = {
    title: "Corporate Events",
    description:
        "Conferences, launches, executive summits and brand dinners — hosted with the precision of a boardroom and the polish of a black-tie gala.",
    alternates: {
        canonical: "/what-we-offer/corporate-events",
    },
};

export default function CorporateEventsPage() {
    return (
        <main className="bg-[#0e1111]">
            <ServiceHero
                meta={serviceMeta[corporateContent.slug]}
                subtitle={corporateContent.heroSubtitle}
                breadcrumbItem={{
                    text: corporateContent.breadcrumbLabel,
                    href: `/what-we-offer/${corporateContent.slug}`,
                }}
            />

            <WordReveal
                eyebrow={corporateContent.intro.eyebrow}
                text={corporateContent.intro.text}
                subText={corporateContent.intro.subText}
                bgClassName="bg-[#1a1a1a]"
                textColorClassName="text-white"
                statementClassName="font-midland text-[clamp(20px,3.125vw,60px)] leading-[clamp(40px,6vw,92px)] text-center"
            />

            <CapabilityScroller {...corporateContent.capabilities} />
            <FormatsGrid {...corporateContent.formats} />

            <ServiceFooterCTA currentSlug={corporateContent.slug} {...corporateContent.footer} />
        </main>
    );
}
