import type { CorporateContent } from "@/types/services";

export const corporateContent: CorporateContent = {
    slug: 'corporate-events',
    heroSubtitle:
        'Hosted with the precision of a boardroom and the polish of a black-tie gala — because the stakes are always both.',
    breadcrumbLabel: 'Corporate Events',
    intro: {
        eyebrow: 'The Brief We Write For Ourselves',
        text: 'Your brand stands on a stage for one night. We spend three months building it, and the night after, we have already pulled it down.',
        subText:
            'Every corporate event at The Reserve is engineered with the quiet obsessiveness of a production studio. The stage you see is the tip of a system you never do.',
    },
    capabilities: {
        eyebrow: 'Capabilities',
        heading: 'What We Build For You',
        scrollCue: 'Scroll →',
        items: [
            {
                tag: 'Conferences',
                title: 'Full-Day Conferences',
                body: 'Keynote stages, breakout suites, networking lounges — reconfigured in minutes, not hours. Our ops team ships a Run-of-Show document before you arrive.',
                image: '/images/where-we-are-today-png.webp',
                specs: [
                    'Up to 600 theatre-style',
                    '8 breakout rooms',
                    'Live streaming & recording',
                    'On-site AV engineers',
                ],
            },
            {
                tag: 'Product Launches',
                title: 'Launches & Activations',
                body: 'Brand-stage, press-wall, hero-product spotlight. We build your reveal moment with theatrical lighting, scented air, and a guest-flow designed for share-worthy content.',
                image: '/images/insta-sec-2.webp',
                specs: [
                    'Custom stage architecture',
                    'Brand-matched lighting plots',
                    'Press-ready photography set',
                    'Social-first guest flow',
                ],
            },
            {
                tag: 'Executive Summits',
                title: 'Board & Executive Summits',
                body: 'Confidentiality by design. Sound-isolated suites, screened catering, discreet entrances — for the meetings that never make the press release.',
                image: '/images/where-it-all-started-png.webp',
                specs: [
                    'Sound-isolated boardrooms',
                    'Secure discreet entry',
                    'White-glove service',
                    'Dedicated liaison per delegate',
                ],
            },
            {
                tag: 'Brand Dinners',
                title: 'Client & Brand Dinners',
                body: 'Chef-led tasting menus, sommelier pairings, a private room. The context in which real relationships get built.',
                image: '/images/insta-sec-1.webp',
                specs: [
                    'Chef tasting menus',
                    'Sommelier pairings',
                    'Private dining rooms',
                    'Personalised menu printing',
                ],
            },
        ],
    },
    formats: {
        eyebrow: 'Event Formats',
        heading: 'From Fireside to Flagship Gala',
        body: 'Six formats we have rehearsed hundreds of times — and the confidence to invent the seventh for you.',
        items: [
            { title: 'Fireside Chats', capacity: '40 · intimate', accent: 'Leather lounge + single spotlight.' },
            { title: 'Town Halls', capacity: '250 · democratic', accent: 'Theatre seating + roaming mic.' },
            { title: 'Product Galas', capacity: '400 · theatrical', accent: 'Stage, runway, press wall.' },
            { title: 'Innovation Labs', capacity: '80 · hands-on', accent: 'Workshop pods + whiteboard walls.' },
            { title: 'Press Previews', capacity: '120 · curated', accent: 'Photo set + interview corners.' },
            { title: 'Awards Evenings', capacity: '500 · black-tie', accent: 'Ballroom + stage + band pit.' },
        ],
    },
    footer: {
        ctaHeadline: 'Brief Our Team',
        ctaBody:
            'Send us your run-of-show, your wish list, or just a rough idea. We will respond with a tailored capability document within 24 hours.',
        ctaLabel: 'Request a Capability Deck',
    },
};
