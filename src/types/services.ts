import type { ServiceSlug } from "@/data/services/meta";

export interface ServiceIntro {
    eyebrow: string;
    text: string;
    subText: string;
}

export interface ServiceFooter {
    ctaHeadline: string;
    ctaBody: string;
    ctaLabel: string;
}

export interface ServiceDetailBase {
    slug: ServiceSlug;
    heroSubtitle: string;
    breadcrumbLabel: string;
    intro: ServiceIntro;
    footer?: ServiceFooter;
}

export interface ActItem {
    act: string;
    title: string;
    body: string;
    image: string;
    details: string[];
}

export interface InclusionItem {
    label: string;
    detail: string;
}

export interface InclusionsBlock {
    eyebrow: string;
    heading: string;
    body: string;
    items: InclusionItem[];
}

export interface QuoteBlock {
    eyebrow: string;
    quote: string;
    attribution: string;
    image: string;
}

export interface WeddingsContent extends ServiceDetailBase {
    acts: ActItem[];
    inclusions: InclusionsBlock;
    quote: QuoteBlock;
}

export interface CapabilityItem {
    tag: string;
    title: string;
    body: string;
    image: string;
    specs: string[];
}

export interface FormatItem {
    title: string;
    capacity: string;
    accent: string;
}

export interface CorporateContent extends ServiceDetailBase {
    capabilities: { eyebrow: string; heading: string; scrollCue: string; items: CapabilityItem[] };
    formats: { eyebrow: string; heading: string; body: string; items: FormatItem[] };
}

export interface MilestoneItem {
    id: string;
    age: string;
    label: string;
    palette: string;
    story: string;
    details: string[];
    image: string;
}

export interface RibbonItem {
    age: string;
    label: string;
}

export interface ThemeWorld {
    name: string;
    palette: string[];
    description: string;
    image: string;
}

export interface PlanStep {
    step: string;
    title: string;
    body: string;
}

export interface BirthdaysContent extends ServiceDetailBase {
    ribbon: { eyebrow: string; heading: string; items: RibbonItem[] };
    milestones: {
        eyebrow: string;
        heading: string;
        viewingLabel: string;
        items: MilestoneItem[];
    };
    themeWorlds: { eyebrow: string; heading: string; body: string; items: ThemeWorld[] };
    inclusions: {
        eyebrow: string;
        heading: string;
        body: string;
        badgeLabel: string;
        footnote: string;
        items: InclusionItem[];
    };
    plan: {
        eyebrow: string;
        heading: string;
        body: string;
        image: string;
        steps: PlanStep[];
        closing: { heading: string; body: string; buttonLabel: string; buttonHref: string };
    };
}

export interface DiningRoom {
    name: string;
    seats: string;
    vibe: string;
    image: string;
    features: string[];
}

export interface TestimonialBlock {
    quote: string;
    name: string;
    detail: string;
}

export interface ForewordBlock {
    eyebrow: string;
    heading: string;
    body: string;
    image: string;
    imageAlt: string;
    role: string;
    name: string;
    signature: string;
}

export interface PrivateDinnersContent extends ServiceDetailBase {
    foreword: ForewordBlock;
    rooms: { eyebrow: string; heading: string; body: string; items: DiningRoom[] };
    occasions: { eyebrow: string; heading: string; footnote: string; items: string[] };
    testimonial: TestimonialBlock;
}
