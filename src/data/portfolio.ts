import type { PortfolioContent } from "@/types/content";

export const portfolioContent: PortfolioContent = {
    hero: {
        eyebrow: 'Our portfolio',
        title: "Moments We've Had the Privilege to Host",
        images: [
            { src: '/images/crafted.webp', alt: 'A crafted tablescape at The Reserve' },
            { src: '/images/where-section-bg.webp', alt: 'The Reserve ballroom' },
            { src: '/images/insta-sec-1.webp', alt: 'A celebration at The Reserve' },
        ],
    },
    slides: [
        {
            place: 'The Reserve',
            title: 'WINTER',
            title2: 'WEDDING',
            description:
                'A grand winter wedding where candle-lit halls and crystalline decor set the stage for a celebration of forever. Our team curated every detail — from ceremony to reception — into a night the couple and their guests will never forget.',
            image: '/images/wedding.webp',
        },
        {
            place: 'Corporate Gala',
            title: 'BRAND',
            title2: 'LAUNCH',
            description:
                'A flagship brand launch gala turned The Reserve into a theatre of lights, bespoke staging, and fine dining. Executives, press, and partners mingled in an atmosphere designed to make an unforgettable first impression.',
            image: '/images/where-we-are-today-png.webp',
        },
        {
            place: 'Milestone Celebration',
            title: 'GOLDEN',
            title2: 'ANNIVERSARY',
            description:
                'Fifty years of love honoured in gold. Warm florals, heirloom-inspired tablescapes, and an intimate dinner brought three generations of family together to celebrate a once-in-a-lifetime milestone.',
            image: '/images/insta-sec-1.webp',
        },
        {
            place: 'Private Dining',
            title: 'FINE',
            title2: 'DINING',
            description:
                'An evening of fine dining for discerning guests — a multi-course tasting menu, curated wine pairings, and a setting that let every plate feel like the centrepiece of the night.',
            image: '/images/insta-sec-2.webp',
        },
        {
            place: 'The Venue',
            title: 'HERITAGE',
            title2: 'OF THE RESERVE',
            description:
                "The Reserve's heritage is written into every arch, garden, and ballroom. Our most celebrated spaces have played host to the moments our guests carry with them for a lifetime.",
            image: '/images/where-it-all-started-png.webp',
        },
        {
            place: 'The Venue Today',
            title: 'WHERE',
            title2: 'WE ARE TODAY',
            description:
                'Reimagined for a new era of hospitality, The Reserve today blends timeless grandeur with modern sophistication — a destination for celebrations of every scale.',
            image: '/images/insta-sec-3.webp',
        },
    ],
    closing: {
        image: '/images/where-section-bg.webp',
        heading: 'Every Event Tells a Story',
        body: "Ready to write yours? Let's design an experience that you and your guests will remember forever.",
        buttonLabel: 'Start Planning Your Event',
        buttonHref: '/contact-us',
    },
};
