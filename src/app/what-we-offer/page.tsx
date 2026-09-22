import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceExplorer from "@/components/services/ServiceExplorer";
import ServicesCTA from "@/components/services/ServicesCTA";
import { servicesContent } from "@/data/what-we-offer";

export const metadata: Metadata = {
    title: "What We Offer",
    description:
        "Weddings and receptions, corporate events, and special occasions — every event at The Reserve is crafted with intention and elegance.",
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
