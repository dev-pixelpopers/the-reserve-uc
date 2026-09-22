import type { PrivateDinnersContent } from "@/types/services";

export const privateDinnersContent: PrivateDinnersContent = {
    slug: 'private-dinners',
    heroSubtitle:
        'A room of your own, a chef at your service, a sommelier who has already read the wine list for you. Seven courses, zero compromises.',
    breadcrumbLabel: 'Private Dinners',
    intro: {
        eyebrow: 'The Philosophy',
        text: "We don't serve meals. We stage evenings — one table, one conversation, one carefully held hour at a time.",
        subText:
            'A private dinner at The Reserve is a piece of theatre. The guests are the cast. We are the stagehands you never see.',
    },
    foreword: {
        eyebrow: "Chef's Foreword",
        heading: '"A private dinner is a small theatre. We write the script around your table."',
        body: 'Every menu we cook is composed for the table that is sitting down — allergies, preferences, anniversaries, the wine you drank on your first date. Nothing is copy-pasted. Nothing arrives by accident.',
        image: '/images/farah-jaan.png',
        imageAlt: 'Farah Jaan, Executive Chef',
        role: 'Executive Chef',
        name: 'Farah Jaan',
        signature: '/images/farah-jaan-signature.png',
    },
    rooms: {
        eyebrow: 'Three Private Rooms',
        heading: 'Choose the Room That Matches the Evening',
        body: 'Three rooms, each with its own temperament. We will recommend the one we think fits your guests best.',
        items: [
            {
                name: 'The Library',
                seats: '2 – 10 guests',
                vibe: 'Oak panels, floor-to-ceiling shelves, a working fireplace. For the conversation that needs no interruption.',
                image: '/images/where-it-all-started.png',
                features: [
                    'Fireplace, actually working',
                    'Private bar trolley',
                    'Dedicated sommelier',
                    'Leather wingback seating',
                ],
            },
            {
                name: 'The Conservatory',
                seats: '8 – 24 guests',
                vibe: 'Glass ceiling, white linen, garden views. Light-filled by day, candlelit by night.',
                image: '/images/where-section-bg.png',
                features: [
                    'Garden-facing glass roof',
                    'Long single-table setting',
                    'Live pianist option',
                    'Seasonal menu integration',
                ],
            },
            {
                name: 'The Vault',
                seats: '4 – 12 guests',
                vibe: 'Below the main floor. Low light, dark stone, the wine cellar visible through glass. For the most discreet evenings.',
                image: '/images/insta-sec-3.png',
                features: [
                    'Sound-isolated',
                    'Direct cellar access',
                    'Private entrance',
                    "Chef's table option",
                ],
            },
        ],
    },
    occasions: {
        eyebrow: "Occasions We've Hosted",
        heading: 'Every Reason to Gather at a Table',
        footnote: "Don't see yours? If it matters to you, we will make it happen.",
        items: [
            'Engagement Dinners',
            'Milestone Birthdays',
            'Wedding Anniversaries',
            'Retirement Toasts',
            'Business Closings',
            'Author Evenings',
            'Welcome Dinners',
            'Memorial Gatherings',
            'Holiday Feasts',
            "Valentine's Evenings",
            "Father's Day Lunches",
            "Mother's Day Brunches",
            "Chef's Table Tastings",
            'Wine Club Evenings',
            'Private Chef Classes',
        ],
    },
    testimonial: {
        quote:
            'The chef sent out a course that was not on the printed menu — because we had mentioned, in passing, that my wife loved it. Nine courses, nine surprises, one evening we will keep talking about.',
        name: 'Mr. & Mrs. Haddad',
        detail: '25th Anniversary · The Library',
    },
    footer: {
        ctaHeadline: 'Reserve a Private Table',
        ctaBody:
            'Tell us the date, the occasion, and the people. We will come back with a room, a menu, and a wine list — ready for your approval.',
        ctaLabel: 'Request a Private Dinner',
    },
};
