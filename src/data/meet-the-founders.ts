import type { FoundersContent } from "@/types/content";

export const foundersContent: FoundersContent = {
    hero: {
        eyebrow: 'The Visionaries',
        title: 'Meet the founders',
        image: '/images/meet-the-founder-bg.jpg',
        imageAlt: 'Moh and Farah Jaan at The Reserve',
        breadcrumbs: [
            { text: 'Home', href: '/' },
            { text: 'Meet The Founders', href: '/meet-the-founders' },
        ],
    },
    founders: [
        {
            role: 'Ceo & Founder',
            name: 'Moh Jaan',
            image: '/images/moh-profile-img.jpg',
            imageAlt: 'Moh Jaan',
            signature: '/images/moh-jaan-signature.png',
            signatureAlt: 'Signature of Moh Jaan',
            sectionClassName: 'moh-sec',
            paragraphs: [
                'Moh Jaan produced his first wedding at fourteen — the beginning of a career spanning more than two decades and establishing him as a disciplined force within the luxury events sector. With over sixteen years of professional leadership, he is regarded for architectural precision, operational command, and the ability to execute complex productions across both cultural and corporate environments.',
                'As Founder and CEO of Dimensional Designs by Moh, a full-scale design and production firm, Moh directs distinguished weddings, large-format cultural celebrations, and executive-level corporate engagements for leading Silicon Valley companies. His work is defined not by trend, but by structure — where creative vision is supported by infrastructure, rigor, and long-term client relationships.',
                'Formally trained in interior design and architecture at the Academy of Art University in San Francisco, he approaches development with technical discipline and restraint. His Kashmiri Indian and Afghan heritage informs a global perspective, allowing him to navigate tradition, enterprise, and contemporary luxury with measured fluency.',
                'The Reserve represents a deliberate expansion of that foundation. As sole owner of the 101-year-old landmark, Moh led its acquisition and restoration, repositioning the historic property as a generational asset.',
                'Ownership, to him, has never meant possession. It means stewardship, preserving what is worthy, elevating it with discipline, and passing it forward stronger than it was received.',
            ],
        },
        {
            role: 'Co-Ceo & Co-Founder',
            name: 'Farah Jaan',
            image: '/images/farah-profile-img.jpg',
            imageAlt: 'Farah Jaan',
            signature: '/images/farah-jaan-signature.png',
            signatureAlt: 'Signature of Farah Jaan',
            sectionClassName: 'farah-sec',
            reverse: true,
            paragraphs: [
                'Farah Jaan brings global perspective and disciplined governance to the leadership of The Reserve. With multiple postgraduate degrees and extensive experience across business, law, and accounting, she brings a comprehensive perspective to strategy, compliance, and financial management. Her foundation is rooted in structure, financial integrity, and strategic oversight. The framework that allows institutions to endure.',
                'After working with leading firms including PwC and advising complex organizations across international markets, she developed a refined understanding of enterprise at scale.',
                'Her return to California marks a meaningful next chapter, grounded in her Kashmiri Indian and Afghan heritage.',
                'As Co-CEO, she oversees financial governance, operational systems, and long-term strategic positioning. For her, legacy is not assumed. It is safeguarded.',
                'In addition to her role at The Reserve, Farah serves as Chief Operating Officer of Dimensional Designs by Moh, where she holds a senior executive position overseeing operations, financial management, client relations, strategic growth, and the systems that support the seamless execution of highly curated design experiences. Her leadership has helped shape the company’s continued evolution and reputation for excellence.',
                'Together, their leadership reflects a shared philosophy: that exceptional institutions are built not only through vision, but through discipline, stewardship, and a commitment to creating something that will endure for generations.',
            ],
        },
    ],
    leadership: {
        heading: 'Leadership',
        image: '/images/founders.jpg',
        imageAlt: 'The leadership of The Reserve',
        paragraphs: [
            'The Reserve is guided by a family-led leadership structure grounded in vision, governance, and long-horizon thinking. As Co-CEOs, Moh and Farah Jaan unite architectural discipline with financial oversight, balancing creative authority with institutional rigor under a shared standard of permanence.',
            'At the heart of this leadership is their mother, whose wisdom, resilience, and unwavering example laid the foundation for everything they do. Her guidance instilled the values of integrity, discipline, and care for community that continue to shape both The Reserve and Dimensional Designs. She is not only the inspiration behind their leadership but the backbone of the principles that drive every decision and every achievement.',
            'The team they assemble is held to the same principle. Those who work within The Reserve are not simply employees, but stewards of its reputation, individuals entrusted to uphold its standard and carry its legacy forward.',
            'What is built here is intended to endure, in memory, in craftsmanship, and in the people who shape it.',
        ],
    },
};
