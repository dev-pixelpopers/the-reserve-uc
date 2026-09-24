import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luxury Event Venue in Union City, CA | The Reserve",
    template: "%s | The Reserve",
  },
  description: "Host weddings, corporate events and special occasions at The Reserve, a restored historic venue in Union City, CA. Explore the space and plan your event.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/Icon-Script.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/seasons-regular.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="/images/logo-new.webp"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
