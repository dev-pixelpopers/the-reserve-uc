import type { Metadata } from "next";
import VenueCarousel from "@/components/contact/VenueCarousel";
import ContactIntro from "@/components/contact/ContactIntro";
import InquiryForm from "@/components/contact/InquiryForm";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ParallaxSection from "@/components/shared/ParallaxSection";
import { contactContent } from "@/data/contact";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Tell us about your vision. Share your event details and the team at The Reserve will craft something extraordinary with you.",
};

export default function ContactUsPage() {
    return (
        <main className="bg-[#0e1111]">
            <div className="w-full min-h-screen flex flex-col lg:flex-row bg-[#0e1111] relative">
                <VenueCarousel images={contactContent.venueImages} />
                <ContactIntro
                    eyebrow={contactContent.hero.eyebrow}
                    title={contactContent.hero.title}
                    subtitle={contactContent.hero.subtitle}
                    lead={contactContent.hero.lead}
                    breadcrumbs={contactContent.hero.breadcrumbs}
                >
                    <InquiryForm eventTypes={contactContent.eventTypes} />
                </ContactIntro>
            </div>

            <ContactInfoCards cards={contactContent.infoCards} socials={contactContent.socials} />

            <ParallaxSection {...contactContent.location} external />
        </main>
    );
}
