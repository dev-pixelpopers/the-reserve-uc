import type { ServicesContent } from "@/types/content";

export const servicesContent: ServicesContent = {
    hero: {
        eyebrow: 'What we offer',
        title: 'Events Worth',
        subtitle: 'Remembering',
        lead: 'From grand celebrations to intimate gatherings, every event at The Reserve is crafted with intention and elegance.',
        image: '/images/bg-banner.png',
        imageAlt: '',
        breadcrumbs: [
            { text: 'Home', href: '/' },
            { text: 'What We Offer', href: '/what-we-offer' },
        ],
    },
    services: [
        {
            id: 1,
            title: 'Weddings & Receptions',
            description:
                'Where timeless romance meets effortless luxury. Each moment thoughtfully curated, beautifully celebrated, and truly unforgettable.',
            image: '/images/weddings-receptions.jpg',
            href: '/what-we-offer/weddings-and-receptions',
            ctaLabel: 'See the Wedding Experience',
        },
        {
            id: 2,
            title: 'Corporate Events',
            description:
                'Elevate your brand with a setting designed to make an impression. At The Reserve, refined architecture, sophisticated ambiance, and thoughtfully curated spaces create an elevated backdrop for meaningful experiences.',
            longText:
                [
                    "From product launches and executive retreats to corporate dinners and gala celebrations, The Reserve becomes an extension of your brand and providing a distinctive setting where your vision takes center stage.",
                    "Our flexible spaces can be tailored to complement your event, whether you're hosting an intimate executive gathering or a sophisticated large-scale celebration."
                ],
            image: '/images/corporate-events.png',
            href: '/what-we-offer/corporate-events',
            ctaLabel: 'Explore Corporate & Brand',
        },
        {
            id: 3,
            title: 'Special Occasions',
            description: "Mark life's greatest moments in a venue that matches their significance.",
            longText: ['Birthdays, anniversaries, graduations — moments that deserve more than ordinary. Our spaces transform to match your milestone.'],
            image: '/images/special-occasions.png',
            href: '/what-we-offer/birthdays',
            ctaLabel: 'Plan a Milestone',
        },
    ],
    cta: {
        titleTop: "Let's Create",
        titleBottom: 'Your Perfect Event',
        body: "Every celebration is unique. Tell us about yours and we'll craft an experience that exceeds your expectations.",
        buttonLabel: 'Request Pricing & Availability',
        buttonHref: '/contact-us',
    },
};
