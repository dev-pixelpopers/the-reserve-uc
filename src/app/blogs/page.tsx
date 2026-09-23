import type { Metadata } from "next";
import FeaturedPost from "@/components/blog/FeaturedPost";
import CategoryTicker from "@/components/blog/CategoryTicker";
import PostGrid from "@/components/blog/PostGrid";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import { blogContent } from "@/data/blog";

export const metadata: Metadata = {
    title: "The Journal",
    description:
        "Stories, insights and inspiration from The Reserve — weddings, design, culinary and behind-the-scenes of luxury events.",
    alternates: {
        canonical: "/blogs",
    },
};

export default function BlogsPage() {
    return (
        <main className="bg-[#0e1111]">
            <FeaturedPost {...blogContent.featured} />
            <CategoryTicker categories={blogContent.categories} />
            <PostGrid heading={blogContent.gridHeading} posts={blogContent.posts} />
            <NewsletterSignup {...blogContent.newsletter} />
        </main>
    );
}
