import type { Metadata } from "next";
import ServiceHero from "@/components/service-detail/ServiceHero";
import ServiceFooterCTA from "@/components/service-detail/ServiceFooterCTA";
import ChefForeword from "@/components/service-detail/ChefForeword";
import DiningRooms from "@/components/service-detail/DiningRooms";
import OccasionsMarquee from "@/components/service-detail/OccasionsMarquee";
import Testimonial from "@/components/service-detail/Testimonial";
import WordReveal from "@/components/shared/WordReveal";
import { serviceMeta } from "@/data/services/meta";
import { privateDinnersContent } from "@/data/services/private-dinners";

export const metadata: Metadata = {
    title: "Private Dinners",
    description:
        "A room of your own, a chef at your service, a sommelier who has already read the wine list for you — private dining at The Reserve.",
    alternates: {
        canonical: "/what-we-offer/private-dinners",
    },
};

export default function PrivateDinnersPage() {
    return (
        <main className="bg-[#0e1111]">
            <ServiceHero
                meta={serviceMeta[privateDinnersContent.slug]}
                subtitle={privateDinnersContent.heroSubtitle}
                breadcrumbItem={{
                    text: privateDinnersContent.breadcrumbLabel,
                    href: `/what-we-offer/${privateDinnersContent.slug}`,
                }}
            />

            <WordReveal
                eyebrow={privateDinnersContent.intro.eyebrow}
                text={privateDinnersContent.intro.text}
                subText={privateDinnersContent.intro.subText}
                bgClassName="bg-[#1a1a1a]"
                textColorClassName="text-white"
                statementClassName="font-midland text-[clamp(20px,3.125vw,60px)] leading-[clamp(40px,4.79vw,92px)] text-center"
            />

            <ChefForeword {...privateDinnersContent.foreword} />
            <DiningRooms {...privateDinnersContent.rooms} />
            <OccasionsMarquee {...privateDinnersContent.occasions} />
            <Testimonial {...privateDinnersContent.testimonial} />

            <ServiceFooterCTA
                currentSlug={privateDinnersContent.slug}
                {...privateDinnersContent.footer}
            />
        </main>
    );
}
