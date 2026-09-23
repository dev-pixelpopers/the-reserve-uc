import type { EpisodeItem, ReserveInProgressContent } from "@/types/content";

const episodes: EpisodeItem[] = Array.from({ length: 10 }, (_, i) => {
    const number = String(i + 1).padStart(2, '0');
    return {
        number,
        title: `Episode ${number}`,
        description: i < 2 ? 'Appreciation' : `Episode ${number}`,
        video: `/videos/episodes/episode-${i + 1}.mp4`,
    };
});

export const reserveInProgressContent: ReserveInProgressContent = {
    hero: {
        eyebrow: '',
        title: 'The Reserve',
        subtitle: 'in Progress',
        lead: 'From construction milestones to architectural achievements, every update showcases the progress shaping The Reserve.',
        image: '/images/bg-banner.webp',
        imageAlt: '',
        breadcrumbs: [
            { text: 'Home', href: '/' },
            { text: 'The Reserve In Progress', href: '/the-reserve-in-progress' },
        ],
    },
    heading: {
        titleTop: 'The Reserve in',
        titleBottom: 'The Making',
    },
    episodes,
};
