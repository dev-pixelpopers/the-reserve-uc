import type { ContactContent } from "@/types/content";

export const contactContent: ContactContent = {
    hero: {
        eyebrow: 'Get in Touch',
        title: 'Tell Us',
        subtitle: 'About Your Vision',
        lead: "Every great event starts with a conversation. Share your details and we'll craft something extraordinary together.",
        image: '',
        imageAlt: '',
        breadcrumbs: [
            { text: 'Home', href: '/' },
            { text: 'Contact Us', href: '/contact-us' },
        ],
    },
    venueImages: [
        { src: '/images/where-it-all-started-png.webp', alt: 'The Reserve, restored facade' },
        { src: '/images/where-we-are-today-jpg.webp', alt: 'The Reserve today' },
        { src: '/images/weddings-receptions.webp', alt: 'A wedding reception at The Reserve' },
        { src: '/images/special-occasions.webp', alt: 'A special occasion at The Reserve' },
        { src: '/images/corporate-events.webp', alt: 'A corporate event at The Reserve' },
    ],
    eventTypes: [
        'Wedding & Reception',
        'Corporate Event',
        'Birthday & Milestone',
        'Private Dinner',
        'Other',
    ],
    infoCards: [
        {
            number: '01',
            title: 'Visit Us',
            lines: ['31014 Union City blvd.', 'Union city', 'CA 94587'],
        },
        {
            number: '02',
            title: 'Reach Out',
            lines: [],
            links: [
                { label: '(510) 400-3188', href: 'tel:+15104003188' },
                { label: 'reservations@thereserveuc.com', href: 'mailto:reservations@thereserveuc.com' },
            ],
        },
        {
            number: '03',
            title: 'Hours',
            lines: ['By Appointment'],
        },
    ],
    socials: [
        { label: 'Facebook', href: '#', icon: '', hidden: true },
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/thereserveuc?igsh=bjAwbTg1d21wcHN2',
            icon: '',
        },
        {
            label: 'TikTok',
            href: 'https://www.tiktok.com/@thereserveuc?_r=1&_t=ZS-96YPoMhtm8V',
            icon: '',
        },
    ],
    location: {
        image: '/images/where-section-bg.webp',
        heading: 'The Reserve',
        body: '31014 Union City blvd. Union city CA 94587',
        buttonLabel: 'Get Directions',
        buttonHref: 'https://maps.app.goo.gl/THTVLpjstJ49aQTE7',
    },
};
