import type { AboutContent } from "@/types/content";
import { defaultClosingCTA } from "./shared";

export const aboutContent: AboutContent = {
    hero: {
        eyebrow: 'About The Reserve',
        title: 'Where History Meets Modern Elegance',
        image: '/images/where-it-all-started.png',
        imageAlt: 'The restored facade of The Reserve',
        breadcrumbs: [
            { text: 'Home', href: '/' },
            { text: 'About The Reserve', href: '/about-the-reserve' },
        ],
    },
    statement: "We didn't just restore a building. We gave history a future.",
    timelineHeading: {
        eyebrow: 'Our journey',
        titleTop: 'A Story Written',
        titleBottom: 'in Stone & Light',
    },
    timeline: [
        {
            year: '2018',
            title: 'The Vision',
            text: 'A forgotten landmark caught our eye — its bones were magnificent, its potential limitless. We acquired the building with a single dream: to create something extraordinary.',
            image: '/images/where-it-all-started.png',
        },
        {
            year: '2020',
            title: 'The Restoration',
            text: 'Every beam inspected, every archway preserved. A renovation honored the original craftsmanship while introducing modern luxury into every corner.',
            image: '/images/where-section-bg.png',
        },
    ],
    cta: defaultClosingCTA,
};
