import type { Metadata } from "next";
import ServiceHero from "@/components/service-detail/ServiceHero";
import ServiceFooterCTA from "@/components/service-detail/ServiceFooterCTA";
import ActsStoryboard from "@/components/service-detail/ActsStoryboard";
import InclusionsGrid from "@/components/service-detail/InclusionsGrid";
import QuoteParallax from "@/components/service-detail/QuoteParallax";
import WordReveal from "@/components/shared/WordReveal";
import { serviceMeta } from "@/data/services/meta";
import { weddingsContent } from "@/data/services/weddings";

export const metadata: Metadata = {
    title: "Weddings & Receptions",
    description:
        "From the first look to the last dance, your wedding at The Reserve is choreographed, not assembled — a day composed in four acts.",
    alternates: {
        canonical: "/what-we-offer/weddings-and-receptions",
    },
};

export default function WeddingsAndReceptionsPage() {
    return (
        <main className="bg-[#0e1111]">
            <ServiceHero
                meta={serviceMeta[weddingsContent.slug]}
                subtitle={weddingsContent.heroSubtitle}
                breadcrumbItem={{
                    text: weddingsContent.breadcrumbLabel,
                    href: `/what-we-offer/${weddingsContent.slug}`,
                }}
            />

            <WordReveal
                eyebrow={weddingsContent.intro.eyebrow}
                text={weddingsContent.intro.text}
                subText={weddingsContent.intro.subText}
                bgClassName="bg-[#FAEEE1]"
                textColorClassName="text-[#242424]"
                accentColor="#B09983"
                statementClassName="font-midland text-[clamp(20px,3.125vw,60px)] leading-[clamp(40px,4.79vw,92px)] text-center"
            />

            <ActsStoryboard acts={weddingsContent.acts} />
            <InclusionsGrid {...weddingsContent.inclusions} />
            <QuoteParallax {...weddingsContent.quote} />

            <ServiceFooterCTA currentSlug={weddingsContent.slug} {...weddingsContent.footer} />
        </main>
    );
}
