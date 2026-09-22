import type { Metadata } from "next";
import PackagesHero from "@/components/packages/PackagesHero";
import PackageStack from "@/components/packages/PackageStack";
import PhilosophyReveal from "@/components/packages/PhilosophyReveal";
import { packagesContent } from "@/data/packages";

export const metadata: Metadata = {
    title: "Curated Packages",
    description:
        "Three distinct tiers, each fully customizable — The Heritage, The Classic and The Reserve. Choose the foundation that fits your event.",
};

export default function PackagesPage() {
    return (
        <main className="bg-[#0e1111]">
            <PackagesHero {...packagesContent.hero} />
            <PackageStack packages={packagesContent.packages} />
            <PhilosophyReveal {...packagesContent.philosophy} />
        </main>
    );
}
