import type { WeddingsContent } from "@/types/services";

export const weddingsContent: WeddingsContent = {
    slug: 'weddings-and-receptions',
    heroSubtitle:
        'From the first look to the last dance, your wedding at The Reserve is choreographed, not assembled.',
    breadcrumbLabel: 'Weddings And Receptions',
    intro: {
        eyebrow: 'A Ceremony In Four Acts',
        text: 'A wedding is not a single event. It is a day composed of moments, and we tune each one.',
        subText:
            'Every wedding at The Reserve is built as a four-act story, with tempo, pacing and quiet pauses designed in from the first meeting.',
    },
    acts: [
        {
            act: 'Act I',
            title: 'The Ceremony',
            body: 'Aisles framed by century-old oaks. A string quartet under a candlelit arch. The moment when two lives become one — staged with the weight it deserves.',
            image: '/images/wedding.webp',
            details: [
                'Outdoor & chapel options',
                'Custom floral arches',
                'Live musician coordination',
                'Weather contingency suites',
            ],
        },
        {
            act: 'Act II',
            title: 'Cocktail Hour',
            body: 'Bespoke cocktails on the terrace while the light softens. Hand-passed canapés, a jazz trio, and time for guests to settle into celebration.',
            image: '/images/insta-sec-2.webp',
            details: [
                'Signature cocktail design',
                'Passed & stationed canapés',
                'Live entertainment',
                'Sunset terrace access',
            ],
        },
        {
            act: 'Act III',
            title: 'The Reception',
            body: 'A chandelier-lit ballroom. Tablescapes of imported linens and heritage china. A plated dinner — or family-style feast — paired with a sommelier-led wine flight.',
            image: '/images/where-we-are-today-png.webp',
            details: [
                'Plated or family-style dining',
                'Sommelier wine pairings',
                'Imported linens & china',
                'Custom menu design',
            ],
        },
        {
            act: 'Act IV',
            title: 'The Last Dance',
            body: 'Dance floor, sparkler send-off, late-night bites. The night you will replay for the rest of your lives — given the room it deserves.',
            image: '/images/insta-sec-1.webp',
            details: [
                'Live band or DJ coordination',
                'Late-night food carts',
                'Sparkler & confetti exits',
                'Suite for the couple',
            ],
        },
    ],
    inclusions: {
        eyebrow: 'Every Wedding Includes',
        heading: "The Things You Shouldn't Have to Think About",
        body: 'Our weddings arrive complete. The list below is the floor, not the ceiling — the custom work is a conversation.',
        items: [
            {
                label: 'Dedicated Wedding Concierge',
                detail: 'A single point of contact from inquiry to send-off.',
            },
            {
                label: 'Exclusive Estate Access',
                detail: 'The grounds are yours — no overlapping events on your day.',
            },
            {
                label: 'Design & Floral Studio',
                detail: 'In-house creative team builds your bespoke visual world.',
            },
            {
                label: 'Bridal & Groom Suites',
                detail: 'Private prep rooms with hair, make-up and hospitality.',
            },
            {
                label: 'Catering & Bar Programs',
                detail: 'Chef-led menus and curated bar service, tasted in advance.',
            },
            {
                label: 'Tech & Lighting Design',
                detail: 'Lighting plots, sound engineering and drone-ready venues.',
            },
        ],
    },
    quote: {
        eyebrow: 'Moments we protect',
        quote:
            '"The first look. The first dance. The walk down the aisle. These are the moments we guard with our lives."',
        attribution: 'Farah Jaan, Events Director at The Reserve',
        image: '/images/where-section-bg.webp',
    },
    footer: {
        ctaHeadline: 'Begin Your Wedding at The Reserve',
        ctaBody:
            'Schedule a private tour — we will walk the estate, hear your story, and begin composing your day.',
        ctaLabel: 'Start the Conversation',
    },
};
