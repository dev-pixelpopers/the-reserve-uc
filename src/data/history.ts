import type { HistoryContent } from "@/types/content";
import { defaultClosingCTA } from "./shared";

export const historyContent: HistoryContent = {
    hero: {
        eyebrow: 'History of The Reserve',
        title: 'One Hundred Years',
        lead: "The Reserve’s story is rooted in a passion for bringing people together and creating meaningful experiences. What began as a vision has grown into a destination where every celebration is thoughtfully designed and beautifully remembered.",
        image: '/images/where-it-all-started-png.webp',
        imageAlt: 'The Reserve building facade, circa 1923',
        breadcrumbs: [
            { text: 'Home', href: '/' },
            { text: 'History Of The Reserve', href: '/history-of-the-reserve' },
        ],
    },
    paragraphs: [
        'The Reserve is housed in a historic 1925 building in Old Alvarado, one of Union City’s oldest and most storied communities. Once part of a thriving agricultural and commercial center, Alvarado was the first county seat of Alameda County and played an important role in the region’s early development.',
        'The building was constructed in 1925 as a bank, continuing Alvarado’s long-standing banking history that began with the Bank of Alvarado in 1902. Over the decades, the landmark evolved alongside the community, serving as a bank, entertainment venue, and home to several restaurants.',
        'Today, The Reserve honors that rich past while giving the building a new purpose. Thoughtfully restored and reimagined as an elegant event venue, it remains a place where people gather, celebrate, and create lasting memories.',
        'Nearly a century later, The Reserve continues its legacy of being a place of significance, once entrusted with people’s wealth, and now entrusted with their most meaningful moments.',
    ],
    cta: defaultClosingCTA,
};
