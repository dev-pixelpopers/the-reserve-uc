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
                'Elevate your brand with a setting that speaks volumes. Sophistication that leaves a lasting impression.',
            longText:
                "From product launches to executive retreats, The Reserve becomes your brand's stage. Flexible spaces adapt to your vision — whether it's an intimate board dinner or a gala.",
            image: '/images/corporate-events.png',
            href: '/what-we-offer/corporate-events',
            ctaLabel: 'Explore Corporate & Brand',
        },
        {
            id: 3,
            title: 'Special Occasions',
            description: "Mark life's greatest moments in a venue that matches their significance.",
            longText:
                'Birthdays, anniversaries, graduations — moments that deserve more than ordinary. Our spaces transform to match your milestone.',
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
