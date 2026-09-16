"use client";
import HeroBanner from "@/components/HeroBanner";
import WhatWeOffer from "@/components/WhatWeOffer";
import Services from "@/components/Services";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import PortfolioHome from "@/components/PortfolioHome";
import SocialEdit from "@/components/SocialEdit";

export default function Home() {
  return (
    <main className="bg-[#000000] hero-sec">
      <HeroBanner />
      <WhatWeOffer />
      <Services />
      <About />
      <Pricing />
      <PortfolioHome />
      <SocialEdit />
    </main>
  );
}
