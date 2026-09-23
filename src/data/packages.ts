import type { PackagesContent } from "@/types/content";

export const packagesContent: PackagesContent = {
    hero: {
        titleTop: 'Curated Packages',
        titleBottom: 'Tailored to You',
        accentTop: '/images/crafted.webp',
        accentBottom: '/images/customizeable.webp',
        lead: 'Three distinct tiers, each fully customizable. Choose the foundation that fits your event, then make it entirely yours.',
    },
    packages: [
        {
            id: 1,
            name: 'The Heritage',
            tagline: 'For Intimate Gatherings',
            capacity: 'Up to 50 Guests',
            description:
                'An elegant setting for your most personal occasions. The Heritage package offers refined simplicity — curated dining, dedicated coordination, and the timeless ambiance of The Reserve.',
            features: [
                'Private dining room access',
                'Curated 3-course seasonal menu',
                'Dedicated event coordinator',
                'Standard floral arrangements',
                'Complimentary valet parking',
            ],
            image: '/images/insta-sec-2.webp',
            dots: 5,
            buttonLabel: 'Request Pricing',
            buttonHref: '/contact-us',
        },
        {
            id: 2,
            name: 'The Classic',
            tagline: 'For Elegant Celebrations',
            capacity: 'Up to 150 Guests',
            description:
                'Our most popular experience. The Classic unlocks our grand hall and pairs it with premium design, entertainment, and dining — everything you need for a truly memorable celebration.',
            features: [
                'Grand hall access',
                'Custom 5-course menu with tasting',
                'Senior event curator',
                'Premium floral & décor design',
                'Live entertainment coordination',
                'Photography-ready lighting design',
                'Complimentary valet & coat check',
            ],
            image: '/images/wedding-and-reception.webp',
            dots: 15,
            featured: true,
            badgeLabel: 'Most Popular',
            buttonLabel: 'Request Pricing',
            buttonHref: '/contact-us',
        },
        {
            id: 3,
            name: 'The Reserve',
            tagline: 'The Complete Experience',
            capacity: 'Up to 300 Guests',
            description:
                'Full venue exclusivity. A dedicated planning team. Bespoke everything. The Reserve package is our ultimate expression of luxury — crafted for events that refuse to compromise.',
            features: [
                'Full venue exclusivity',
                'Bespoke menu by executive chef',
                'Dedicated planning team of three',
                'Luxury floral & immersive décor',
                'Entertainment & AV production',
                'Sommelier-curated wine pairing',
                'Guest concierge & accommodation',
                'Post-event photo & video package',
            ],
            image: '/images/where-we-are-today-png.webp',
            dots: 30,
            buttonLabel: 'Request Pricing',
            buttonHref: '/contact-us',
        },
    ],
    philosophy: {
        statement:
            'At The Reserve, luxury is defined by intention where every detail is thoughtfully considered, every space is beautifully composed, and every experience feels seamless.',
        buttonLabel: 'Schedule a Private Tour',
        buttonHref: '/contact-us',
    },
};
