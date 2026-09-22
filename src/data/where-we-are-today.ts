import type { WhereWeAreTodayContent } from "@/types/content";
import { defaultClosingCTA } from "./shared";

export const whereWeAreTodayContent: WhereWeAreTodayContent = {
    hero: {
        eyebrow: 'Where We Are Today',
        title: 'A Century of History.',
        lead: 'The restoration is complete. The doors are open. And the best chapters are still being written.',
        image: '/images/where-we-are-today.png',
        imageAlt: 'The Reserve today, a fully restored venue',
        breadcrumbs: [
            { text: 'Home', href: '/' },
            { text: 'Where We Are Today', href: '/where-we-are-today' },
        ],
    },
    statement:
        'The Reserve is open, thriving, and busier than at any point in its history. Housed within a century-old historic building, it honors the character and legacy of the past while creating a vibrant new chapter for the community.',
    cta: defaultClosingCTA,
};
