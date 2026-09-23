import type { BirthdaysContent } from "@/types/services";

export const birthdaysContent: BirthdaysContent = {
    slug: 'birthdays',
    heroSubtitle:
        'Decade markers, landmark birthdays, golden anniversaries — built around the people who matter, in a venue that treats them like they do.',
    breadcrumbLabel: 'Birthday Celebrations',
    intro: {
        eyebrow: 'The Kind Of Birthday We Make',
        text: 'A birthday is one day in a life. We build the room so that one day holds the whole story of it.',
        subText:
            'From the sweetest sixteen to the fiftieth anniversary, every milestone is staged around the person being celebrated — not around a template.',
    },
    ribbon: {
        eyebrow: 'Milestones We Celebrate',
        heading: 'Every Decade Deserves a Room of Its Own',
        items: [
            { age: '16', label: 'Sweet 16' },
            { age: '21', label: 'Legal' },
            { age: '30', label: 'The Big 3-0' },
            { age: '40', label: 'Life Begins' },
            { age: '50', label: 'Half-Century' },
            { age: '60', label: 'Diamond' },
            { age: '70', label: 'Platinum' },
            { age: '80', label: 'Legacy' },
        ],
    },
    milestones: {
        eyebrow: 'Choose a Milestone',
        heading: 'Find the Celebration That Fits Your Story',
        viewingLabel: 'Viewing',
        items: [
            {
                id: 'sweet-16',
                age: '16',
                label: 'Sweet Sixteen',
                palette: '#F5C2C7',
                story: 'Confetti ceilings, dance-floor lighting, a carefully managed guest list. The evening they will measure every birthday against.',
                details: [
                    'Supervised guest entry',
                    'Custom dance-floor design',
                    'Photo booth integration',
                    'Dietary-friendly menus',
                ],
                image: '/images/insta-sec-1.webp',
            },
            {
                id: 'quarter-life',
                age: '25',
                label: 'Quarter Life',
                palette: '#DEC7AD',
                story: 'A grown-up birthday — cocktails on the terrace, a seated supper, a room that finally matches the life you have been building.',
                details: [
                    'Craft cocktail program',
                    'Grazing-table stations',
                    'Vinyl & live DJ sets',
                    'Late-night dessert bar',
                ],
                image: '/images/insta-sec-2.webp',
            },
            {
                id: 'thirty',
                age: '30',
                label: 'The Big Three-Oh',
                palette: '#B09983',
                story: 'The milestone that marks the real start. We style it serious, then slip in the joy in measured doses.',
                details: [
                    'Curated guest arrival',
                    'Chef-led tasting menu',
                    'Toasts & tribute reels',
                    'Suite for the honouree',
                ],
                image: '/images/where-we-are-today-png.webp',
            },
            {
                id: 'fifty',
                age: '50',
                label: 'Half-Century',
                palette: '#DEC7AD',
                story: 'A generational gathering. Three rooms, a photo retrospective, a live band, and a dessert course that travels decades.',
                details: [
                    'Retrospective photo wall',
                    'Multi-generational seating',
                    'Live band coordination',
                    'Memory-book stations',
                ],
                image: '/images/where-it-all-started-png.webp',
            },
            {
                id: 'golden',
                age: '50yr',
                label: 'Golden Anniversary',
                palette: '#D4AF37',
                story: 'Fifty years of partnership, honoured with a vow renewal in the chapel, a family dinner, and a ballroom for the children and grandchildren.',
                details: [
                    'Private vow renewal',
                    'Family heritage menus',
                    'Archival photo projection',
                    'Grandchildren activity suite',
                ],
                image: '/images/wedding.webp',
            },
        ],
    },
    themeWorlds: {
        eyebrow: 'Themed Worlds',
        heading: 'Four Moods, Endlessly Reimagined',
        body: 'Pick a starting mood — our design studio tunes it to the birthday child, the anniversary couple, the honoured guest.',
        items: [
            {
                name: 'Garden Soirée',
                palette: ['#DEC7AD', '#B09983', '#FAEEE1'],
                description:
                    'Blooming trellises, candlelit long tables, linen everywhere. A daylight party that eases into dusk.',
                image: '/images/insta-sec-2.webp',
            },
            {
                name: 'Art Deco Gala',
                palette: ['#0E0E0E', '#D4AF37', '#D9D9D9'],
                description:
                    'Brass, black marble, feathers and jazz. A room that looks like it arrived by ocean liner.',
                image: '/images/where-we-are-today-png.webp',
            },
            {
                name: 'Nightfall Lounge',
                palette: ['#1A1A1A', '#B09983', '#202020'],
                description:
                    'Low light, deep velvet, a saxophonist in the corner. The sophisticated set-piece for guests who prefer the shadows.',
                image: '/images/insta-sec-3.webp',
            },
            {
                name: 'Heritage & Home',
                palette: ['#FAEEE1', '#B09983', '#594B4B'],
                description:
                    'Family recipes, photographs through the decades, a slideshow scored by the birthday child. The warmest format we run.',
                image: '/images/where-it-all-started-png.webp',
            },
        ],
    },
    inclusions: {
        eyebrow: 'Every Celebration Includes',
        heading: 'Six Things We Never Charge Extra For',
        body: 'The fundamentals are built into every milestone package. Bespoke layers — fireworks, vintage cars, custom couture — are costed separately and transparently.',
        badgeLabel: 'Included',
        footnote: 'In every package',
        items: [
            {
                label: 'Dedicated Milestone Planner',
                detail: 'A single point of contact from first call to final toast — briefed on your family, your guest list and the story behind the milestone.',
            },
            {
                label: 'Themed Design Concept',
                detail: 'A full creative direction document — colour palette, florals, linens, lighting plot, menu cards — presented before we spend a dollar.',
            },
            {
                label: 'Catering & Bar Programs',
                detail: 'Chef-led menus with tasting previews, full bar service with signature cocktails, and teams that know who is allergic to what.',
            },
            {
                label: 'Entertainment Coordination',
                detail: 'Live bands, string quartets, vinyl DJs, speech coaches, toast-masters — booked, briefed and backed up before the night begins.',
            },
            {
                label: 'Photography & Videography',
                detail: 'Introductions to the photographers and cinematographers we trust. Optional same-night highlight reel for the family group chat.',
            },
            {
                label: 'Guest Transport & Stay',
                detail: 'Hotel blocks, airport transfers, welcome kits, late-night shuttle runs — the logistics stack that keeps guests feeling handled.',
            },
        ],
    },
    plan: {
        eyebrow: 'Plan A Milestone Worth Remembering',
        heading: 'Three Steps. One Unforgettable Night.',
        body: "Tell us who we're celebrating and the decade they're marking. We'll come back with three creative directions within a week.",
        image: '/images/insta-sec-1.webp',
        steps: [
            {
                step: '01',
                title: 'Tell Us The Story',
                body: 'A 30-minute call. Who we are celebrating, the decade they are marking, the people who need to be in the room.',
            },
            {
                step: '02',
                title: 'We Design Three Directions',
                body: 'Within a week you receive three full creative concepts — mood boards, menus, timings, budget envelopes.',
            },
            {
                step: '03',
                title: 'You Celebrate',
                body: 'You pick a direction. We produce the night. You arrive on the day with nothing to do but be with your people.',
            },
        ],
        closing: {
            heading: 'Ready when you are.',
            body: 'No obligation, no pressure. A 30-minute call is where every milestone we produce has started.',
            buttonLabel: 'Start Planning',
            buttonHref: '/contact-us',
        },
    },
};
