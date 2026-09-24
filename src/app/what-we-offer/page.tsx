import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceExplorer from "@/components/services/ServiceExplorer";
import ServicesCTA from "@/components/services/ServicesCTA";
import { servicesContent } from "@/data/what-we-offer";

export const metadata: Metadata = {
    title: "Weddings & Corporate Events in Union City | The Reserve",
    description: "Explore The Reserve for weddings, corporate events and milestone celebrations in Union City, CA. Discover flexible spaces and inquire about your event.",
    alternates: {
        canonical: "/what-we-offer",
    },
};

export default function WhatWeOfferPage() {
    return (
        <main className="bg-[#0e1111]">
            <ServicesHero {...servicesContent.hero} />
            <ServiceExplorer services={servicesContent.services} />
            <ServicesCTA {...servicesContent.cta} />
        </main>
    );
}
