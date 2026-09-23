import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

type Route = {
    path: string;
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
    priority: number;
};

const routes: Route[] = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/what-we-offer", changeFrequency: "monthly", priority: 0.9 },
    // { path: "/what-we-offer/weddings-and-receptions", changeFrequency: "monthly", priority: 0.8 },
    // { path: "/what-we-offer/corporate-events", changeFrequency: "monthly", priority: 0.8 },
    // { path: "/what-we-offer/private-dinners", changeFrequency: "monthly", priority: 0.8 },
    // { path: "/what-we-offer/birthdays", changeFrequency: "monthly", priority: 0.8 },
    // { path: "/packages", changeFrequency: "monthly", priority: 0.8 },
    { path: "/our-portfolio", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact-us", changeFrequency: "yearly", priority: 0.8 },
    { path: "/blogs", changeFrequency: "weekly", priority: 0.7 },
    { path: "/about-the-reserve", changeFrequency: "yearly", priority: 0.7 },
    { path: "/history-of-the-reserve", changeFrequency: "yearly", priority: 0.6 },
    { path: "/where-we-are-today", changeFrequency: "monthly", priority: 0.6 },
    { path: "/meet-the-founders", changeFrequency: "yearly", priority: 0.6 },
    { path: "/the-reserve-in-progress", changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return routes.map(({ path, changeFrequency, priority }) => ({
        url: path === "/" ? siteUrl : `${siteUrl}${path}`,
        lastModified,
        changeFrequency,
        priority,
    }));
}
