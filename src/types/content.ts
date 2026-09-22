export interface BreadcrumbItem {
    text: string;
    href: string;
}

export interface PageHeroContent {
    eyebrow: string;
    title: string;
    subtitle?: string;
    lead?: string;
    image: string;
    imageAlt: string;
    breadcrumbs: BreadcrumbItem[];
}

export interface CTAContent {
    heading: string;
    body: string;
    buttonLabel: string;
    buttonHref: string;
    image: string;
}

export interface StatementContent {
    text: string;
    eyebrow?: string;
    subText?: string;
}

export interface TimelineItem {
    year: string;
    title: string;
    text: string;
    image: string;
}

export interface SectionHeading {
    eyebrow?: string;
    titleTop: string;
    titleBottom?: string;
}

export interface AboutContent {
    hero: PageHeroContent;
    statement: string;
    timelineHeading: SectionHeading;
    timeline: TimelineItem[];
    cta: CTAContent;
}

export interface FounderProfileContent {
    role: string;
    name: string;
    image: string;
    imageAlt: string;
    signature: string;
    signatureAlt: string;
    paragraphs: string[];
    sectionClassName: string;
    reverse?: boolean;
}

export interface LeadershipContent {
    heading: string;
    image: string;
    imageAlt: string;
    paragraphs: string[];
}

export interface FoundersContent {
    hero: PageHeroContent;
    founders: FounderProfileContent[];
    leadership: LeadershipContent;
}

export interface ServiceCard {
    id: number;
    title: string;
    description: string;
    longText?: string;
    image: string;
    href: string;
    ctaLabel: string;
}

export interface ServicesContent {
    hero: PageHeroContent;
    services: ServiceCard[];
    cta: {
        titleTop: string;
        titleBottom: string;
        body: string;
        buttonLabel: string;
        buttonHref: string;
    };
}

export interface HistoryContent {
    hero: PageHeroContent;
    paragraphs: string[];
    cta: CTAContent;
}

export interface WhereWeAreTodayContent {
    hero: PageHeroContent;
    statement: string;
    cta: CTAContent;
}

export interface VenueImage {
    src: string;
    alt: string;
}

export interface ContactInfoCard {
    number: string;
    title: string;
    lines: string[];
    links?: { label: string; href: string }[];
}

export interface SocialLink {
    label: string;
    href: string;
    icon: string;
    hidden?: boolean;
}

export interface ContactContent {
    hero: PageHeroContent;
    venueImages: VenueImage[];
    eventTypes: string[];
    infoCards: ContactInfoCard[];
    socials: SocialLink[];
    location: {
        image: string;
        heading: string;
        body: string;
        buttonLabel: string;
        buttonHref: string;
    };
}

export interface PortfolioSlide {
    place: string;
    title: string;
    title2: string;
    description: string;
    image: string;
}

export interface PortfolioContent {
    hero: {
        eyebrow: string;
        title: string;
        images: VenueImage[];
    };
    slides: PortfolioSlide[];
    closing: {
        image: string;
        heading: string;
        body: string;
        buttonLabel: string;
        buttonHref: string;
    };
}

export interface EpisodeItem {
    number: string;
    title: string;
    description: string;
    video: string;
}

export interface ReserveInProgressContent {
    hero: PageHeroContent;
    heading: SectionHeading;
    episodes: EpisodeItem[];
}

export interface PackageTier {
    id: number;
    name: string;
    capacity: string;
    tagline: string;
    dots: number;
    description: string;
    features: string[];
    image: string;
    featured?: boolean;
    badgeLabel?: string;
    buttonLabel: string;
    buttonHref: string;
}

export interface PackagesContent {
    hero: {
        titleTop: string;
        titleBottom: string;
        accentTop: string;
        accentBottom: string;
        lead: string;
    };
    packages: PackageTier[];
    philosophy: {
        statement: string;
        buttonLabel: string;
        buttonHref: string;
    };
}

export interface BlogPost {
    slug: string;
    category: string;
    date: string;
    readTime: string;
    title: string;
    excerpt: string;
    image: string;
    layout?: 'large' | 'small';
}

export interface BlogContent {
    featured: BlogPost & { ctaLabel: string; ctaHref: string };
    categories: string[];
    gridHeading: SectionHeading;
    posts: BlogPost[];
    newsletter: {
        heading: string;
        body: string;
        placeholder: string;
        buttonLabel: string;
    };
}
