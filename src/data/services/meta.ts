export type ServiceSlug =
    | 'weddings-and-receptions'
    | 'corporate-events'
    | 'birthdays'
    | 'private-dinners';

export interface ServiceMeta {
    slug: ServiceSlug;
    eyebrow: string;
    title: string;
    tagline: string;
    heroImage: string;
    heroAccent: string;
}

export const serviceMeta: Record<ServiceSlug, ServiceMeta> = {
    'weddings-and-receptions': {
        slug: 'weddings-and-receptions',
        eyebrow: 'What we offer · 01',
        title: 'Weddings & Receptions',
        tagline:
            'Where forever begins — candlelit ceremonies, ballroom receptions, and an estate that holds your story for generations.',
        heroImage: '/images/weddings-receptions.webp',
        heroAccent: '#DEC7AD',
    },
    'corporate-events': {
        slug: 'corporate-events',
        eyebrow: 'What we offer · 02',
        title: 'Corporate Events',
        tagline:
            'A stage for serious business and unforgettable brand moments — conferences, launches and private summits, designed with intent.',
        heroImage: '/images/where-we-are-today-png.webp',
        heroAccent: '#B09983',
    },
    'birthdays': {
        slug: 'birthdays',
        eyebrow: 'What we offer · 03',
        title: 'Birthday Celebrations',
        tagline:
            'Sweet sixteens, golden anniversaries, and every decade worth toasting — moments that deserve more than ordinary.',
        heroImage: '/images/insta-sec-1.webp',
        heroAccent: '#DEC7AD',
    },
    'private-dinners': {
        slug: 'private-dinners',
        eyebrow: 'What we offer · 04',
        title: 'Private Dinners',
        tagline:
            'An intimate room, a chef-curated tasting, a sommelier at your table — evenings engineered for the quiet, important conversations.',
        heroImage: '/images/insta-sec-3.webp',
        heroAccent: '#B09983',
    },
};

export const serviceOrder: ServiceSlug[] = [
    'weddings-and-receptions',
    'corporate-events',
    'birthdays',
    'private-dinners',
];
